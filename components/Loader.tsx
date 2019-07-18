import React from "react";
import Lottie from "react-lottie";

const Loader: React.FC = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: require("../static/Lottie/loading.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Lottie options={options} width={300} height={300} />
    </div>
  );
};
export default Loader;
