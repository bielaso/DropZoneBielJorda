import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8mgf_0J1TH8_9MiWkvYDfbj8xDkIy52g",
  authDomain: "dropzonehackaton.firebaseapp.com",
  projectId: "dropzonehackaton",
  storageBucket: "dropzonehackaton.appspot.com",
  messagingSenderId: "585921795608",
  appId: "1:585921795608:web:16fb35ded3678ea702556d",
  measurementId: "G-P56FKNJDMM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;