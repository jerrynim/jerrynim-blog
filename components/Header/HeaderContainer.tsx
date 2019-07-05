import HeaderPresenter from "./HeaderPresenter";
import React, { useState } from "react";
import { withRouter, SingletonRouter } from "next/router";

interface Props {
  router: SingletonRouter;
}

const HeaderContainer: React.FC<Props> = (props) => {
  const [Side, toggleSidebar] = useState(false);

  const MenuOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleSidebar(!Side);
  };
  console.log(props);
  return (
    <div>
      {props.router && (
        <HeaderPresenter
          Side={Side}
          MenuOnClick={MenuOnClick}
          toggleSidebar={toggleSidebar}
          pathname={props.router.pathname}
        />
      )}
    </div>
  );
};
export default withRouter(HeaderContainer);
