/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import { Quizlisting } from "../Pages/Quiz/Quiz";
import Quizinstruction from "../Pages/Quizinstruction/Quizinstruction";
import Result from "../Pages/Result/Result";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/quiz' element={<Quizlisting />}></Route>
        <Route path='/instructions' element={<Quizinstruction />}></Route>
        <Route path='/result' element={<Result />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
