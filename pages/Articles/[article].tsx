import React from "react";
import FullArticle from "../../components/FullArticle";
import { useRouter } from "next/router";

const App: React.FC = () => {
  const router = useRouter();
  const { pid: title } = router.query;

  return <FullArticle title={title} />;
};
export default App;
