import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import { firebase_config } from '../config/keys';

firebase.initializeApp(firebase_config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const create_At = new Date();

    try {
      await userRef.set({
        name: displayName,
        email,
        create_At,
        ...additionalData
      })
    } catch(error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

export const addCollAndDoc = async (key, data) => {
  const coll_Ref = firestore.collection(key);
  const batch = firestore.batch();

  data.forEach(obj => { 
    const new_Doc_Ref = coll_Ref.doc();
    batch.set(new_Doc_Ref, obj);
  });

  return await batch.commit()
}

export const convertItemsToObj = items => {
  const transformed_Coll = items.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  return transformed_Coll.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;