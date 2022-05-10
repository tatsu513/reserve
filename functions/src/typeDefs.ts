import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

const typeDefs: DocumentNode = gql`
  type Query {
    userListPage: [User!]
    user: User
  }

  type User {
    id: ID!
    name: String!
  }
`;

export default typeDefs;
