import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
import { ServiceAccount } from 'firebase-admin';
import serviceAccount from '../reserve-manager-c58ed-firebase-adminsdk-sg0oo-0cd6bd2922.json';
import express from 'express';

//import { readFileSync } from 'fs';
// const typeDefs = readFileSync('graphql/schema.graphql', 'utf8');

// 環境変数を読み込み
const config = functions.config();
const env = config['fb'];

// 初期化
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  databaseURL: env.database_url,
});

// サーバーを立てる
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
  server.applyMiddleware({ app, path: '/', cors: true });
});

export const graphql = functions.region('asia-northeast1').https.onRequest(app);
