import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log(router);

  return <p>Post</p>;
};

export default Post;
