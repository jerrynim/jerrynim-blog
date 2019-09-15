import React from "react";
import axios from "axios";
import PostInputPresenter from "./PostInputPresenter";

interface IProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const PostInputContainer: React.FC<IProps> = ({ content, setContent }) => {
  const addHeader: React.MouseEventHandler<HTMLButtonElement> = () => {
    setContent(`
      ${content}
        <h1 class="title"></h1>
        `);
  };

  const addText: React.MouseEventHandler<HTMLButtonElement> = () => {
    setContent(`
      ${content}
        <p class="text"></p>
        `);
  };

  const addBold: React.MouseEventHandler<HTMLButtonElement> = () => {
    setContent(`
      ${content}
        <b class="bold"></b>
        `);
  };
  const addLine: React.MouseEventHandler<HTMLButtonElement> = () => {
    setContent(`
      ${content}
        <div class="line"></div>
        `);
  };

  const addCode: React.MouseEventHandler<HTMLButtonElement> = () => {
    setContent(`
      ${content} 
        <div class="code"></div>
        `);
  };

  const addImage: React.ChangeEventHandler<HTMLInputElement> = async e => {
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
        setContent(`
          ${content}
            <div class="imgBox">
              <img src="${response.data}" class="img"/>
              </div>
              `);
      })
      .catch(error => {
        console.error("error:", error);
      });
  };

  return (
    <PostInputPresenter
      content={content}
      setContent={setContent}
      addHeader={addHeader}
      addText={addText}
      addBold={addBold}
      addLine={addLine}
      addImage={addImage}
      addCode={addCode}
    />
  );
};
export default PostInputContainer;
