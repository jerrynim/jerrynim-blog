import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { NextPage } from "next";
import { ApolloNextPageContext, Tag } from "../../types/type";
import { GET_NIGHTMODE, GET_TAGS } from "../../queries/index";
import { ThemeProvider } from "../../style/typed-components";
import nightTheme from "../../style/nightTheme";
import theme from "../../style/theme";
import Header from "../../components/Header";
import TagLIst from "../../components/TagList";

interface IProps {
  tags: Tag[];
}

const tag: NextPage<IProps> = ({ tags }) => {
  const {
    data: { nightmode }
  } = useQuery<{ nightmode: boolean }>(GET_NIGHTMODE);
  return (
    <ThemeProvider theme={nightmode ? nightTheme : theme}>
      <>
        <Header />
        <TagLIst tags={tags} />
      </>
    </ThemeProvider>
  );
};

tag.getInitialProps = async ({ apolloClient }: ApolloNextPageContext) => {
  const { data: tags } = await apolloClient.query<{ getTags: Tag[] }>({
    query: GET_TAGS,
    fetchPolicy: "network-only"
  });
  return { tags: tags.getTags };
};
export default tag;
