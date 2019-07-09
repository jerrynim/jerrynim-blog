import next from "next";
import express from "express";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app
  .prepare()
  .then(() => {
    const server = express();

    //커스텀 라우터 전후 비교 시 아래 부분을 주석 처리 후 확인해 보세요
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
      console.log("> Ready on Server Port: 9090");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
