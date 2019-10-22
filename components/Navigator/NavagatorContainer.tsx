import React, { useState, useEffect, useCallback } from "react";
import { throttle } from "lodash";
import NavigatorPresenter from "./NavagatorPresenter";

const NavigatorContainer: React.FC = () => {
  const [titles, setTitles] = useState([]);
  const [focus, setFocus] = useState(0);
  let offsetTops = [];
  const scrollHandler = useCallback(() => {
    for (let i = 0; i < offsetTops.length; i += 1) {
      if (window.pageYOffset - 80 < offsetTops[i]) {
        setFocus(i);
        break;
      }
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const h1titles = Array.from(document.getElementsByTagName("h1"));
      const tempOffsetTops = [];
      h1titles.map(title => tempOffsetTops.push(title.offsetTop));
      offsetTops = tempOffsetTops;
      offsetTops.push(99999);
      setTitles(h1titles);
      scrollHandler();
    }
    window.addEventListener("scroll", throttle(scrollHandler, 50));
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return <NavigatorPresenter titles={titles} focus={focus} />;
};
export default NavigatorContainer;
