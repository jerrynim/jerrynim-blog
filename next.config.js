require("dotenv").config();

const nextConfig = {
  env: {
    END_POINT: process.env.END_POINT,
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID
  }
};

module.exports = nextConfig;
