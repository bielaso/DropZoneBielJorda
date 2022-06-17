import firebase from "./firebaseConfig";
import 'firebase/auth'

export const googleProvider =  new firebase.auth.GoogleAuthProvider();