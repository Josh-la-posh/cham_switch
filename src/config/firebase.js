import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4Qaoe9XJ2Jtar7-nsA2rO5pMRf8FdJXY",
  authDomain: "chams-elms.firebaseapp.com",
  projectId: "chams-elms",
  storageBucket: "chams-elms.appspot.com",
  messagingSenderId: "554197890570",
  appId: "1:554197890570:web:67e547550516a2313b11f3",
  measurementId: "G-ZDH5F2FSVZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
