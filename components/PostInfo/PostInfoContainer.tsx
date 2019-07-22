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
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files![0];
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    axios
      .post(
        "https://cqnmbkqlb2.execute-api.ap-northeast-2.amazonaws.com/dev/s3upload",
        formData,
        config
      )
      .then((response) => {
        console.log(response);
        setFile(response.data);
      })
      .catch((error) => {
        console.log(error);
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
