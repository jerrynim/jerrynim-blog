import { NextPageContext } from "next";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import { NextJSContext } from "next-redux-wrapper";

type ReduxInitialState = { post: Post };

export type ApolloReduxNextPageContext = NextPageContext &
  NextJSContext<ReduxInitialState> & { apolloClient: ApolloClient<NormalizedCacheObject> }; //eslint-disable-line

export type Post = {
  id: string;
  title: string;
  subTitle: string;
  thumbnail: string;
  content: string;
  tags?: Tag[];
  comments?: Comment[];
  createdAt?: string;
  updatedAt?: string;
};

export type Comment = {
  id: string;
  post?: Post;
  text: string;
  nickname: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Tag = {
  id: string;
  term: string;
  posts?: Post[];
};
