import HeaderPresenter from "./HeaderPresenter";
import React, { useState, useEffect } from "react";
import { withRouter, SingletonRouter } from "next/router";

interface Props {
  router: SingletonRouter;
}

const HeaderContainer: React.FC<Props> = () => {
  const [Side, toggleSidebar] = useState(false);
  const MenuOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleSidebar(!Side);
  };
  useEffect(() => {}, []);
  return (
    <div>
      <HeaderPresenter
        Side={Side}
        MenuOnClick={MenuOnClick}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
};
export default withRouter(HeaderContainer);
