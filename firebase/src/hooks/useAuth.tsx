"use client";
import { auth } from "@/server/firebase";
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, useEffect } from "react";

type AuthContextProps = {
  user?: User;
  isAuthenticated: boolean;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();

  function changeEmail(email: string) {
    user && updateEmail(user, email);
  }

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    signOut(auth);
    push("/login");
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user && setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, signUp, signIn, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextProps {
  return useContext(AuthContext);
}
