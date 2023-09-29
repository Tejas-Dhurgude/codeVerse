import { createContext, useState } from "react";
import { useEffect } from "react";
import Auth from "../api/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(Auth, async (user) => {
      setAuth(user);
    });

    return () => {
      unsubscribeAuth();
    };
  }, [auth, setAuth]);

  const signUp = async (userName, email, password) => {
    await createUserWithEmailAndPassword(Auth, email, password);

    await updateProfile(Auth.currentUser, {
      displayName: userName,
    });

    await sendEmailVerification(Auth.currentUser, {
      url: process.env.FRONTEND_URL,
    });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const signOut = () => {
    return signOutFirebase(Auth);
  };

  const googleSignIn = () => {
    return signInWithPopup(Auth, new GoogleAuthProvider());
  };

  return (
    <AuthContext.Provider
      value={{ auth, signUp, signIn, signOut, googleSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
