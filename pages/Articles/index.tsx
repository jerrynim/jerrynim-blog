import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Articles from "../../components/Articles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { GET_POSTS } from "../../queries";
import { Post } from "../../types/type";

const App: React.FC = () => {
  const { data, loading } = useQuery<{
    getPosts: Array<Post>;
  }>(GET_POSTS);
  return (
    <>
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
