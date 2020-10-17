"use strict";
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require('express');

const app = express();
admin.initializeApp();

app.get('/', (req, res) => res.send('Hello world'));

app.post('/logrequest', (request, response) => {
  try {
      admin.firestore().collection('logs').add(request.body);
      response.send("Document added to the database");
  }
  catch (error) {
      console.log(error);
      response.send("Request errored");
  }
});

exports.api = functions.region('europe-west1').https.onRequest(app);
