import HeaderPresenter from "./HeaderPresenter";
import { useState } from "react";
import { withRouter, SingletonRouter } from "next/router";

interface Props {
  router: SingletonRouter;
}

const HeaderContainer: React.FC<Props> = (props) => {
  const pathname = props.router.pathname;
  const [Side, toggleSidebar] = useState(false);

  const MenuOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleSidebar(!Side);
  };

  return (
    <HeaderPresenter
      Side={Side}
      MenuOnClick={MenuOnClick}
      toggleSidebar={toggleSidebar}
      pathname={pathname}
    />
  );
};
export default withRouter(HeaderContainer);
