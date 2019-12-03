import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { GET_NIGHTMODE } from "../queries/index";
import nightTheme from "../style/nightTheme";
import theme from "../style/theme";
import AboutMe from "../components/AboutMe";

export default () => {
  const { data } = useQuery<{ nightmode: boolean }>(GET_NIGHTMODE, {
    ssr: true,
    fetchPolicy: "cache-only"
  });
  const nightmode = data && data.nightmode;
  return (
    <ThemeProvider theme={nightmode ? nightTheme : theme}>
      <>
        <Header />
        <Sidebar />
        <AboutMe />
      </>
    </ThemeProvider>
  );
};
