import { gql } from "apollo-boost";

export const GET_NIGHTMODE = gql`
  query getNightMode {
    nightmode @client
  }
`;

export const TOGGLE_NIGHTMODE = gql`
  mutation toggleNightmode($mode: boolean) {
    toggleNightmode(mode: $mode) @client
  }
`;

export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      id
      title
      subTitle
      thumbnail
      tags {
        id
        term
      }
    }
  }
`;

export const GET_POST = gql`
  query getPost($title: String!) {
    getPost(title: $title) {
      id
      title
      subTitle
      content
      thumbnail
      comments {
        id
        text
      }
      tags {
        id
        term
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost(
    $title: String!
    $subTitle: String!
    $thumbnail: String!
    $content: String!
    $tags: String!
    $password: String!
  ) {
    createPost(
      title: $title
      subTitle: $subTitle
      thumbnail: $thumbnail
      content: $content
      tags: $tags
      password: $password
    )
  }
`;
