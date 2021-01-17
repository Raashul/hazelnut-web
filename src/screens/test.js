import React from "react";
import SharedComponents from "../components/reuseable_components";

const Test = () => {
  return (
    <>
      <SharedComponents.Input {...InputProperties} />
    </>
  );
};

const InputProperties = {
  color: "#F3F4F8",
  placeholderColor: "#91969E",
  placeholderText: "Your email address"
};

export default Test;
