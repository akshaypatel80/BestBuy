import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function loginSuccess(token, firstName, lastName) {
    setIsAuth(true);
    setToken(token);
    setFirstName(firstName);
    setLastName(lastName);
  }
  function logOutSuccess() {
    setIsAuth(false);
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        token,
        firstName,
        lastName,
        loginSuccess,
        logOutSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
