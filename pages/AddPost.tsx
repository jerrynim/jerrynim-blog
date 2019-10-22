import React from "react";
import { NextPage } from "next";
import { useQuery } from "@apollo/react-hooks";
import AddPost from "../components/AddPost";
import { ThemeProvider } from "../style/typed-components";
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
    <ThemeProvider theme={nightmode ? nightTheme : theme}>
      <>
        <Header />
        <AddPost />
      </>
    </ThemeProvider>
  );
};
export default addpost;
