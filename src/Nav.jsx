import React from "react";
import logo from "./assets/logo.png";
import { FaRegMessage } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Nav() {
  function menu(){
    let nv = document.querySelector(".link")
    if(nv.classList.contains("show")){
      nv.classList.remove("show");
    } else {
      nv.classList.add("show");
    }
  }
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="link show">
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#clients">Clients</a>
        </li>
      </ul>
      <button className="burger" onClick={menu}>
        <GiHamburgerMenu  />
      </button>
      <div className="contact">
        <FaRegMessage className="icon" />
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  );
}
