import React from "react";
import { UseInput } from "../../Hooks/useInput";
import styled from "../../style/typed-components";

const Container = styled.div`
  width: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  height: fit-content;
  margin-right: 30px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  position: relative;
`;

const CategoryText = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CategoryInput = styled.input`
  width: 100%;
  height: 30px;
  box-shadow: inset 0 1px 3px 0 hsla(0, 0%, 0%, 0.25);
  border: 0;
  border-radius: 10px;
  outline: none;
`;

const UploadButton = styled.button`
  background-color: ${props => props.theme.blue};
  margin: auto;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 5px;
`;

interface IProps {
  title: UseInput;
  subTitle: UseInput;
  tags: UseInput;
  password: UseInput;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PostInfoPresenter: React.FC<IProps> = ({ title, subTitle, tags, password, onChange }) => {
  return (
    <Container>
      <Category>
        <CategoryText>Title</CategoryText>
        <CategoryInput {...title} />
      </Category>
      <Category>
        <CategoryText>SubTitle</CategoryText>
        <CategoryInput {...subTitle} />
      </Category>
      <Category>
        <CategoryText>Tags</CategoryText>
        <input type="file" onChange={onChange} />
      </Category>
      <Category>
        <CategoryText>Thumbnail</CategoryText>
        <CategoryInput {...tags} />
      </Category>
      <Category>
        <CategoryText>Password</CategoryText>
        <CategoryInput type="password" {...password} />
      </Category>
      <UploadButton onClick={() => {}}>Upload</UploadButton>
    </Container>
  );
};
export default PostInfoPresenter;
