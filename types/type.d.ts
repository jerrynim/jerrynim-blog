import { NextPageContext } from "next";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";

export interface ApolloNextPageContext extends NextPageContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}

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
