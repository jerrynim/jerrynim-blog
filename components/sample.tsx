import React, { useEffect } from "react";
import { html, render } from "lit-html";

const sample: React.FC = () => {
  const helloTemplate = name =>
    html`
      <div>Hello ${name}!</div>
    `;
  useEffect(() => {
    render(helloTemplate("hello"), document.getElementById("lit"));
  }, []);
  const click = () => {
    render(helloTemplate("babo"), document.getElementById("lit"));
  };
  return (
    <>
      <button type="button" onClick={() => click()}>
        asdfasdf
      </button>
      <div id="lit"><div>hello world</div></div>
    </>
  );
};

export default sample;
