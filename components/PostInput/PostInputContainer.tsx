import React from "react";
import PostInputPresenter from "./PostInputPresenter";
import usePost from "../../Hooks/usePost";
import useUpload from "../../Hooks/useUpload";

const PostInputContainer: React.FC = () => {
  const { content } = usePost();
  const { insertImage } = useUpload();
  return <PostInputPresenter content={content} insertImage={insertImage} />;
};
export default PostInputContainer;
