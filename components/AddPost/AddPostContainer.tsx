import React, { useState } from "react";
import AddPostPresenter from "./AddPostPresenter";
import useInput from "../../Hooks/useInput";

const AddPostContainer: React.FC = () => {
  const title = useInput("이것은 제목이시오다");
  const subTitle = useInput("이것은 부제목이시오다");
  const tags = useInput("#태그 #태그중 #샘플");
  const password = useInput();
  const [content, setContent] = useState(``);
  const [file, setFile] = useState(
    "https://jerrynim-instagram.s3.ap-northeast-2.amazonaws.com/08b21440-8053-11e9-b954-89b6e830b3a7-illu1.png"
  );

  return (
    <AddPostPresenter
      title={title}
      subTitle={subTitle}
      tags={tags}
      password={password}
      content={content}
      setContent={setContent}
      file={file}
      setFile={setFile}
    />
  );
};
export default AddPostContainer;