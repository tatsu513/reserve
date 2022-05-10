import * as admin from 'firebase-admin';

const userListPageResolver = async () => {
  const users = await admin.firestore().collection('users').get();
  return users.docs.map((user) => user.data());
};

export default userListPageResolver;
