import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

const typeDefs: DocumentNode = gql`
  type Query {
    userPage: [User!]
  }

  type User {
    id: ID!
    name: String!
  }
`;

export default typeDefs;
