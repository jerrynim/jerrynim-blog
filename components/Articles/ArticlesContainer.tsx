import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import { Post } from "../../types/type";
import ArticlesPresenter from "./ArticlesPresenter";

interface IProps {
  posts: Post[];
}

const ArticleContainer: React.FC<IProps> = ({ posts }) => {
  const [align, setAlign] = useState<string>("card");
  const router = useMemo(() => {
    return useRouter();
  }, []);

  //size변경에 따른 align 변경을 위해
  const [width, setWidth] = useState<number>(
    typeof window === "undefined" ? 1440 : window.innerWidth
  );
  //width변화 handler
  const widthHandler = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", widthHandler);
    return () => {
      window.removeEventListener("resize", widthHandler);
    };
  }, []);
  const category = router.asPath === "/" ? "Articles" : router.asPath.substring(5);

  return (
    <ArticlesPresenter
      posts={posts}
      align={align}
      setAlign={setAlign}
      category={category}
      width={width}
    />
  );
};

export default ArticleContainer;
