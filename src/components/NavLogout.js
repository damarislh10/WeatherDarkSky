import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAsync } from "../redux/actions/actionLogin";
import "../styles/styleNav.css";

const NavLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };
  return (
    <div className="container-nav">
      <button onClick={() => handleLogout()} className="btnLogout ">
        Salir
        <img
          className="imgsalir ms-2"
          src="https://res.cloudinary.com/df90q7vvj/image/upload/v1647392241/icons8-salida-32_wlf5cq.png"
          alt="imgSalir"
        />
      </button>
    </div>
  );
};

export default NavLogout;
