import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';

import firebase from 'firebase/app';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCpyTRbyk8iPwv9HvLAdA-m4kb7xaNgRKM',
    authDomain: 'glowandgrow-e5a60.firebaseapp.com',
    projectId: 'glowandgrow-e5a60'
  });
}

export default firebase;
