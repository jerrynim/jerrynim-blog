import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { update, has, upperCase, toPairs, sortBy } from "lodash";
import { NextPage } from "next";
import { Tag, ApolloReduxNextPageContext, AlphabetTuple } from "../../types/type";
import { GET_NIGHTMODE, GET_TAGS } from "../../queries/index";
import { ThemeProvider } from "../../style/typed-components";
import nightTheme from "../../style/nightTheme";
import theme from "../../style/theme";
import Header from "../../components/Header";
import TagLIst from "../../components/TagList";

interface IProps {
  alphabetList: AlphabetTuple[];
}

const tag: NextPage<IProps> = ({ alphabetList }) => {
  const {
    data: { nightmode }
  } = useQuery<{ nightmode: boolean }>(GET_NIGHTMODE, { fetchPolicy: "cache-only" });
  return (
    <ThemeProvider theme={nightmode ? nightTheme : theme}>
      <>
        <Header />
        <TagLIst alphabetList={alphabetList} />
      </>
    </ThemeProvider>
  );
};

tag.getInitialProps = async ({ apolloClient }: ApolloReduxNextPageContext) => {
  const {
    data: { getTags }
  } = await apolloClient.query<{ getTags: Tag[] }>({
    query: GET_TAGS,
    fetchPolicy: "network-only"
  });
  const alphabets = {};
  getTags.map(tag => {
    //배열이 가지고 있는지 확인
    const alphabet = upperCase(tag.term[0]);
    if (alphabet === "") {
      return;
    }
    const containAlphabet = has(alphabets, alphabet);
    if (!containAlphabet) {
      //없던 값이라면 배열생성
      update(alphabets, alphabet, () => [tag.term]);
      return;
    }
    //있던 키값이라면 push
    update(alphabets, alphabet, (value): string[] => {
      value.push(tag.term);
      return value;
    });
  });
  const array = toPairs(alphabets);
  const pairsAlphabets: any = sortBy(array, 0);
  return { alphabetList: pairsAlphabets };
};
export default tag;
