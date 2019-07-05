import React from "react";
import Header from "../Header";
import Article from "../Article";
import Article2 from "../Article2";
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
