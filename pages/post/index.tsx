import React, { useState } from "react";

export default () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const data = await fetch("http://localhost:3000/api/hello").then((r) =>
      r.text()
    );
    console.log(data);
    setData(data);
  };
  return (
    <div>
      <p>Hello Next.jss</p>
      <button onClick={getData}>asdf</button>
      <br />
      {data}
    </div>
  );
};
