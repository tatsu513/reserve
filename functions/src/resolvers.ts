import userListPageResolver from './resolvers/userListPageResolver';

const resolvers = {
  Query: {
    userListPage: async () => {
      return await userListPageResolver();
    },
  },
};

export default resolvers;
