import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivetRouter from "../Components/PrivetRouter";
import GeekSquadServices from "../Components/Searvices/GeekSquadServices";
import InHomeAdvisor from "../Components/Searvices/InHomeAdvisor";
import TradeInProgram from "../Components/Searvices/TradeInProgram";
import CartPage from "./CartPage";
import ComputersAndTabletsPage from "./ComputersAndTabletsPage";
import CreateAccountPage from "./CreateAccountPage";
import HomePage from "./HomePage";

import SignInPage from "./SignInPage";
import SingleProduct from "./SingleProduct";

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/Computers-Tablets"
          element={<ComputersAndTabletsPage />}
        ></Route>
        <Route path="/Squed-Services" element={<GeekSquadServices />}></Route>
        <Route path="/In-HomeAdvisor" element={<InHomeAdvisor />}></Route>
        <Route path="/Trade-InProgram" element={<TradeInProgram />}></Route>
        <Route path="/Signin" element={<SignInPage />}></Route>
        <Route path="/Create-Account" element={<CreateAccountPage />}></Route>
        <Route
          path="/Computers-Tablets/:id"
          element={<SingleProduct />}
        ></Route>
        <Route
          path="/cart"
          element={
            <PrivetRouter>
              <CartPage />
            </PrivetRouter>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRouter;
