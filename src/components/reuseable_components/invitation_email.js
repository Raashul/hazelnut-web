import React from "react";
import styled from "styled-components";
import cross from "../../assests/icons/cross.svg";
import check from "../../assests/icons/greencheck.svg";

const ContentDiv = styled.div`
  display: flex;
  flex-direction: horizontal;
  margin: 10px;
  height: 70px;
`;
const InfoDiv = styled.p`
  height: auto;
  width: auto;
`;

const Image = styled.img`
  height: 17px;
  width: 23px;
  margin: auto 0 auto auto;
`;
const EmailAdd = styled.p`
  color: #1a1a1a;
  font-family: Avenir;
  font-size: 16px;
  padding: 5px;
`;
const Text = styled.p`
  color: #91969e;
  font-family: Avenir;
  font-size: 16px;
  padding: 5px;
`;

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.accept === "active" ? check : cross
    };
  }

  showStatus = (status, errorMsg) => {
    const accept = <Text>Accepted</Text>;
    // const pending = (<Text>Pending - <Link>Resend Invitation</Link></Text>);
    const pending = <Text>Pending </Text>;

    const failed = (
      <span>
        <Text style={{ color: "red" }}>{errorMsg} </Text>
        {/* <Text style={{color: 'red'}}>Failed </Text> */}
      </span>
    );

    if (status === "failed") {
      return failed;
    } else if (status === "sent") {
      return pending;
    } else {
      return accept;
    }
  };

  render() {
    return (
      <ContentDiv>
        <InfoDiv>
          <EmailAdd>
            {this.props.email}{" "}
            {this.showStatus(this.props.accept, this.props.errorMsg)}
          </EmailAdd>
        </InfoDiv>
        <Image src={this.state.src} />
      </ContentDiv>
    );
  }
}
export default Email;
