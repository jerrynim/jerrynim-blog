import { gql } from "apollo-boost";

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
