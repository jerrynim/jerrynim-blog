import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import SidebarPresenter from "./SidebarPresenter";

const SidebarContainer: React.FC = () => {
  const [status, toggleStatus] = useState<boolean>(false);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (status === true) toggleStatus(!status);
      }}
    >
      <SidebarPresenter status={status} toggleStatus={toggleStatus} />
    </OutsideClickHandler>
  );
};
export default SidebarContainer;
