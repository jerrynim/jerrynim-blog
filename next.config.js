const dotEnvResult = require("dotenv").config();

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}

const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack(config) {
    return config;
  },

  env: {
    KEY: process.env.KEY
  }
});
