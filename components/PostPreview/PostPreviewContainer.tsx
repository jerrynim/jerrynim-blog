import React from "react";
import PostPreviewPresenter from "./PostPreviewPresenter";
import usePost from "../../Hooks/usePost";

const PostPreviewContainer: React.FC = () => {
  const { title, subTitle, tags, content, thumbnail } = usePost();
  return (
    <PostPreviewPresenter
      title={title}
      subTitle={subTitle}
      tags={tags}
      content={content}
      thumbnail={thumbnail}
    />
  );
};

export default PostPreviewContainer;
