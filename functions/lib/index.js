"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequest = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.logRequest = functions.https.onRequest(async (request, response) => {
    try {
        await admin.firestore().collection('logs').add(request);
        response.send("Document added to the database");
    }
    catch (error) {
        console.log(error);
        response.send("Request errored");
    }
});
//# sourceMappingURL=index.js.map