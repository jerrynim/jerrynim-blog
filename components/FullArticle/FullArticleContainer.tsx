import React, { useRef, useEffect } from "react";
import FullArticlePresenter from "./FullArticlePresenter";
import { Post } from "../../types/type";

interface IProps {
  post: Post;
  title: string | string[];
}

const FullArticleContainer: React.FC<IProps> = ({ post, title }) => {
  const commentRef = useRef(null);

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "jerrynim/jerrynim-blog");
    scriptEl.setAttribute("issue-term", title);
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("crossorigin", "anonymous");
    commentRef.current.appendChild(scriptEl);
  }, []);
  return <FullArticlePresenter post={post} commentRef={commentRef} />;
};

export default FullArticleContainer;
