import React, { useState, useEffect, useCallback } from "react";
import NavigatorPresenter from "./NavagatorPresenter";
import _ from "lodash";
interface IProps {
  refsYPositon: Array<number>;
  refs: any;
  scrollToTitle: (title: string) => void;
  content: string;
}

const NavigatorContainer: React.FC<IProps> = ({
  refsYPositon,
  refs,
  scrollToTitle,
  content
}) => {
  const [focus, setFocus] = useState(0);

  const handler = useCallback(() => {
    for (let i = 0; i < refsYPositon.length; i++) {
      if (window.pageYOffset < refsYPositon[i]) {
        setFocus(i);
        break;
      } else {
        continue;
      }
    }
  }, []);

  useEffect(() => {
    refs.map((ref: any) => {
      if (ref.current) {
        refsYPositon.push(ref.current.offsetTop);
      }
    });
    refsYPositon.push(9999);

    window.addEventListener("scroll", _.throttle(handler, 300));
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <NavigatorPresenter
      scrollToTitle={scrollToTitle}
      focus={focus}
      content={content}
    />
  );
};
export default NavigatorContainer;
