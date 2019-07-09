import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/AboutMe", (req, res) => {
      const page = "/AboutMe";
      app.render(req, res, page);
    });
    server.get("/Articles", (req, res) => {
      const page = "/Articles";
      app.render(req, res, page);
    });
    server.get("/Articles/:title", (req, res) => {
      const page = "/FullArticle";
      const params = { title: req.params.title };
      app.render(req, res, page, params);
    });
    server.get("/FullArticle", (req, res) => {
      const page = "/FullArticle";
      app.render(req, res, page);
    });
    server.get("/FullArticle/:title", (req, res) => {
      const page = "/FullArticle";
      const params = { title: req.params.title };
      app.render(req, res, page, params);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on Server Port: 3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
