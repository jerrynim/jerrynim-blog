import React from "react";
import { withRouter, SingletonRouter } from "next/router";
import HeaderPresenter from "./HeaderPresenter";

interface IProps {
  router: SingletonRouter;
}

const HeaderContainer: React.FC<IProps> = ({ router }) => (
  <HeaderPresenter path={router.pathname} />
);
export default withRouter(HeaderContainer);
