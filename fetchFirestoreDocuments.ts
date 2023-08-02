import * as admin from 'firebase-admin';
var serviceAccount = require("./scoredata-3c97a-firebase-adminsdk-x292b-ab5a355882.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
async function fetchFirestoreDocuments(): Promise<any[]> {
  const firestore = admin.firestore();
  const collectionRef = firestore.collection('scoresData');

  const querySnapshot = await collectionRef.get();

  return querySnapshot.docs.map(doc => doc.data());
}

async function main() {
  try{
    const documents = await fetchFirestoreDocuments();
    console.log('Fetched documents:', documents.slice(0, 5));
  } catch (error){
    console.log('Error: ', error)
  }
}

main();
