import React from "react";
import styled from "styled-components";
import useUpload from "../../Hooks/useUpload";
import usePost from "../../Hooks/usePost";

const Container = styled.div`
  width: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  height: fit-content;
  margin-right: 30px;
  .category {
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
    position: relative;
    p {
      font-size: 18px;
      margin-bottom: 10px;
    }
    input {
      width: 100%;
      height: 30px;
      box-shadow: inset 0 1px 3px 0 hsla(0, 0%, 0%, 0.25);
      border: 0;
      border-radius: 10px;
      outline: none;
    }
  }
  .upload-button {
    background-color: ${props => props.theme.blue};
    margin: auto;
    font-size: 18px;
    padding: 10px 15px;
    border-radius: 5px;
  }
`;

const PostInfo: React.FC = () => {
  const {
    title,
    subTitle,
    tags,
    password,
    titleOnChange,
    subTitleOnChange,
    tagsOnChange,
    passwordOnChange,
    addPostMutation
  } = usePost();
  const { thumbnailOnChange } = useUpload();

  return (
    <Container>
      <div className="category">
        <p>Title</p>
        <input value={title} onChange={titleOnChange} />
      </div>
      <div className="category">
        <p>SubTitle</p>
        <input {...subTitle} onChange={subTitleOnChange} />
      </div>
      <div className="category">
        <p>Tags</p>
        <input type="text" {...tags} onChange={tagsOnChange} />
      </div>
      <div className="category">
        <p>Thumbnail</p>
        <input type="file" onChange={thumbnailOnChange} />
      </div>
      <div className="category">
        <p>Password</p>
        <input type="password" {...password} autoComplete="off" onChange={passwordOnChange} />
      </div>
      <button className="upload-button" onClick={() => addPostMutation()} type="button">
        Upload
      </button>
    </Container>
  );
};
export default PostInfo;
