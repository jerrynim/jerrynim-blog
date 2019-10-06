import React from "react";
import PostInfo from "../PostInfo";
import PostInput from "../PostInput";
import PostPreview from "../PostPreview";
import styled from "../../style/typed-components";

const Container = styled.div`
  padding-top: 96px;
  width: 100%;
  height: -webkit-fill-available;
  background-color: ${props => props.theme.blue_gray};
  display: flex;
  justify-content: center;
  position: relative;
`;

const AddPostPresenter: React.FC = () => (
  <Container>
    <PostInfo />
    <PostPreview />
    <PostInput />
  </Container>
);

export default AddPostPresenter;
