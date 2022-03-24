import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { Colors } from "../../values/Colors";

const StyledButton = styled(Button)`
  font-size: 16px !important;
  color: #ffffff !important;
  background-color: ${Colors.primary} !important;
  transition: all ease 0.5s;
`;

export const SubmitButton = () => {
  return (
    <StyledButton fluid type="submit">
      Submit
    </StyledButton>
  );
};
