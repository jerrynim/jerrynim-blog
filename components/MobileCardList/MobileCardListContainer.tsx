import React from "react";
import MobileCardListPresenter from "./MobileCardListPresenter";
import { Post } from "../../types/type";

interface IProps {
  posts: Post[];
}

const MobileCardListContainer: React.FC<IProps> = ({ posts }) => {
  return <MobileCardListPresenter />;
};

export default MobileCardListContainer;
