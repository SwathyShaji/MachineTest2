import React from "react";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light  bg-dark">
        <a class="navbar-brand text-white" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Features
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
