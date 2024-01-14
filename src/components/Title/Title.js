import "./Title.css";
import React from "react";
import Cover from "./cover.jpeg";
import Download from "./download_icon.svg";

import { NavLink } from "react-router-dom";

export default function Title(props) {
  //Add the Name and menu into a nav bar
  //Make the photo dragable to show different pictures

  function changeColor(event) {
    event.target.style.color = "orange";
  }

  function mouseLeave(event) {
    event.target.style.color = "black";
  }

  return (
    <div className="title">
      <nav className="navbar intro">
        <div className="name-nav">Boaz Cheung</div>

        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer">
          Downlaod Resume<img className="downloadIcon" src={Download}/>
        </a> 

        <div className="menu">
          <div>About </div>
          <div>Project </div>
          <div>Contact </div>
        </div>
      </nav>
      <div className="main">
        <h1 className="main">
          Software Engineer<span className="bottomRightArrow">↘</span>
        </h1>
        <img
          src={Cover}
          alt="Boaz"
          className={
            props.windowWidth > 610 ? "coverPicture" : "mobileCoverPicture"
          }
        />
      </div>
      <div className={props.windowWidth > 750 ? "bottom" : "mobileBottom"}>
        <p>↓</p>
        <h3 className="quote">
          Creating web and mobile applications that make a difference
        </h3>
        <h3 className="name">Boaz Cheung</h3>
      </div>
    </div>
  );
}
