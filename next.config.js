module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/aboutme": { page: "/aboutme" },
      "/articles": { page: "/articles" },
      "/articles/title": {
        page: "/articles/[article]",
        query: { title: "title" }
      }
    };
  }
};
