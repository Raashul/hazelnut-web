import React from "react";

import { Button } from "react-bootstrap";

export const AppButton = props => {
  return (
    <Button
      variant="outline"
      onClick={e => props.clickAction(e)}
      style={{
        height: props.height ? props.height : 30,
        color: props.color,
        // padding: '11px 30px',
        borderRadius: 4,
        backgroundColor: props.background,
        fontWeight: 500,
        fontSize: props.fontSize ? props.fontSize : 15
      }}
    >
      {props.text}
    </Button>
  );
};

export default AppButton;
