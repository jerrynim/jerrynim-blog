const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    //추가되는 부분
    server.get("/", (req, res) => {
      const page = "/";
      const params = { title: req.params.id };
      app.render(req, res, page, params);
    });

    server.get("/AboutMe", (req, res) => {
      const page = "/AboutMe";
      const params = { title: req.params.id };
      app.render(req, res, page, params);
    });

    server.get("/Articles", (req, res) => {
      const page = "/Articles";
      const params = { title: req.params.id };
      app.render(req, res, page, params);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on Server Port: 9090");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
