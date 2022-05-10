import * as admin from 'firebase-admin';
import { User, UserListPageResponse } from '../graphql/generated/graphql';

async function userListPageResolver(): Promise<UserListPageResponse> {
  const backendUsers = await admin.firestore().collection('users').get();
  const userData = backendUsers.docs.map((user) => user.data());
  const users: User[] = userData.map((user) => {
    return {
      id: user.id,
      name: user.name,
    };
  });
  return { users };
}

export default userListPageResolver;
