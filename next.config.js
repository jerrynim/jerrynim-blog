const dotEnvResult = require("dotenv").config();

const prod = process.env.NODE_ENV === "production";

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  webpack(config, options) {
    return config;
  },

  env: {
    KEY: process.env.KEY
  }
});
