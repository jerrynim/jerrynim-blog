import { NextApiRequest, NextApiResponse } from "next-server/dist/lib/utils";

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  res.end("Hello World");
}
