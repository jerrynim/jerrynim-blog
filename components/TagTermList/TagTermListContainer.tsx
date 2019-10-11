import React from "react";
import styled from "styled-components";
import TagTermListPresenter from "./TagTermListPresenter";
import { Tag } from "../../types/type";

interface IProps {
  tag: Tag;
}

const TagTermListContainer: React.FC<IProps> = () => {
  return <TagTermListPresenter />;
};

export default TagTermListContainer;
