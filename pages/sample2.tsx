import React from "react";
import { NextPageContext, NextComponentType } from "next";
import styled from "styled-components";

interface IProps extends NextPageContext {
  apolloClient: any;
}
const HeartPop = styled.div`
  position: absolute;
  top: 27px;
  background: #fff;
  border: solid 1px #e6e6e6;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.0975);
  width: 500px;
  cursor: auto;
`;
const HeartPopItems = styled.div`
  display: flex;
  min-height: 240px;
  padding: 0 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HeartPopTriangle = styled.div`
  position: absolute;
  border-color: transparent transparent #fff;
  border-style: solid;
  border-width: 0 10px 10px;
  height: 0;
  margin-top: 5px;
  width: 0;
  z-index: 12;
  margin-left: 2px;
`;
const HeartPopTriangleShadow = styled.div`
  background: #fff;
  border: 1px solid #e6e6e6;
  -webkit-box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
  height: 14px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 14px;
  margin-left: 5px;
  margin-top: 5px;
  position: absolute;
`;
const HeartCircle = styled.div`
  width: 62px;
  height: 62px;
  background-size: cover;
`;
const HeartPopText = styled.h2`
  margin-top: 16px;
  font-size: 14px;
`;
const Page: NextComponentType = () => {
  return (
    <div>
      <div>a</div>
      <HeartPopTriangleShadow />
      <HeartPopTriangle />
      <HeartPop>
        <HeartPopItems>
          <HeartCircle />
          <HeartPopText>게시물 활동</HeartPopText>
          <HeartPopText>아직 알림이 만들어지지 않았습니다.</HeartPopText>
        </HeartPopItems>
      </HeartPop>
    </div>
  );
};
Page.getInitialProps = (ctx: IProps) => {
  const { apolloClient } = ctx;
  return { apolloClient };
};
export default Page;