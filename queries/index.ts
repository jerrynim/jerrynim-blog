import { gql } from "apollo-boost";

export const GET_QUERIES = gql`
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
