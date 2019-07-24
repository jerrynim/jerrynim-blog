//질문에 답변할 예시 페이지~

import React, { useState, useEffect, useRef } from "react";

const App: React.FC = () => {
  useEffect(() => {
    const ref = document.getElementById("data");
    setData(ref);
  }, []);

  const [data, setData] = useState();
  console.log(data);
  const ref_ = useRef(null);
  console.log(ref_);
  return (
    <>
      <div id="data" />
      <div ref={ref_} />
    </>
  );
};
export default App;
