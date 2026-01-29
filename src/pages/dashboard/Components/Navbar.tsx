import { NavLink, useNavigate } from "react-router-dom";
import "./Components.css";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg py-4" id="navbar">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-link text-white" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link text-white" to="/articles">
              Artykuły{" "}
            </NavLink>
            <NavLink className="nav-link text-white" to="/accessories">
              Akcesoria
            </NavLink>
            <NavLink className="nav-link text-white" to="/orders">
              Zamówienia{" "}
            </NavLink>
            <NavLink className="nav-link text-white" to="/projects">
              Projekty
            </NavLink>
            <NavLink className="nav-link text-white" to="/users">
              Użytkownicy
            </NavLink>
            <NavLink className="nav-link text-white" to="/producers">
              Producenci
            </NavLink>
          </div>
        </div>

        <div className="d-flex" role="search">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars color="white" />
          </button>
        </div>
      </div>
    </nav>
  );
};
