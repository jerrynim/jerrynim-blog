import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { FILE_UPLOAD } from "../../queries/upload";
import PostInfoPresenter from "./PostInfoPresenter";
import { UseInput } from "../../Hooks/useInput";

interface IProps {
  title: UseInput;
  subTitle: UseInput;
  tags: UseInput;
  password: UseInput;
  setFile: React.Dispatch<React.SetStateAction<string>>;
  addPostMutation: any;
}

const PostInfoContainer: React.FC<IProps> = ({
  title,
  subTitle,
  tags,
  password,
  setFile,
  addPostMutation
}) => {
  const [fileUploadMuation, { data, error }] = useMutation(FILE_UPLOAD);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = async e => {
    const file = e.target.files![0];
    fileUploadMuation({ variables: { file } });
  };
  console.log(data, error);
  return (
    <PostInfoPresenter
      title={title}
      subTitle={subTitle}
      tags={tags}
      password={password}
      onChange={onChange}
    />
  );
};
export default PostInfoContainer;
