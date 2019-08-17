import React from "react";
import axios from "axios";
import PostInfoPresenter from "./PostInfoPresenter";
import { UseInput } from "../../Hooks/useInput";

interface IProps {
  title: UseInput;
  subTitle: UseInput;
  tags: UseInput;
  password: UseInput;
  setFile: React.Dispatch<React.SetStateAction<string>>;
  upload: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PostInfoContainer: React.FC<IProps> = ({
  title,
  subTitle,
  tags,
  password,
  setFile,
  upload
}) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = async e => {
    const file = e.target.files![0];
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    await axios
      .post("https://vxp9d59gt7.execute-api.us-east-1.amazonaws.com/dev", formData, config)
      .then(response => {
        setFile(response.data);
      })
      .catch(error => {
        console.log("error:", error);
      });
  };

  return (
    <PostInfoPresenter
      title={title}
      subTitle={subTitle}
      tags={tags}
      password={password}
      onChange={onChange}
      upload={upload}
    />
  );
};
export default PostInfoContainer;
