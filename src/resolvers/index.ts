import { Resolvers } from 'graphql/generated/graphql';
import userListPageResolver from 'resolvers/userListPageResolver';

const resolvers: Resolvers = {
  Query: {
    hello: () => {
      return 'HELLO!!!';
    },
    userListPage: async () => {
      return await userListPageResolver();
    },
  },
};

export default resolvers;
