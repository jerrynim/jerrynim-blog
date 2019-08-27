import React, { Dispatch, SetStateAction } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import SidebarPresenter from "./SidebarPresenter";

interface IProps {
  SidebarStatus: boolean;
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}

const SidebarContainer: React.FC<IProps> = ({ SidebarStatus, toggleSidebar }) => (
  <OutsideClickHandler
    onOutsideClick={() => {
      if (SidebarStatus === true) toggleSidebar(!SidebarStatus);
    }}
  >
    <SidebarPresenter Side={SidebarStatus} toggleSidebar={toggleSidebar} />
  </OutsideClickHandler>
);

export default SidebarContainer;
