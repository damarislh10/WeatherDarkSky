import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clima from "../components/Clima";
import { Login } from "../components/Login";
import Registro from "../components/Registro";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path = "/clima" element ={<Clima/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
