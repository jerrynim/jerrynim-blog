import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { NextPage } from "next";
import Articles from "../components/Articles";
import { GET_POSTS } from "../queries";
import { useQuery } from "@apollo/react-hooks";
import { Post } from "../types/type";

const App: NextPage = () => {
  const { data, loading } = useQuery<{
    getPosts: Array<Post>;
  }>(GET_POSTS);
  return (
    <>
      <Header />
      {!loading && <Articles posts={data.getPosts} />}
      <Footer />
    </>
  );
};

export default App;
