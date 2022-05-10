import userPageResolver from './resolvers/userPageResolver';

const resolvers = {
  Query: {
    userPage: async () => {
      return await userPageResolver();
    },
  },
};

export default resolvers;
