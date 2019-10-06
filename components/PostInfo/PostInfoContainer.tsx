import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { FILE_UPLOAD } from "../../queries/upload";
import PostInfoPresenter from "./PostInfoPresenter";
import usePost from "../../Hooks/usePost";
import { CREATE_POST } from "../../queries/index";

const PostInfoContainer: React.FC = () => {
  const { title, subTitle, tags, password, content, thumbnail } = usePost();
  const [fileUploadMuation] = useMutation<{ singleUpload: string }>(FILE_UPLOAD, {
    onCompleted: data => thumbnail.onChange(data.singleUpload)
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = async e => {
    const file = e.target.files![0];
    fileUploadMuation({ variables: { file } });
  };
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
      onChange={onChange}
      addPostMutation={addPostMutation}
    />
  );
};
export default PostInfoContainer;
