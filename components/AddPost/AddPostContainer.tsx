import React, { useEffect } from "react";
import AddPostPresenter from "./AddPostPresenter";
import useInput from "../../Hooks/useInput";

const AddPostContainer: React.FC = () => {
  const title = useInput();
  const subTitle = useInput();
  const tags = useInput();
  const password = useInput();
  const content = useInput();
  console.log(title, subTitle, tags, password);
  useEffect(() => {}, []);
  return (
    <AddPostPresenter
      title={title}
      subTitle={subTitle}
      tags={tags}
      password={password}
      content={content}
    />
  );
};
export default AddPostContainer;
