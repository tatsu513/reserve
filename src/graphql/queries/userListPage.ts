import { gql } from 'apollo-server-micro';

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
