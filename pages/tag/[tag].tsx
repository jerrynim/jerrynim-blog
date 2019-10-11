import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { NextPage } from "next";
import { Tag, ApolloReduxNextPageContext } from "../../types/type";
import { GET_NIGHTMODE, GET_TAG } from "../../queries/index";
import { ThemeProvider } from "../../style/typed-components";
import nightTheme from "../../style/nightTheme";
import theme from "../../style/theme";
import Header from "../../components/Header";
import TagTermList from "../../components/TagTermList";

interface IProps {
  tag: Tag;
}

const tag: NextPage<IProps> = ({ tag }) => {
  const { data } = useQuery<{ nightmode: boolean }>(GET_NIGHTMODE, { fetchPolicy: "cache-only" });
  const nightmode = data && data.nightmode;
  return (
    <ThemeProvider theme={nightmode ? nightTheme : theme}>
      <>
        <Header />
        <TagTermList tag={tag} />
      </>
    </ThemeProvider>
  );
};

tag.getInitialProps = async ({ apolloClient }: ApolloReduxNextPageContext) => {
  const { data } = await apolloClient.query<{ getTag: Tag }>({
    query: GET_TAG,
    fetchPolicy: "network-only"
  });
  const tag = data && data.getTag;

  return { tag };
};
export default tag;
