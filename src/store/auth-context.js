import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [iseLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const confirmLogin = localStorage.getItem("isLoggedIn");
    if (confirmLogin === "1") {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: iseLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
