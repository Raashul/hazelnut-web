import React from "react";
import styled from "styled-components";
import Nav from "../components/dashboard/dashboard_nav";
import DashDetail from "../components/dashboard/dash_detail";
import DashFooter from "../components/dashboard/dashboard_footer";
import Group from "../components/dashboard/dashboard_fb";
import DashList from "../components/dashboard/invitationList";
import Rank from "../components/dashboard/rank";
import * as api from "../api";

import { Alert } from "react-bootstrap";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Horizontal = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0px;
    margin: 10px;
  }
`;

const Vertical = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    padding: 0px;
    margin: 10px;
  }
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      apicalled: false,
      response: null,
      tags: [],
      errorInvite: [],
      alert: {
        showSuccessAlert: false,
        showErrorAlert: false,
        msg: ""
      }
    };
  }

  validateEmails = emails => {
    let valid_emails = [];
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emails.forEach(email => {
      if (re.test(String(email).toLowerCase())) {
        valid_emails.push(email);
      }
    });
    return valid_emails;
  };

  handleInvitation = (e, emails) => {
    this.setState({ isLoading: true });

    const valid_emails = this.validateEmails(emails);
    if (valid_emails.length === 0) {
      this.setState({
        alert: Object.assign({}, this.state.alert, {
          showErrorAlert: true,
          msg: "Enter atleast 1 valid email"
        }),
        isLoading: false
      });
      return;
    }
    let actions = [];
    actions.push(api.sendInvitation({ emails: valid_emails }));
    actions.push(api.dashboardInfo());

    Promise.all(actions)
      .then(response => {
        this.setState({ isLoading: false });
        const referrals = this.state.response.dashboardInfo.referrals;
        this.setState({
          alert: Object.assign({}, this.state.alert, {
            showSuccessAlert: true,
            msg: "Refer Invitation sent."
          }),
          isLoading: false
        });
        if (response[0].data.error.length === 0) {
        } else {
          const newReferral = referrals.concat(response[0].data.error);
          this.setState({
            isLoading: false,
            tags: [],
            response: Object.assign({}, this.state.response, {
              dashboardInfo: Object.assign(
                {},
                this.state.response.dashboardInfo,
                { referrals: newReferral }
              )
            })
          });
        }

        setTimeout(() => {
          this.setState({
            alert: Object.assign({}, this.state.alert, {
              showSuccessAlert: false,
              showErrorAlert: false,
              msg: ""
            }),
            isLoading: false
          });
          this.componentDidMount();
        }, 1500);
      })
      .catch(err => {
        this.setState({ isLoading: false });
        alert("There was some issue with the server. Try again later.");
        setTimeout(() => {
          this.props.history.push("/login");
        }, 2500);
      });

    // api.sendInvitation({emails}).then(
    // 	(res) => {
    //     console.log(res);
    //     this.getDashboardInfo();

    //     if(res.data.error.length > 0) {
    //       referrals.push(res.data.error);
    //       this.setState({
    //         isLoading: false,
    //         tags:[],
    //         response: Object.assign({}, this.state.response, {referrals: referrals}),
    //         errorInvite: res.data.error
    //       })
    //     } else {
    //       this.componentDidMount();
    //     }
    // }).catch(errors => {
    //   this.setState({isLoading: false})
    // 	console.log(errors)
    // })
  };

  showAlert = () => {
    const { alert } = this.state;
    if (alert.showSuccessAlert) {
      return <Alert variant="success">{alert.msg}</Alert>;
    } else if (alert.showErrorAlert) {
      return <Alert variant="danger">{alert.msg}</Alert>;
    } else return null;
  };

  getDashboardInfo = () => {
    api
      .dashboardInfo()
      .then(res => {
        this.setState({
          apicalled: true,
          response: res.data
        });
      })
      .catch(error => {
        alert("There was some issue with the server. Try again later.");
        this.props.history.push("/login");
      });
  };

  componentDidMount() {
    this.getDashboardInfo();
  }

  render() {
    if (!this.state.apicalled) return null;

    return (
      <div>
        <Nav email={this.state.response.email} history={this.props.history} />
        <Container>
          <Horizontal>
            <Vertical>
              {this.showAlert()}

              <DashDetail
                titleName={this.state.response.email}
                tags={this.state.tags}
                referral={this.state.response.refer_code}
                handleClick={this.handleInvitation}
                isLoading={this.state.isLoading}
              />

              <Group />
            </Vertical>
            <Vertical>
              <Rank response={this.state.response} />
              <DashList lists={this.state.response.dashboardInfo.referrals} />
            </Vertical>
          </Horizontal>
          <DashFooter />
        </Container>
      </div>
    );
  }
}

export default Dashboard;
