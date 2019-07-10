module.exports = {
  exportPathMap: {
    "/": { page: "/" },
    "/aboutme": { page: "/aboutme" },
    "/articles": { page: "/articles" },
    "/articles/title": {
      page: "/articles/[article]",
      query: { title: "title" }
    }
  }
};
