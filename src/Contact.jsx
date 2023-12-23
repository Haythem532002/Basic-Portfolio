import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    function handleSubmit(e){
        e.preventDerfault()
    }
    function handleMessage(e) {
        setMessage(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handleName(e) {
        setName(e.target.value)
        console.log(e.target.value)
    }
  return (
    <div className="contact" id='contact'>
      <div className="special-heading">
        <h1>Contact Me</h1>
        <p>Please Fill out the form below to discuss any work opportunities</p>
      </div>
      <div className="contact-content">
        <form action="" onSubmit={handleSubmit}>
          <input onChange={handleName} value={name} type="text" placeholder="Your Name" />
          <input onChange={handleEmail} value={email} type="email" placeholder="Your EMAIL" />
          <textarea
          onChange={handleMessage} value={message}
            placeholder="Your Message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="submit">Submit</button>
        </form>
      </div>
      
      <div className="social">
        <a href="www.facebook.com">
          <FaFacebook className="s1" />
        </a>
        <a href="www.twitter.com">
          <FaTwitter className="s2" />
        </a>
        <a href="www.youtube.com">
          <FaYoutube className="s3" />
        </a>
        <a href="www.linkedin.com">
          <FaLinkedin className="s4" />
        </a>
      </div>
    </div>
  );
}
