import React from "react";

import { Button, Spinner } from "react-bootstrap";

// const ButtonDiv = styled.button`
//   color: ${props => props.color};
//   background-color: ${props => props.background};
//   font-size: 89%;
//   padding: 11px 30px;
//   border-radius: 4px;
//   outline: none;
//   font-weight: 500;
// `;

export const AppButton = props => {
  let text = props.text;
  return (
    <Button
      variant="outline"
      onClick={e => props.clickAction(e)}
      disabled={props.isLoading ? true : false}
      style={{
        border: props.border ? props.border : "none",
        height: props.height ? props.height : 40,
        color: props.color,
        // padding: '8px 15px',
        width: props.width ? props.width : 170,
        borderRadius: 4,
        backgroundColor: props.background,
        fontWeight: props.bold ? 900 : 500,
        fontSize: props.fontSize ? props.fontSize : 15,
        marginLeft: props.marginLeft ? props.marginLeft: 0,
        margin: props.margin ? props.margin : 0
      }}>
      {props.isLoading ? (
        <>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="sr-only">Loading... </span>
          <b>{props.text} </b>
        </>
      ) : (
        <>{text}</>
      )}
    </Button>
  );
};
