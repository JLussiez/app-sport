import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  return (
    <>
      <h2 className="d-flex justify-content-center pt-4" id="contact">
        Bienvenue sur notre page de contact
      </h2>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
          padding: "20px",
        }}
      >
        <div
          className="col-12 col-md-8 col-lg-6 p-4"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputfirstname4" className="form-label">
                Prénom
              </label>
              <input
                type="text"
                className="form-control"
                id="inputfirstname4"
                placeholder="Entrez votre prénom"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputlastname4" className="form-label">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Entrez votre nom"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Entrez votre email"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="inputarea"
                placeholder="Entrez votre message"
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Accepter les conditions
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-success">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
