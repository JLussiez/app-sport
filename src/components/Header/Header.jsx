import React from "react";

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Sports
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Football
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Basketball
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Formule 1
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Tennis
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
