import React from "react";
import TagListPresenter from "./TagListPresenter";
import { Tag } from "../../types/type";

interface IProps {
  tags: Tag[];
}

const TagLIstContainer: React.FC<IProps> = ({ tags }) => {
  return <TagListPresenter tags={tags} />;
};

export default TagLIstContainer;
