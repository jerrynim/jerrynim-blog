import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: -webkit-fill-available;
  font-size: 33px;
  color: ${(props) => props.theme.black};
`;

const Error: React.FC = () => {
  return (
    <Container>
      <p>❌ oops! you got wrong address</p>
    </Container>
  );
};
export default Error;
