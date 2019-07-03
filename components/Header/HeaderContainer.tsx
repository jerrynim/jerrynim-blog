import HeaderPresenter from "./HeaderPresenter";
import { useState } from "react";
const HeaderContainer: React.FC = () => {
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
    />
  );
};
export default HeaderContainer;
