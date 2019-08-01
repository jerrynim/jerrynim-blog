import React from "react";
import styled from "../../style/typed-components";
import { IoIosImage } from "react-icons/io";
import { FaHeading } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { MdDragHandle, MdFormatBold, MdCode } from "react-icons/md";
const Container = styled.div`
  width: 300px;
  background-color: white;
  margin-left: 30px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  resize: none;
  border: 0;
  padding: 10px;
  box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
  justify-content: space-around;
`;

const Button = styled.button`
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Input = styled.input`
  width: 24px;
  height: 24px;
  position: absolute;
  opacity: 0;
  outline: none;
`;

interface IProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  addHeader: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  addText: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  addBold: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  addLine: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  addCode: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  addImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PostInputPresenter: React.FC<IProps> = ({
  content,
  setContent,
  addHeader,
  addText,
  addBold,
  addLine,
  addImage,
  addCode
}) => {
  return (
    <Container>
      <TextArea value={content} onChange={(e) => setContent(e.target.value)} />
      <Buttons>
        <Button onClick={addHeader}>
          <FaHeading size={24} />
        </Button>
        <Button onClick={addText}>
          <TiDocumentText size={24} />
        </Button>
        <InputWrapper>
          <IoIosImage size={24} />

          <Input type={"file"} onChange={addImage} />
        </InputWrapper>

        <Button onClick={addLine}>
          <MdDragHandle size={24} />
        </Button>
        <Button onClick={addBold}>
          <MdFormatBold size={24} />
        </Button>
        <Button onClick={addCode}>
          <MdCode size={24} />
        </Button>
      </Buttons>
    </Container>
  );
};
export default PostInputPresenter;
