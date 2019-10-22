import React from "react";
import { useMutation } from "@apollo/react-hooks";
import PostInfoPresenter from "./PostInfoPresenter";
import usePost from "../../Hooks/usePost";
import { CREATE_POST } from "../../queries/index";
import useUpload from "../../Hooks/useUpload";

const PostInfoContainer: React.FC = () => {
  const { title, subTitle, tags, password, content, thumbnail } = usePost();
  const { thumbnailOnChange } = useUpload();

  const [addPostMutation] = useMutation(CREATE_POST, {
    variables: {
      title: title.value,
      subTitle: subTitle.value,
      tags: tags.value,
      password: password.value,
      content: content.value,
      thumbnail: thumbnail.value
    }
  });
  return (
    <PostInfoPresenter
      title={title}
      subTitle={subTitle}
      tags={tags}
      password={password}
      thumbnailOnChange={thumbnailOnChange}
      addPostMutation={addPostMutation}
    />
  );
};
export default PostInfoContainer;
