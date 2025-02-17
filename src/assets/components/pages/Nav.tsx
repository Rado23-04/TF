import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Task from './Task';

function Nav() {
  return (
    <>
      <Router>
        {/* Barre de navigation stylisée avec Bootstrap et animations */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg fixed-top">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item mx-2">
                  <Link to="/login" className="nav-link text-white hover-effect">
                    Login
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/dashboard" className="nav-link text-white hover-effect">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/task" className="nav-link text-white hover-effect">
                    Task
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Contenu des routes avec un espace pour la barre de navigation fixe */}
        <div className="container mt-5 pt-5">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/task" element={<Task />} />
          </Routes>
        </div>
      </Router>

      {/* Styles supplémentaires pour les animations */}
      <style>
        {`
          .hover-effect {
            position: relative;
            transition: color 0.3s ease;
          }
          .hover-effect::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: white;
            bottom: 0;
            left: 0;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease;
          }
          .hover-effect:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
          .hover-effect:hover {
            color: #ffdd57 !important; /* Couleur de survol */
          }
        `}
      </style>
    </>
  );
}

export default Nav;