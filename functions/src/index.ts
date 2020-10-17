import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const logRequest =  functions.https.onRequest(async (request, response) => {

  try {
    await admin.firestore().collection('logs').add(request);
    response.send("Document added to the database")
  } catch(error) {
    console.log(error);
    response.send("Request errored");
  }
});
