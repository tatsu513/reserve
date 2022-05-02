import * as admin from 'firebase-admin';

export const resolvers = {
  Query: {
    async users() {
      const users = await admin.firestore().collection('users').get();
      return users.docs.map((user) => user.data());
    },
    async user() {
      const users = await admin.firestore().collection('users').get();
      return users.docs[0].data();
    },
  },
};
