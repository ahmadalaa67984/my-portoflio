import React, { useEffect, useState } from "react";
import "./main-container.css";
import { Hidden } from "@mui/material";

const MainContainer = () => {
  const slides = [
    {
      id: 4,
      name: "Growth-in",
      img: "https://plus.unsplash.com/premium_photo-1682309543429-6aaa6d792dae?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://growth-in.com",
      text: "A project management platform for agencies to manage operations, clients, and services efficiently.",
      techUsed: "Vue.js, PrimeVue, Pinia, Laravel, REST APIs",
    },
    {
      id: 5,
      name: "Feidak",
      img: "https://plus.unsplash.com/premium_photo-1681487829842-2aeff98f8b63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "A mobile app developed using Flutter and Firebase, focused on community-driven feedback and suggestions.",
      techUsed: "Node js , Nest Js , Prisma , PostgreSQL",
      link: "sf",
    },
    {
      id: 6,
      name: "Cunan",
      img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "An NFT trading platform allowing users to explore, list, and trade NFTs with a modern UI.",
      techUsed: "React.js, Tailwind CSS, Node.js",
      link: "sd",
    },
    {
      id: 1,
      name: "IDEAS-STORE",
      img: "https://images.unsplash.com/photo-1540200049848-d9813ea0e120?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://incomparable-zabaione-493778.netlify.app",
      text: "That is an e-commerce website built with React.js for selling ideas.",
      techUsed: "React.js, Firebase Auth, Firebase Store",
    },
    {
      id: 2,
      name: "connectIN",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://celadon-piroshki-58a9bd.netlify.app/",
      text: "Landing page with a contact control panel. You can visit it by clicking 'Free Trial'.",
      techUsed: "React.js, Firebase Auth, Firebase Store",
    },
    {
      id: 3,
      name: "Trading Corsa",
      img: "https://images.unsplash.com/photo-1583752028088-91e3e9880b46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://phenomenal-cendol-147ef9.netlify.app/",
      text: "A website for trading market insights and providing trading courses.",
      techUsed: "Vue.js, PHP Laravel",
    },
    // {
    //   id: 7,
    //   name: "Wait for more in the future",
    //   img: "",
    //   text: "I am currently working on more projects.",
    // },
  ];

  const handleClickDown = () => {
    // Scroll down by one viewport height
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleClickTop = () => {
    // Scroll up by one viewport height
    window.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <div className="header">
          <div className="title">Projects</div>
          <div>
            <i
              onClick={handleClickTop}
              className="fa fa-chevron-circle-up"
              aria-hidden="true"
            ></i>
          </div>
          <div className="title">3</div>
        </div>
        <div className="projects-grid">
          {slides.map((slide) =>
            slide.link ? (
              <a
                key={slide.id}
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="project-container">
                  {slide.img && (
                    <div className="img-container">
                      <img src={slide.img} alt={slide.name}></img>
                    </div>
                  )}
                  <div
                    className="overlay"
                    style={{ display: slide.img ? "flex" : "none" }}
                  >
                    <div
                      style={{
                        marginTop: "10px",
                        fontSize: "20px",
                        color: "#ffff",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {slide.techUsed}
                    </div>
                  </div>
                  <div className="title">
                    {slide.name}
                    <br />
                    <span style={{ fontSize: "15px", color: "#c9cbcc" }}>
                      {slide.text}
                    </span>
                  </div>
                </div>
              </a>
            ) : (
              <div key={slide.id} className="project-container">
                {slide.img && (
                  <div className="img-container">
                    <img src={slide.img} alt={slide.name}></img>
                  </div>
                )}
                <div
                  className="overlay"
                  style={{ display: slide.img ? "flex" : "none" }}
                >
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "20px",
                      color: "#ffff",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      padding: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {slide.techUsed}
                  </div>
                </div>
                <div className="title">
                  {slide.name}
                  <br />
                  <span style={{ fontSize: "15px", color: "#c9cbcc" }}>
                    {slide.text}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
        <div className="footer">
          <i
            onClick={handleClickDown}
            className="fa fa-chevron-circle-down"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
