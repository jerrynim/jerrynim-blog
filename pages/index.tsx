import React from "react";
import { NextPage } from "next";
import { useQuery } from "@apollo/react-hooks";
import Header from "../components/Header";
import Articles from "../components/Articles";
import Sidebar from "../components/Sidebar";
import { GET_POSTS, GET_NIGHTMODE } from "../queries/index";
import { Post } from "../../jerrynim-blog-server/types/graph.d";
import { ApolloNextPageContext } from "../types/type";
import { ThemeProvider } from "../style/typed-components";
import theme from "../style/theme";
import nightTheme from "../style/nightTheme";

interface IProps {
  posts: Post[];
}

const App: NextPage<IProps> = ({ posts }) => {
  const {
    data: { nightmode }
  } = useQuery<{ nightmode: boolean }>(GET_NIGHTMODE);
  return (
    <ThemeProvider theme={nightmode ? nightTheme : theme}>
      <>
        <Header />
        <Sidebar />
        <Articles posts={posts} />
      </>
    </ThemeProvider>
  );
};

App.getInitialProps = async (ctx: ApolloNextPageContext) => {
  const { apolloClient } = ctx;
  const { data: posts } = await apolloClient.query<{ getPosts: Post[] }>({
    query: GET_POSTS,
    fetchPolicy: "network-only"
  });
  return { posts: posts.getPosts };
};

export default App;
