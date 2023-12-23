import React from "react";
import work1 from "./assets/portfolio-1.jpg"
import work2 from "./assets/portfolio-2.jpg";
import work3 from "./assets/portfolio-3.jpg";

export default function Portfo() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="special-heading">
        <h1>My Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          officia perspiciatis maxime quae libero mollitia, repellendus esse
          odit, eaque eveniet velit, cupiditate dolore obcaecati voluptate fuga
          ut fugiat. Similique, sequi.
        </p>
      </div>
      <div className="img-container">
        <img src={work1} alt="" />
        <img src={work2} alt="" />
        <img src={work3} alt="" />
        <img src={work2} alt="" />
        <img src={work3} alt="" />
        <img src={work1} alt="" />
      </div>
      <button className="see">See More</button>
    </div>
  );
}
