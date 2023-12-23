import React from "react";
import { FaUser } from "react-icons/fa";
import image from "./assets/image.png"
export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-content">
        <p>Hello,</p>
        <h1>
          I'm
          <span> Haythem</span> <br />
          Software Enginner
        </h1>
        <p>
          I am a skilled and passionate Software Engineer with experience in
          creating visually appealing and user-friendly websites
        </p>
        <div className="hire">
          <FaUser className="icon"/>
          <a href="#hire">Hire me</a>
        </div>
      </div>
      <div className="image">
        <img src={image} alt="im"/>
      </div>
    </div>
  );
}
