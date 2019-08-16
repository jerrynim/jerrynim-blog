import React from "react";
import Link from "next/link";
import styled from "../../style/typed-components";
import { Tag } from "../../types/type";

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Texts = styled.div`
  margin-right: 50px;
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
  color: ${props => props.theme.softGray};
  margin: 12px 0px;
`;
const Tags = styled.div`
  display: flex;
`;
const TagView = styled.div`
  font-size: 18px;
  color: ${props => props.theme.blue};
  margin-right: 20px;
  :last-child {
    margin-right: 0px;
  }
`;
const Image = styled.img`
  width: 600px;
  height: 390px;
  cursor: pointer;
`;
interface IProps {
  data: any;
}

const ArticlePresenter: React.FC<IProps> = ({ data }) => (
  <div>
    <Container>
      <Texts>
        <Link
          prefetch={false}
          as={`/articles/${data.title}`}
          href={`/articles/${data.title}`}
        >
          <Title>{data.title}</Title>
        </Link>

        <SubTitle>{data.subTitle}</SubTitle>
        <Tags>
          {data.tags.map((tag: Tag) => (
            <TagView key={tag.id}>{tag}</TagView>
          ))}
        </Tags>
      </Texts>
      <Link
        prefetch={false}
        as={`/articles/${data.title}`}
        href={`/articles/${data.title}`}
      >
        <a>
          <Image src={data.thumbnail} alt="" />
        </a>
      </Link>
    </Container>
  </div>
);

export default ArticlePresenter;
