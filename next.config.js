module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/aboutme": { page: "/AboutMe" },
      "/articles": { page: "/Articles" },
      "/articles/title": {
        page: "/Articles/[article]",
        query: { title: "title" }
      },
      "/post": { page: "/post" },
      "/post/pid": {
        page: "/post/[pid]",
        query: { title: "pid" }
      }
    };
  }
};
