module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/aboutme": { page: "/AboutMe" },
      "/articles": { page: "/articles" },
      "/articles/title": {
        page: "/Articles/[article]",
        query: { title: "title" }
      },
      "/post": { page: "/post" },
      "/post/post": {
        page: "/posts/[post]",
        query: { title: "title" }
      }
    };
  }
};
