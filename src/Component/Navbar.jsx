import React from 'react';
import { Link } from 'react-router-dom';

export const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/practice/public">E-Commerce</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">


            <li className="nav-item">
              <Link className="nav-link" to="/sign-in">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/practice/public">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

