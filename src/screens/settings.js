import React from "react";
import Nav from "../components/dashboard/dashboard_nav";
import Setting from "../components/settings/setting";
import * as api from "../api";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apicalled: false,
      response: null,
      tags: []
    };
  }

  componentDidMount() {
    api
      .dashboardInfo()
      .then(res => {
        console.log(res);
        this.setState({
          apicalled: true,
          response: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.apicalled) return null;

    return (
      <div>
        <Nav email={this.state.response.email} history = {this.props.history}/>
        <Setting titleName={this.state.response.email} />
      </div>
    );
  }
}

export default Settings;
