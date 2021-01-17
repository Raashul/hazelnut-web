import React from "react";
import styled from "styled-components";
import SharedComponents from "../reuseable_components";
import { AppButton } from "../index";

const InputContent = styled.div`
  margin: 20px 0px;
`;

const InputField = styled.div`
  display: flex;
  max-width: 235px;
  flex-direction: column;
`;

const InputProperties = {
  color: "#F3F4F8",
  width: "95%",
  placeholderColor: "#91969E",
  placeholderColor: "#91969E"
};

const InputPropertiesPassword = {
  color: "#F3F4F8",
  width: "95%",
  placeholderColor: "#91969E",
  placeholderColor: "#91969E"
};

const Buttonproperties = {
  background: "#3e2689",
  text: "Save",
  color: "white"
};

const CollapsibleDiv = props => {
  return (
    <InputContent>
      <InputField>
        <SharedComponents.Input
          {...InputProperties}
          {...props}
          placeholderText={props.inputnamee}
          type={props.type}
          name={props.name}
          className={"emailInput"}
          changeAction={e => props.changeAction(e, props.input_old_password)}
        />
        <SharedComponents.Input
          {...InputPropertiesPassword}
          placeholderText={props.password}
          changeAction={e => props.changeAction(e, props.input_new_password)}
          type="password"
          name="password"
          className="emailInput"
        />
      </InputField>
      <AppButton
        className="button"
        color="#ffffff"
        background="#3e2689"
        text="Save"
        width="100px"
        clickAction={e => props.handleClick(e)}
        changeAction={props.changeAction}
        isLoading={props.isLoading}
      />
      {/* <SharedComponents.Button
        {...Buttonproperties}
        onClick={e => props.handleClick(e)}
        changeAction = {props.changeAction}
      /> */}
    </InputContent>
  );
};

export default CollapsibleDiv;
