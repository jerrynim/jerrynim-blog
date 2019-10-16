import React from "react";
import TagListPresenter from "./TagListPresenter";
import { AlphabetTuple } from "../../types/type";

interface IProps {
  alphabetList: AlphabetTuple[];
}

const TagListContainer: React.FC<IProps> = ({ alphabetList }) => {
  return <TagListPresenter alphabetList={alphabetList} />;
};

export default TagListContainer;
