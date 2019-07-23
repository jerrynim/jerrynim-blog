import React from "react";
import PostInfoPresenter from "./PostInfoPresenter";
import { UseInput } from "../../Hooks/useInput";
import axios from "axios";
interface IProps {
  title: UseInput;
  subTitle: UseInput;
  tags: UseInput;
  password: UseInput;
  setFile: React.Dispatch<React.SetStateAction<string>>;
}

const PostInfoContainer: React.FC<IProps> = ({
  title,
  subTitle,
  tags,
  password,
  setFile
}) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files![0];
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    await axios
      .post(
        "https://aqz4u9mioa.execute-api.us-east-1.amazonaws.com/dev",
        formData,
        config
      )
      .then((response) => {
        setFile(response.data);
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  };

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
