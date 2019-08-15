import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import FullArticle from "../../components/FullArticle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { GET_POST } from "../../queries/index";
import { Post } from "../../types/type";

const App: React.FC = () => {
  const router = useRouter();
  const { article } = router.query;
  const { data, loading, error } = useQuery<{ getPost: Post }>(GET_POST, {
    variables: {
      title: article,
    },
  });
  return (
    <>
      {loading && <Loader />}
      <Header />
      {data && data.getPost && <FullArticle post={data} />}
      <Footer />
    </>
  );
};
export default App;
