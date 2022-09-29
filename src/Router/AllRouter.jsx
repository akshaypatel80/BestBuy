import React from "react";
import { Route, Routes } from "react-router-dom";
import GeekSquadServices from "../Components/Searvices/GeekSquadServices";
import CreateAccountPage from "./CreateAccountPage";
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Squed-Services" element={<GeekSquadServices />}></Route>
        <Route path="/Signin" element={<SignInPage />}></Route>
        <Route path="/Create-Account" element={<CreateAccountPage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRouter;
