import React from "react";
import { NextPage } from "next";
import { useQuery } from "@apollo/react-hooks";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Articles from "../components/Articles";
import { GET_POSTS } from "../queries";
import { Post } from "../types/type";
import Posts from "../data/Posts";

const App: NextPage = () => (
  <>
    <Header />
    <Articles posts={Posts} />
    <Footer />
  </>
);

export default App;
