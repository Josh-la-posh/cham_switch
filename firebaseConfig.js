import { initializeApp } from "firebase/app";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC4Qaoe9XJ2Jtar7-nsA2rO5pMRf8FdJXY",
  authDomain: "chams-elms.firebaseapp.com",
  databaseURL: "https://chams-elms.firebaseio.com",
  projectId: "chams-elms",
  storageBucket: "chams-elms.appspot.com",
  messagingSenderId: "554197890570",
  appId: "1:554197890570:web:67e547550516a2313b11f3",
  measurementId: "G-ZDH5F2FSVZ",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
