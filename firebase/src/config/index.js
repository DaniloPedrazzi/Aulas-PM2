// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "expo-firebase-3cac4.firebaseapp.com",
  projectId: "expo-firebase-3cac4",
  storageBucket: "expo-firebase-3cac4.appspot.com",
  messagingSenderId: "434117598290",
  appId: process.env.APP_ID
};

// Initialize Firebase if no error
if(firebase.app.lenght === 0){
    Firebase = initializeApp(firebaseConfig);
}

export default Firebase;