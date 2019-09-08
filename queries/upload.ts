import { gql } from "apollo-boost";

export const FILE_UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file)
  }
`;

export default FILE_UPLOAD;
