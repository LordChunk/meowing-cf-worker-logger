import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";

const app = express();
admin.initializeApp();

app.get('/', (req, res) => res.send('Hello world'));

app.post('/logrequest', async (request, response) => {
  try {
      const data = JSON.parse(JSON.stringify(request.body));
      const headers: Array<Array<string>> =  data.headers;

      const headerObject: any = {};
      headers.forEach(headerArray => {
        headerObject[headerArray[0]] = headerArray[1];
      });

      const dataWithHeaders = data;
      dataWithHeaders.headers = headerObject;

      const dbObject = {
        date: new Date().toISOString(),
        request: dataWithHeaders
      };

      await admin.firestore().collection('logs').add(dbObject);
      
      // response.send(dataWithHeaders);
      response.send("Success");
  }
  catch (error) {
      console.log("Request errored");
      console.log(error);
      response.send("Response errored: "+ error);
  }
});

exports.api = functions.region('europe-west1').https.onRequest(app);
