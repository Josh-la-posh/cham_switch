import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Perfect");
        // ...
      } else {
        console.log("Inperfect");
      }
    });
  }, []);

  const login = (email, password) => {
    setIsLoading(true);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        login(email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
      });

    setUser(email);
    AsyncStorage.setItem("user", email);
    setIsLoading(false);
    console.log(email);
  };

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
