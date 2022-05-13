import { ServiceAccount } from 'firebase-admin';

const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
  privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
};

export default serviceAccount;
