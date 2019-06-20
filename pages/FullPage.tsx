import React from "react";
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import Profile from "../components/Profile";
import Helmet from "rl-react-helmet";
import Tech from "../components/Tech";
import Experience from "../components/Experience";
const Section = styled.div`
  width: 100%;
  height: 100%;
`;
const FullPage: React.FunctionComponent = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        console.log(state, fullpageApi);
        return (
          <>
            <Helmet>
              <link
                href="https://fonts.googleapis.com/css?family=Press+Start+2P"
                rel="stylesheet"
              />
              <link
                href="https://unpkg.com/nes.css/css/nes.css"
                rel="stylesheet"
              />
              <title>Jerrynim</title>
            </Helmet>
            <ReactFullpage.Wrapper>
              <div className="section">
                <Section>
                  <Profile />
                </Section>
              </div>
              <div className="section">
                <Section>
                  <Tech />
                </Section>
              </div>
              <div className="section">
                <Section>
                  <Experience />
                </Section>
              </div>
            </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  );
};

export default FullPage;
