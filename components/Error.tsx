import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: -webkit-fill-available;
  font-size: 33px;
  color: ${props => props.theme.black};
`;

const Error: React.FC = () => (
  <Container>
    <p>
      <span role="img" aria-label="X">
        ❌
      </span>
      oops! you got wrong address
    </p>
  </Container>
);

export default Error;
