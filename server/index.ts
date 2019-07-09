import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = parseInt(process.env.PORT || "3000", 10);
app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/aboutme", (req, res) => {
      const page = "/AboutMe";
      app.render(req, res, page);
    });
    server.get("/articles", (req, res) => {
      const page = "/Articles";
      app.render(req, res, page);
    });
    server.get("/articles/:title", (req, res) => {
      const page = "/FullArticle";
      const params = { title: req.params.title };
      app.render(req, res, page, params);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log("> Ready on Server Port: 3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
