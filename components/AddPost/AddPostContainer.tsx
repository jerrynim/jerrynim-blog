import React, { useState } from "react";
import AddPostPresenter from "./AddPostPresenter";
import useInput from "../../Hooks/useInput";

const AddPostContainer: React.FC = () => {
  const title = useInput("이것은 제목이시오다");
  const subTitle = useInput("이것은 부제목이시오다");
  const tags = useInput("#태그 #태그중 #샘플");
  const password = useInput();
  const [
    content,
    setContent
  ] = useState(`<h1 class="title">안녕하세요</h1><p class="text">
  Promise 이해하기
  Promise는 요약하자면 다음과 같습니다.
  
  "여러분이 아이라고 상상해보세요. 여러분의 어머니가 새로운 스마트폰을 다음 주에 사주기로 약속합니다."
  
  여러분은 다음 주에 정말로 새로운 스마트폰을 가질 수 있을지 알 수 없습니다. 어머니는 진짜로 새로운 스마트폰을 사줄 수도 있고, 만일 기분이 좋지 않다면, 약속을 어기고, 스마트폰을 사주는 것을 잠시 보류할 수도 있습니다.
  
  이게 바로 Promise(약속) 입니다
  </p>
  `);
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
