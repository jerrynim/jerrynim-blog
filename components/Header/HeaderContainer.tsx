import React from "react";
import { useRouter } from "next/router";
import HeaderPresenter from "./HeaderPresenter";

const HeaderContainer: React.FC = () => {
  const router = useRouter();
  return <HeaderPresenter path={router.asPath} />;
};
export default HeaderContainer;
