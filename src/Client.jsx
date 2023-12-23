import React from 'react'
import client1 from "./assets/download-removebg-preview.png"
import client2 from "./assets/Adobe-logo.png"
import client3 from "./assets/microsoft-vector-logo-removebg-preview.png"
import client4 from "./assets/Facebook-Logo.png"
export default function Client() {
  return (
    <div className="client" id='clients'>
      <div className="special-heading">
        <h1>My Clients</h1>
        <p>
          I Had The opportunities to work with a diverse group of compagnies .
          Some of the notable companies i have worked with include{" "}
        </p>
      </div>
      <div className="client-container">
        <a href="">
          <img src={client1} alt="" />
        </a>
        <a href="">
          <img src={client2} alt="" />
        </a>
        <a href="">
          <img src={client3} alt="" />
        </a>
        <a href="">
          <img src={client4} alt="" />
        </a>
      </div>
    </div>
  );
}
