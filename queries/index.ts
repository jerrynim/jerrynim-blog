import { gql } from "apollo-boost";

export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      id
      title
      subTitle
      thumbnail
      content
      tags {
        id
        term
      }
    }
  }
`;
