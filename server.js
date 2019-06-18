const express = require("express");
const next = require("next");
require("dotenv").config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.get("/map", (req, res) => {
      const actualPage = "/map";
      app.render(req, res, actualPage);
    });

    // server.get("/map/:name", (req, res) => {
    //   const actualPage = "/map2";
    //   const queryParams = { name: req.params.name };
    //   app.render(req, res, actualPage, queryParams);
    // });
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
/*클라이언트 사이드 라우팅은 아래처럼 next/link를 사용합니다. Link 컴포넌트의 children 으로 <a> 태그를 사용해야합니다.

import Link from "next/link";

<Link href="/map">
  <a>Map</a>
</Link>;
Router.push()를 사용해서 경로를 이동하는 것도 가능합니다.

Router.push(`/map/${res.data.title}`); */
