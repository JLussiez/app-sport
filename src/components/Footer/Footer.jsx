import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-body-secondary text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Accueil</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-body">
                    Football
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    Basketball
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    Formule 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    Tennis
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Conditions Générales</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-body">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    RGPD
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    Utilisation des cookies
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright: AppSport
        </div>
      </footer>
    </>
  );
}
