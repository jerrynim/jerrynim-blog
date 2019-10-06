import React from "react";
import PostInputPresenter from "./PostInputPresenter";
import usePost from "../../Hooks/usePost";

const PostInputContainer: React.FC = () => {
  const { content } = usePost();

  return <PostInputPresenter content={content} />;
};
export default PostInputContainer;
