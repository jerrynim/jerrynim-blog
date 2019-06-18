import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
`;
const Index: React.FunctionComponent = () => {
  return (
    <Container>
      <p>hello world</p>
      <Link href="/Counter">
        <a>Map</a>
      </Link>
    </Container>
  );
};

export default Index;
