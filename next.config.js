const withTypescript = require("@zeit/next-typescript");
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");
const withCss = require("@zeit/next-css");

//next.config.js안에서는 webpack hook 을 사용하여 webpack 설정을 해주는 것도 가능합니다.
// next-typescript 플러그인을 사용하기 위해서 아래와 같이 export 합니다.
module.exports = withTypescript(
  withCss({
    webpack: (config) => {
      return config;
    }
  })
);
