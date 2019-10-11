import React from "react";
import TagListPresenter from "./TagListPresenter";

interface IProps {
  alphabetList: any;
}

const TagListContainer: React.FC<IProps> = ({ alphabetList }) => {
  return <TagListPresenter alphabetList={alphabetList} />;
};

export default TagListContainer;
