import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import Counter from "./Counter";
const Container = styled.div`
  border: 1px solid black;
`;
const Section = styled.div`
  width: 100%;
  height: 100%;
`;
const FullPage: React.FunctionComponent = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Section>
                <Counter />
              </Section>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullPage;
