import React from "react";
import { UseInput } from "../../Hooks/useInput";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  height: fit-content;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  position: relative;
`;

const CategoryText = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CategoryInput = styled.input`
  width: 100%;
  height: 30px;
  box-shadow: inset 0 1px 3px 0 hsla(0, 0%, 0%, 0.25);
  border: 0;
  border-radius: 10px;
`;

interface IProps {
  title: UseInput;
  subTitle: UseInput;
  tags: UseInput;
  password: UseInput;
}

const PostInfoPresenter: React.FC<IProps> = ({
  title,
  subTitle,
  tags,
  password
}) => {
  console.log(title, subTitle, tags, password);
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
        <CategoryInput {...tags} />
      </Category>
      <Category>
        <CategoryText>Password</CategoryText>
        <CategoryInput type="password" {...password} />
      </Category>
    </Container>
  );
};
export default PostInfoPresenter;
