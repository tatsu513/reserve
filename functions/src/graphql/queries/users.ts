import { gql } from '@apollo/client';

export default gql`
  query UserListPage {
    userListPage {
      users {
        id
        name
      }
    }
  }
`;
