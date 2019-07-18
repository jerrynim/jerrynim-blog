import React from "react";
import styled from "../../style/typed-components";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  height: 600px;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.25);
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
  color: ${(props) => props.theme.softGray};
  margin: 12px 0px;
`;
const Tags = styled.div`
  display: flex;
`;
const Tag = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.blue};
  margin-right: 20px;
  :last-child {
    margin-right: 0px;
  }
  cursor: pointer;
`;
const Image = styled.img`
  width: 600px;
  height: 390px;
  cursor: pointer;
`;
const RecentPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  background-color: ${(props) => props.theme.blueGray};
`;

const RecentTexts = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 60px 20px 40px;
  align-items: center;
`;
const RecentText = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: ${(props) => props.theme.black};
`;

const SeeAll = styled.a`
  color: ${(props) => props.theme.blue};
  :hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;
const Posts = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const Post = styled.li`
  width: 260px;
  height: 400px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  text-align: center;
`;
const PostImg = styled.img`
  height: 170px;
  width: 100%;
  cursor: pointer;
`;
const PostTitle = styled.div`
  margin: 10px 0px;
  color: ${(props) => props.theme.black};
  /*for the elipsis*/
  display: -webkit-box;
  max-width: 220px;
  max-height: 44px;
  font-size: 20px;
  line-height: 22px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  cursor: pointer;
`;

const PostSTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.softGray};
  /*for the elipsis*/
  display: -webkit-box;
  max-width: 220px;
  max-height: 48px;
  font-size: 14px;
  line-height: 16px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;
const TagBox = styled.div`
  display: flex;
  max-width: 220px;
  /*for the elipsis*/
  display: -webkit-box;
  max-width: 220px;
  max-height: 40px;
  font-size: 18px;
  line-height: 20px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;
interface IProps {
  data: any;
}

const HomePresenter: React.FC<IProps> = ({ data }) => {
  const { getPosts: posts } = data;
  return (
    <>
      <Container>
        <Texts>
          <Link
            as={`/articles/${posts[0].title}`}
            href={`/articles/${posts[0].title}`}
          >
            <Title>{posts[0].title}</Title>
          </Link>

          <SubTitle>{posts[0].subTitle}</SubTitle>
          <Tags>
            {posts[0].tags.map((tag: any) => (
              <Tag key={tag.id}>{tag.term}</Tag>
            ))}
          </Tags>
        </Texts>
        <Link
          as={`/articles/${posts[0].title}`}
          href={`/articles/${posts[0].title}`}
        >
          <a>
            <Image src={posts[0].thumbnail} alt="" />
          </a>
        </Link>
      </Container>
      <RecentPost>
        <RecentTexts>
          <RecentText>Recent Posts</RecentText>
          <Link as={`/articles`} href={`/articles`}>
            <SeeAll>See all</SeeAll>
          </Link>
        </RecentTexts>
        <Posts>
          {posts.map((post: any, index: any) => {
            if (index > 0 && index < 5) {
              return (
                <Post key={post.id}>
                  <PostImg src={post.thumbnail} />
                  <PostTitle>{post.title}</PostTitle>
                  <PostSTitle>{post.subTitle}</PostSTitle>
                  <TagBox>
                    {post.tags.map((tag: any) => (
                      <Tag key={tag.id}>{tag.term}</Tag>
                    ))}
                  </TagBox>
                </Post>
              );
            }
          })}
        </Posts>
      </RecentPost>
    </>
  );
};
export default HomePresenter;
