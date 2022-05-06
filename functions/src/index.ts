const express = require('express');
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const serviceAccount = require('../reserve-manager-c58ed-firebase-adminsdk-sg0oo-0cd6bd2922.json');
const { ApolloServer } = require('apollo-server-express');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
});

import { resolvers } from './resolver';
import { typeDefs } from './typeDefs';

// サーバーを起動する
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const app = express();
server.start().then(() => {
  server.applyMiddleware({ app, path: '/', cors: true });
});

exports.graphql = functions.region('asia-northeast1').https.onRequest(app);
