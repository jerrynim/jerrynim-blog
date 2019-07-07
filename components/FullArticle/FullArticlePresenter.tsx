import React, {
  useState,
  useRef,
  LegacyRef,
  useEffect,
  useCallback
} from "react";
import styled from "styled-components";
import Header from "../Header";
import parse, { domToReact } from "html-react-parser";
import _ from "lodash";
const Container = styled.div`
  padding-top: 56px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.blueGray};
  display: flex;
  justify-content: center;
  position: relative;
`;

const Background = styled.div`
  background-color: white;
  height: 100%;
  width: 758px;
`;

const PostHeader = styled.div<{ image: string }>`
  position: relative;
  height: 350px;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

const Overlay = styled.div`
  z-index: 4;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
`;

const PostTitle = styled.h1`
  z-index: 5;
  position: absolute;
  font-size: 36px;
  color: white;
  left: 40px;
  bottom: 79px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const PostSubTitle = styled.h2`
  z-index: 5;
  left: 40px;
  bottom: 39px;
  position: absolute;

  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Post = styled.div`
  margin: 18px 40px;
`;

const Navigator = styled.div<{ number: number }>`
  position: fixed;
  top: 200px;
  right: 200px;
  font-size: 14px;
  line-height: 20px;
  color: #757575;

  h1 {
    :nth-child(${(props) => props.number + 1}) {
      color: ${(props) => props.theme.blue};
    }
  }
`;
interface IProps {
  data: {
    image: string;
    title: string;
    subTitle: string;
    tags: string[];
    Post: string;
  };
}

const FullArticlePresenter: React.FC<IProps> = ({ data }) => {
  console.log("rendered");
  let refs = [];
  let elementsYPositon = [];

  const [focus, setFocus] = useState(0);

  const scrollToTitle = (title) => {
    const target = refs.find((ref) => ref.current.id === title);
    target.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const handler = useCallback((event) => {
    console.log(window.pageYOffset);
    if (window.pageYOffset <= elementsYPositon[0]) {
      setFocus(0);
    } else {
      for (let i = 0; i < elementsYPositon.length; i++) {
        if (
          elementsYPositon[i - 1] <= window.pageYOffset &&
          window.pageYOffset <= elementsYPositon[i]
        ) {
          setFocus(i);
        }
      }
    }
  }, []);

  useEffect(() => {
    refs.map((ref) => {
      if (ref.current) {
        elementsYPositon.push(ref.current.offsetTop);
      }
    });
    window.addEventListener("scroll", _.throttle(handler, 500));
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Navigator number={focus}>
          {parse(data.Post, {
            replace: ({ attribs, children }) => {
              if (attribs && attribs.class === "title" && children) {
                return (
                  <h1 onClick={() => scrollToTitle(children[0].data)}>
                    {domToReact(children)}
                  </h1>
                );
              } else {
                return <></>;
              }
            }
          })}
        </Navigator>
        <Background>
          <PostHeader image={data.image}>
            <PostTitle>{data.title}</PostTitle>
            <PostSubTitle>{data.subTitle}</PostSubTitle>
            <Overlay />
          </PostHeader>
          <Post>
            {parse(data.Post, {
              replace: ({ attribs, children }) => {
                if (attribs && attribs.class === "title" && children) {
                  const ref2: LegacyRef<HTMLHeadingElement> = React.createRef();
                  refs.push(ref2);
                  const title = children[0].data;
                  return (
                    <h1 ref={ref2} className={"title"} id={title}>
                      {domToReact(children)}
                    </h1>
                  );
                }
              }
            })}
          </Post>
        </Background>
      </Container>
    </>
  );
};
export default FullArticlePresenter;
