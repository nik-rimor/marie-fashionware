import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDWHziN7Qnz_rHNFy6bOkLccvm17978RQM',
  authDomain: 'marie-fashionware-db.firebaseapp.com',
  databaseURL: 'https://marie-fashionware-db.firebaseio.com',
  projectId: 'marie-fashionware-db',
  storageBucket: 'marie-fashionware-db.appspot.com',
  messagingSenderId: '1091276852834',
  appId: '1:1091276852834:web:49943c7d3ee60e4a8e8b3b',
  measurementId: 'G-D7K2TR67H4',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user: ', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
