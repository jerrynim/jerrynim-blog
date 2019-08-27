import React, { useState } from "react";
import { withRouter, SingletonRouter } from "next/router";
import HeaderPresenter from "./HeaderPresenter";

interface Props {
  router: SingletonRouter;
}

const HeaderContainer: React.FC<Props> = () => {
  const [SidebarStatus, toggleSidebar] = useState(false);

  return <HeaderPresenter SidebarStatus={SidebarStatus} toggleSidebar={toggleSidebar} />;
};
export default withRouter(HeaderContainer);
