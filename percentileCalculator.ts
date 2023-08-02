import * as admin from 'firebase-admin';

var serviceAccount = require("./scoredata-3c97a-firebase-adminsdk-x292b-ab5a355882.json");

interface ScoreEntry {
  teamName: string;
  score: number;
}

function calculatePercentiles(scores: number[]): Record<string, number> {
  scores.sort((a, b) => a - b);

  const result: Record<string, number> = {
    percentile10: scores[Math.floor(scores.length * 0.1)],
    percentile50: scores[Math.floor(scores.length * 0.5)],
    percentile90: scores[Math.floor(scores.length * 0.9)],
  };

  return result;
}

async function fetchScoresFromFirestore(): Promise<ScoreEntry[]> {
  const firestore = admin.firestore();
  const collectionRef = firestore.collection('scoresData');

  const querySnapshot = await collectionRef.get();

  return querySnapshot.docs.map(doc => doc.data() as ScoreEntry);
}

async function main() {
  try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    const scoreEntries = await fetchScoresFromFirestore();

    const scores = scoreEntries.map(entry => entry.score);
    const percentiles = calculatePercentiles(scores);

    const resultJson: Record<string, number> = {
      ...percentiles,
    };

    console.log(resultJson);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
