import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
const Container = styled.div`
  border: 1px solid black;
`;
const FullPage: React.FunctionComponent = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
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
