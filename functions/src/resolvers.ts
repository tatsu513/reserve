import { Resolvers } from '../graphql/generated/graphql';
import userListPageResolver from './resolvers/userListPageResolver';

const resolvers: Resolvers = {
  Query: {
    userListPage: async () => {
      return await userListPageResolver();
    },
    // userPage: async ({ userId }) => {
    //   return await userPageResolver();
    // },
  },
};

export default resolvers;
