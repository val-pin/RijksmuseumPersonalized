import { PropsWithChildren, createContext, useState } from "react";
import { UserType } from "../types/CustomTypes";

type AuthContextType = {
  user: UserType | null;
  setUser: (user: UserType) => void;
  login: () => void;
  logout: () => void;
};

//define the initial value of the context
const initContextValue = {
  user: null,
  setUser: () => {
    throw new Error("context not initialised");
  },
  login: () => {
    throw new Error("context not initialised");
  },
  logout: () => {
    throw new Error("context not initialised"); //why the same error as in setUser ?
  },
};

export const AuthContext = createContext<AuthContextType>(initContextValue);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserType | null>(null);

  const login = () => {
    const user1: UserType = {
      email: "val@val.com",
    };
    setUser(user1);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
