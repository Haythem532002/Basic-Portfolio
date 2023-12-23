import React from 'react'
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
export default function About() {
  return (
    <div className="about" id='about'>
      <div className="special-heading">
        <h1>What I do</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae accusantium perspiciatis delectus, numquam vero possimus quia dolorum omnis quisquam modi odit illo autem explicabo praesentium, commodi natus laudantium labore itaque!</p>
      </div>
      <div className="about-content">
        <div className="box">
          <img src={icon1} alt="icon1" />
          <div className="box-text">
            <h2>Website design</h2>
            <p>This a demo text,you can write your own content here</p>
          </div>
        </div>
        <div className="box">
          <img src={icon2} alt="icon2" />
          <div className="box-text">
            <h2>App design</h2>
            <p>This a demo text can be changed while making the production ready site</p>
          </div>
        </div>
        <div className="box">
          <img src={icon3} alt="icon3" />
          <div className="box-text">
            <h2>UI/UX design</h2>
            <p>This a demo text,you can write your own content here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
