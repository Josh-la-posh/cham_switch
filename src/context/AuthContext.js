import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { ref, onValue } from "firebase/database";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(user.email);
  //       // ...
  //     } else {
  //       console.log("Inperfect");
  //     }
  //   });
  // }, []);

  //GET ROLE FROM FIREBASE
  function getRole(password) {
    const starCountRef = ref(db, "users/" + password);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setRole(data.role);
      console.log(role);
    });
  }

  // LOGIN WITH FIREBASE
  const login = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // login(email, password);
        user && setUser(email);
        user && AsyncStorage.setItem("user", email);
        user && setIsLoading(false);
        user && getRole(password);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log("error message = " + error.message);
      });
  };

  // LOGGING OUR A USER
  const logout = () => {
    setIsLoading(false);
    setUser(null);
    AsyncStorage.removeItem("user");
    setIsLoading(true);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let user = await AsyncStorage.getItem("user");
      setUser(user);
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
