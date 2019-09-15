import React from "react";
import { NextPageContext, NextComponentType } from "next";

interface IProps extends NextPageContext {
  apolloClient: any;
}

const Page: NextComponentType = () => {
  return <div />;
};
Page.getInitialProps = (ctx: IProps) => {
  const { apolloClient } = ctx;
  return { apolloClient };
};
export default Page;
