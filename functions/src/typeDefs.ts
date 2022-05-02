import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const typeDefs: DocumentNode = gql`
  type Query {
    users: [User!]
    user: User!
  }

  type User {
    id: ID!
    name: String!
  }
`;
