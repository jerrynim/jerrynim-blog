import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  return <p>Post: {router}</p>;
};

export default Post;
