import React from "react";
import HeaderPresenter from "./HeaderPresenter";

interface IProps {
  path: string;
}

const HeaderContainer: React.FC<IProps> = ({ path }) => <HeaderPresenter path={path} />;
export default HeaderContainer;
