import { ApolloServer } from 'apollo-server-micro';
import { readFileSync } from 'fs';
import Cors from 'micro-cors';
import resolvers from 'resolvers';

import admin from 'firebase-admin';
import serviceAccount from './serviceAccount';
// 初期化
if (admin.app.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.database_url,
  });
}

const cors = Cors();

const typeDefs = readFileSync(process.cwd() + '/src/graphql/schema.graphql', {
  encoding: 'utf8',
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
const startServer = apolloServer.start();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});
