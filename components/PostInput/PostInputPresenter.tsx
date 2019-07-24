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
interface IProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  addHeader: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PostInputPresenter: React.FC<IProps> = ({
  content,
  setContent,
  addHeader
}) => {
  return (
    <Container>
      <TextArea value={content} onChange={(e) => setContent(e.target.value)} />
      <Buttons>
        <Button onClick={addHeader}>
          <FaHeading size={24} />
        </Button>
        <Button>
          <TiDocumentText size={24} />
        </Button>
        <Button>
          <IoIosImage size={24} />
        </Button>
        <Button>
          <MdDragHandle size={24} />
        </Button>
        <Button>
          <MdFormatBold size={24} />
        </Button>
        <Button>
          <MdCode size={24} />
        </Button>
      </Buttons>
    </Container>
  );
};
export default PostInputPresenter;
