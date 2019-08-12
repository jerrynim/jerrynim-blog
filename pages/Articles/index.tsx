import Articles from "../../components/Articles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import { GET_POSTS } from "../../queries";
import Loader from "../../components/Loader";
import { useQuery } from "@apollo/react-hooks";
import { Post } from "../../types/type";

const App: React.FC = () => {
  const { data, loading } = useQuery<{
    getPosts: Array<Post>;
  }>(GET_POSTS);
  return (
    <>
      {loading && <Loader />}
      {!loading && data && data.getPosts && (
        <>
          <Header />
          <Articles posts={data.getPosts} />
          <Footer />
        </>
      )}
    </>
  );
};
export default App;
