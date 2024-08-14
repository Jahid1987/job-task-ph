import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // social media providers
  const googleProvider = new GoogleAuthProvider();
  // signing in user
  function signInUser(email, password) {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  // registering user with email and pass
  function registerWithEmailPass(email, pass) {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  }
  // updating user profile
  function updateUserProfile(name, photo) {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  }

  // signing with google
  function registerUserWithGoogle() {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // sign out user from firebase
  function logOutUser() {
    return signOut(auth);
  }
  // user  observer
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsLoading(false);
      } else {
        setUser(currentUser);
        setIsLoading(false);
      }
    });
    return () => unsubcribe();
  }, [user?.email]);
  // console.log(user);
  const authInfo = {
    user,
    setUser,
    isLoading,
    signInUser,
    registerWithEmailPass,
    updateUserProfile,
    registerUserWithGoogle,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
