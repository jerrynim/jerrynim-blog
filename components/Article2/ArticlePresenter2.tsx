import React from "react";
import styled from "../../style/typed-components";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${(props) => props.theme.blueGray};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
`;

const Title = styled.a`
  font-size: 52px;
  cursor: pointer;
`;
const SubTitle = styled.div`
  font-size: 22px;
  color: ${(props) => props.theme.softGray};
  margin: 12px 0px;
`;
const Tags = styled.div`
  display: flex;
`;
const Tag = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.blue};
  margin-right: 20px;
  :last-child {
    margin-right: 0px;
  }
`;
const Image = styled.img`
  width: 600px;
  height: 390px;
  cursor: pointer;
  margin-right: 50px;
`;
interface IProps {
  Post: {
    image: string;
    title: string;
    subTitle: string;
    tags: string[];
  };
}

const ArticlePresenter: React.FC<IProps> = ({ Post }) => {
  return (
    <div>
      <Container>
        <Link prefetch={true} href={`/articles/${Post.title}`}>
          <a>
            <Image src={Post.image} alt="" />
          </a>
        </Link>

        <Texts>
          <Link prefetch={true} href={`/articles/${Post.title}`}>
            <Title>{Post.title}</Title>
          </Link>
          <SubTitle>{Post.subTitle}</SubTitle>
          <Tags>
            {Post.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
        </Texts>
      </Container>
    </div>
  );
};
export default ArticlePresenter;
