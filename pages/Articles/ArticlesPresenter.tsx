import React from "react";
import Header from "../../components/Header";
import Article from "../../components/Article";
import Article2 from "../../components/Article2";
interface IProps {
  Posts: {
    image: string;
    title: string;
    subTitle: string;
    tags: string[];
  }[];
}

const ArticlePresenter: React.FC<IProps> = ({ Posts }) => {
  return (
    <>
      <Header />
      {Posts.map((Post, index) => {
        if (index % 2 === 0) {
          return <Article key={index} Post={Post} />;
        } else {
          return <Article2 key={index} Post={Post} />;
        }
      })}
    </>
  );
};
export default ArticlePresenter;
