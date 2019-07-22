import React from "react";
import { UseInput } from "../../Hooks/useInput";

interface IProps {
  title: UseInput;
  subTitle: UseInput;
  tags: UseInput;
  password: UseInput;
  content: UseInput;
}
const PostPreviewPresenter: React.FC<IProps> = ({
  title,
  subTitle,
  tags,
  password,
  content
}) => {
  console.log(title, subTitle, tags, password, content);
  return <div />;
};
export default PostPreviewPresenter;
