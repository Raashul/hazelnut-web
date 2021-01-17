import React from "react";
import styled from "styled-components";
import hazelnut from "../../assests/icons/hazelnut.png";
import { logout } from "../../auth";

import { Dropdown } from "react-bootstrap";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
  :hover {
    cursor: pointer;
  }
`;

const PriorityDiv = styled.div`
  display: inline;
  border-radius: 4px;
  background-color: #f8f6ff;
  color: #3e2689;
  font-size: 77%;
  padding: 5px 10px;
  outline: none;
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.05);

  @media (max-width: 400px) {
    font-size: 64%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 20px;
  width: 133.33px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const DropDownIndicator = styled.img`
  width: 3.75%;
  height: auto;
  margin-left: 2.75%;
  transform: rotate(90deg);
`;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

class NavDash extends React.Component {
  constructor(props) {
    super(props);
  }

  goto = route => {
    // console.log('props', this.props.history);
    this.props.history.push(route);
  };

  handleLogout = () => {
    logout();
  };

  render() {
    return (
      <Container>
        <Logo>
          <Image src={hazelnut} onClick={() => this.goto("/")} />
          <PriorityDiv onClick={() => this.goto("/dashboard")}>
            Priority Access Dashboard
          </PriorityDiv>
        </Logo>
        <div>
          <Dropdown>
            <Dropdown.Toggle
              as={CustomToggle}
              inputMode="dropdown-custom-components"
            >
              <span
                style={{
                  "font-size": "77%",
                  color: "black",
                  fontFamily: "Avenir"
                }}
              >
                {this.props.email}
              </span>
              <span>
                <DropDownIndicator
                  src={require("../../assests/icons/arrow.png")}
                />
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="/setting"
                style={{
                  "font-size": "14px",
                  color: "black",
                  fontFamily: "Avenir"
                }}
              >
                Settings
              </Dropdown.Item>
              <Dropdown.Item
                onClick={this.handleLogout}
                style={{
                  "font-size": "14px",
                  color: "black",
                  fontFamily: "Avenir"
                }}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    );
  }
}

export default NavDash;
