import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";

const app = express();
admin.initializeApp();

app.post('/logrequest', async (request, response) => {
  try {
      const data = JSON.parse(JSON.stringify(request.body));

      const dbObject = {
        date: new Date().toISOString(),
        request: data
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

exports.oldLogRemover = functions.region('europe-west1')
  .pubsub.schedule("every 24 hours")
  .onRun(async () => {

  const retentionInDays = 30;
  const expiryDate = new Date(Date.now() - retentionInDays * 24 * 60 * 60 * 1000)

  const logs = admin.firestore().collection('logs'); 
  const expiredLogs =  await logs.where('date', '<', expiryDate).get();
  
  expiredLogs.forEach(log => {
    log.ref.delete().catch(console.error);
  })

  console.log("Tried to delete "+ expiredLogs.size +" logs.");
});

exports.api = functions.region('europe-west1').https.onRequest(app);
