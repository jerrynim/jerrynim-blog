module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/aboutme": { page: "/AboutMe" },
      "/Articles": { page: "/Articles" },
      "/Articles/title": {
        page: "/Articles/[article]",
        query: { title: "title" }
      },
      "/posts": { page: "/posts" },
      "/posts/post": {
        page: "/posts/[post]",
        query: { title: "title" }
      }
    };
  }
};
