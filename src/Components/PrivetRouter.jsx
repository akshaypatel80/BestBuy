import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const PrivetRouter = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to={"/Signin"} />;
  }
  return children;
};

export default PrivetRouter;
