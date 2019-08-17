import React from "react";
import { NextPage } from "next";
import { useQuery } from "@apollo/react-hooks";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Articles from "../components/Articles";
import { GET_POSTS } from "../queries";
import { Post } from "../types/type";

const App: NextPage = () => {
  const { data, loading, error } = useQuery<{
    getPosts: Post[];
  }>(GET_POSTS);
  console.log(data);
  return (
    <>
      {error && <div>error</div>}
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
