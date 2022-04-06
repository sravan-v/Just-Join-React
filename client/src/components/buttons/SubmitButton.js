import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { Colors } from "../../values/Colors";

const StyledButton = styled(Button)`
  font-size: 16px !important;
  color: ${(props) => (props.active ? "#ffffff" : "#303030")} !important;
  background-color: ${(props) =>
    props.active ? Colors.primary : "#c3c3c3"} !important;
`;

export const SubmitButton = (props) => {
  const { text, active } = props;
  return (
    <StyledButton active={active} fluid>
      {text}
    </StyledButton>
  );
};
