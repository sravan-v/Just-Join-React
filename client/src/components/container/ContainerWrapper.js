import React from "react";
import { Container, Segment } from "semantic-ui-react";
import styled from "styled-components";

function ContainerWrapper(props) {
  const ContainerWrapper = styled(Container)`
    padding: 50px 0 !important;
    &&&& {
      .row {
        padding: 0.25rem 0 !important;
      }
    }
  `;

  return (
    <ContainerWrapper>
      <Segment>{props.children}</Segment>
    </ContainerWrapper>
  );
}

export default ContainerWrapper;
