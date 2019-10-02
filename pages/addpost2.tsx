import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const Sample = dynamic(() => import("../components/sample"), { ssr: false });
const addpost2: NextPage = () => {
  return (
    <>
      <Sample />
      <div>hello world asdfasdf</div>
    </>
  );
};

export default addpost2;
