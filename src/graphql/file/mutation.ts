import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation Upload($data: [Upload!]!) {
    upload(data: $data) {
      name
      url
      extension
    }
  }
`;
