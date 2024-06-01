import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { UserType } from "../types/CustomTypes";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  user: UserType | null;
  setUser: (user: UserType) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string) => void;
};

//define the initial value of the context
const initContextValue = {
  user: null,
  setUser: () => {
    throw new Error("context not initialised");
  },
  register: () => {
    throw new Error("context not initialised");
  },
  login: () => {
    throw new Error("context not initialised");
  },
  logout: () => {
    throw new Error("context not initialised");
  },
};

export const AuthContext = createContext<AuthContextType>(initContextValue);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserType | null>(null);
  console.log("user in AuthContext :>> ", user);

  // register function with Firebase Method

  const register = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userFirebase = userCredential.user;

      const user: UserType = {
        email: userFirebase.email!,
        userId: userFirebase.uid,
      };

      setUser(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error :>> ", error);
      //TODO give feedback to user WHEN:a) user tries to register an email that is already in use. b) email is invalid, c) password is too short
    }
  };
  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userFirebase = userCredential.user;

      const user: UserType = {
        email: userFirebase.email!,
        userId: userFirebase.uid,
      };

      setUser(user);
      console.log("login OK, user: :>> ", user);
      //redirect the user to (home?)
      navigate("/artworks");
    } catch (error) {
      console.log("error login user :>> ", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // we dont redirect the user ....
    }
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logout");
        console.log("user :>> ", user);
      })
      .catch((error) => {
        // An error happened.
        console.log("error during logout");
      });
  };

  function userStatusFirebase() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const userFirebase: UserType = {
          email: user.email!,
          userId: user.uid,
        };
        setUser(userFirebase);
        console.log("userFirebase :>> ", userFirebase);

        // ...
      } else {
        // User is signed out
        // ...
        console.log("user is logged out in firebase");
        setUser(null);
      }
    });
  }

  useEffect(() => {
    // console.log(
    //   "%c find out if the user is logged in in Firebase or not",
    //   "color:orange"
    // );
    userStatusFirebase();
    console.log("user :>> ", user);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
