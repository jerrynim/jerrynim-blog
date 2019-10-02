import React, { useRef, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import FullArticlePresenter from "./FullArticlePresenter";
import { Post } from "../../types/type";
import { GET_NIGHTMODE } from "../../queries/index";

interface IProps {
  post: Post;
  title: string | string[];
}

const FullArticleContainer: React.FC<IProps> = ({ post, title }) => {
  const Ref = useRef(null);
  const {
    data: { nightmode }
  } = useQuery<{ nightmode: boolean }>(GET_NIGHTMODE, { fetchPolicy: "cache-only" });

  useEffect(() => {
    const Element = document.createElement("script");
    Element.async = true;
    Element.src = "https://utteranc.es/client.js";
    Element.setAttribute("repo", "jerrynim/jerrynim-blog");
    Element.setAttribute("issue-term", title as string);
    Element.setAttribute("crossorigin", "anonymous");
    Element.removeAttribute("theme");
    Element.setAttribute("theme", nightmode ? "photon-dark" : "github-light");
    //차일드가 있다면
    if (Ref.current.hasChildNodes()) {
      Ref.current.removeChild(Ref.current.firstChild);
    }
    Ref.current.appendChild(Element);
  }, [nightmode]);

  return <FullArticlePresenter post={post} Ref={Ref} />;
};

export default FullArticleContainer;
