import { db } from './firebase-admin';

export async function getAllEntries(userId) {
  try {
    let ref = db.collection('entries').where('userId', '==', userId);

    const snapshot = await ref.get();
    const entries = [];

    snapshot.forEach((doc, index) => {
      entries.push({ id: doc.id, ...doc.data() });
    });
    // console.log({ userId, path, num, score })
    return { entries };
  } catch (error) {
    return { error };
  }
}
