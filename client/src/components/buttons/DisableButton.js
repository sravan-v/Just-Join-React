import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { Colors } from "../../values/Colors";

const StyledButton = styled(Button)`
  font-size: 16px !important;
  color: #444444 !important;
  background-color: ${Colors.lightGrey} !important;
  pointer-events: none !important;
`;

export const DisableButton = () => {
  return <StyledButton fluid>Submit</StyledButton>;
};
