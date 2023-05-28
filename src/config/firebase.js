import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzvufRu_8wnDTbp9hp7LnegEHADZ1neaU",
  authDomain: "chams-83c1b.firebaseapp.com",
  projectId: "chams-83c1b",
  storageBucket: "chams-83c1b.appspot.com",
  messagingSenderId: "651088505135",
  appId: "1:651088505135:web:d69f145132012e412b59da",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
