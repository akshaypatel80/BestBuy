import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRouter;
