import React, { useEffect, useState } from "react";
import "./main-container.css";
import { Hidden } from "@mui/material";

const MainContainer = () => {
  const slides = [
    {
      id: 1,
      name: 'IDEAS-STORE',
      img: 'https://images.unsplash.com/photo-1540200049848-d9813ea0e120?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link:"https://incomparable-zabaione-493778.netlify.app",
      text: `that is e-commerce website
       build by React js for selling ideas`,
    },
    {
      id: 2,
      name: 'connectIN',
      img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link:"https://celadon-piroshki-58a9bd.netlify.app/",
      text: `landing page with contact control page
       you can visit by click free trial`,
    },
    {
      id: 3,
      name: 'Trading corsa',
      img: 'https://unsplash.com/photos/black-android-smartphone-on-brown-wooden-table-VP4WmibxvcY',
      link:"https://phenomenal-cendol-147ef9.netlify.app/",
      text: `website for trading market
      and provide you with trading courses`,
    },
    {
      id: 4,
      name: 'Wait for more in the future',
      img: '',
      text: 'i am currently working on more projects ',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };


  const handlClickDown=()=>{
    const scrollValue = (400 / 100) * window.innerHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: scrollValue,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  }
  const handlClickTop=()=>{
    const scrollValue = (200 / 100) * window.innerHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: scrollValue,
      behavior: 'smooth', // Add smooth scrolling effect
    });
 
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <div className="header">
          <div className="title">Projects</div>
          <div>
            <i onClick={handlClickTop} class="fa fa-chevron-circle-up" aria-hidden="true"></i>
          </div>
          <div className="title">3</div>
        </div>
        <div className="center">
          <div>
            <i onClick={prevSlide} class="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <div  className="project-container">
          <a style={{height:"100%",width:"100%",color:"white"}} href={slides[currentSlide].link}>
            <div  className="overlay" style={{display: currentSlide === 3 ? "none" : "flex"}}>
              <i  class="fa fa-sign-in" aria-hidden="true">
              </i>
            </div>
            </a>
            <div className="img-container" style={{display: currentSlide === 3 ? "none" : "block"}}>
              <img src={slides[currentSlide].img}></img>
            </div>
            <div className="title">
              {slides[currentSlide].name}<br/>
            <span style={{fontSize:"15px",color:"#c9cbcc"}}>{slides[currentSlide].text}</span>
            </div>
          </div>
          <div>
            <i onClick={nextSlide} class="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
        <div className="footer">
          <i onClick={handlClickDown} class="fa fa-chevron-circle-down" aria-hidden="true"></i>
        </div>
      </div>
      
    </div>
    
  );
};

export default MainContainer;
