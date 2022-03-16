import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AddNota from "../components/AddNota";
import Clima from "../components/Clima";

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Clima />} />
          <Route path="/note" element={<AddNota />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};
