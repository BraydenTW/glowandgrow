import firebase from './firebase';

const firestore = firebase.firestore();

// @ts-ignore
export function createUser(uid, data) {
  const entry = firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true })
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch((err) => {
      console.log(err);
    });
  return { entry };
}

// @ts-ignore
export function createEntry(data, callbackFinished) {
  const entry = firestore.collection('entries').doc();

  entry
    .set(data)
    .then(() => {
      callbackFinished();
    })
    .catch((err) => console.log(err));

  return { entry };
}

// @ts-ignore
export function editEntry(glow, grow, id, callbackFinished) {
  const entry = firestore.collection('entries').doc(id);

  entry
    .update({
      glow: glow,
      grow: grow
    })
    .then(() => {
      callbackFinished();
    })
    .catch((err) => console.log(err));

  return { entry };
}

// @ts-ignore
export function deleteEntry(id, callbackFinished) {
  firestore
    .collection('entries')
    .doc(id)
    .delete()
    .then(() => {
      callbackFinished();
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
}
