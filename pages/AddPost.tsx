import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import AddPost from "../components/AddPost";
import nightTheme from "../style/nightTheme";
import theme from "../style/theme";
import { GET_NIGHTMODE } from "../queries/index";
import Header from "../components/Header";

const addpost: NextPage = () => {
  const { data } = useQuery<{ nightmode: boolean }>(GET_NIGHTMODE, {
    ssr: true,
    fetchPolicy: "cache-only"
  });
  const nightmode = data && data.nightmode;
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/atom-one-dark.min.css"
        />
      </Head>
      <ThemeProvider theme={nightmode ? nightTheme : theme}>
        <>
          <Header />
          <AddPost />
        </>
      </ThemeProvider>
    </>
  );
};
export default addpost;
