import React, { Dispatch, SetStateAction } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import SidebarPresenter from "./SidebarPresenter";

interface IProps {
  Side: boolean;
  MenuOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}

const SidebarContainer: React.FC<IProps> = ({
  Side,
  MenuOnClick,
  toggleSidebar
}) => (
  <OutsideClickHandler
    onOutsideClick={() => {
      if (Side === true) toggleSidebar(!Side);
    }}
  >
    <SidebarPresenter Side={Side} MenuOnClick={MenuOnClick} />
  </OutsideClickHandler>
);

export default SidebarContainer;
