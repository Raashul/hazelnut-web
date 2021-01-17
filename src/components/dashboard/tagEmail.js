import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30vw;
  border-radius: 4px;
  margin-right: 10px;

  padding: 20px 20px 0px 20px;
  background-color: #f3f4f8;
  align-items: left;
  height: 80px;
  overflow-y: scroll;

  &:focus-within {
    border: 1px solid #0052cc;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    width: 70vw;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: #f3f4f8;
  color: #91969e;
  font-size: 14px;
`;

const Tagging = styled.div`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  padding: 0px 8px;
  list-style: none;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: rgba(141, 130, 173, 0.14);

  & > span {
    font-size: 14px;
    color: #91969e;
  }
`;

class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: this.props.tags
    };

    this.emailDiv = React.createRef();
    this.removeTags = this.removeTags.bind(this);
    this.addTags = this.addTags.bind(this);
  }

  focusElement(e) {
    this.emailDiv.current.focus();
  }

  removeTags(indexToRemove) {
    this.setState({
      tags: [...this.state.tags.filter((_, index) => index !== indexToRemove)]
    });
  }

  addTags(event) {
    if (event.target.value !== "") {
      this.setState({ tags: [...this.state.tags, event.target.value] });
      this.props.selectedTags([...this.state.tags, event.target.value]);
      event.target.value = "";
    }
  }

  render() {
    const value = (
      <List>
        {this.state.tags.map((tag, index) => (
          <Tagging key={index}>
            <span>{tag} </span>
            &nbsp;
            {/* <Image src={cross} onClick={() => this.removeTags(index)} /> */}
            <span onClick={() => this.removeTags(index)}>X</span>
          </Tagging>
        ))}
      </List>
    );
    return (
      <Container onClick={e => this.focusElement()}>
        {value}
        <EmailInput
          ref={this.emailDiv}
          type="text"
          onKeyUp={event =>
            event.key === "Enter" || event.key === " "
              ? this.addTags(event)
              : null
          }
        />
      </Container>
    );
  }
}
export default Tag;
