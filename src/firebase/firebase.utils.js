import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDO40KTMEipCJg2zATR_ieNAze8NLnXcFA',
  authDomain: 'crwn-db-389d2.firebaseapp.com',
  projectId: 'crwn-db-389d2',
  storageBucket: 'crwn-db-389d2.appspot.com',
  messagingSenderId: '512476931389',
  appId: '1:512476931389:web:849acedeaebf42acbfd154',
  measurementId: 'G-V7SLWT52S8',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(provider)
}

export default firebase
