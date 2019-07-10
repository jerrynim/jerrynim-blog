import { useRouter } from "next/router";

const pid = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
};

export default pid;
