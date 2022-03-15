import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Clima from "../components/Clima";

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Clima />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};
