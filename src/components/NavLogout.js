import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAsync } from "../redux/actions/actionLogin";

const NavLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };
  return (
    <div>
      <button
        onClick={() => handleLogout()}
        className="navbar-toggler-icon"
        to=""
      >Salir</button>
    </div>
  );
};

export default NavLogout;
