import * as admin from 'firebase-admin';

const resolvers = {
  Query: {
    async userPage() {
      const users = await admin.firestore().collection('users').get();
      return users.docs.map((user) => user.data());
    },
  },
};

export default resolvers;
