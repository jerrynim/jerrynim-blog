import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import Profile from "../components/Profile";
import Helmet from "rl-react-helmet";
import Tech from "../components/Tech";
import Experience from "../components/Experience";
import Project from "../components/Project";
import SendMail from "../components/SendMail";
const Section = styled.div`
  width: 100%;
  height: 100%;
`;
const index: React.FunctionComponent = () => {
  //header link가 불러오기까지 기다린다.(css가 적용되기전에 200ms 정도 보여지는 문제)
  const [loading, setLoading] = useState("default");
  useEffect(() => {}, []);
  return (
    <>
      <Helmet
        onChangeClientState={() => {
          //link가 다 불러져왔을때 handle
          setLoading("loaded");
        }}
      >
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
        <title>Jerrynim</title>
      </Helmet>
      {loading === "loaded" && (
        <ReactFullpage
          render={() => {
            return (
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
                <div className="section">
                  <Section>
                    <Project />
                  </Section>
                </div>
                <div className="section">
                  <Section>
                    <SendMail />
                  </Section>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      )}
    </>
  );
};

export default index;
