import React from "react";
import TagListPresenter from "./TagListPresenter";

interface IProps {
  alphabetList: any;
}

const TagLIstContainer: React.FC<IProps> = ({ alphabetList }) => {
  const array = Object.keys(alphabetList);
  return <TagListPresenter alphabetList={alphabetList} />;
};

export default TagLIstContainer;
