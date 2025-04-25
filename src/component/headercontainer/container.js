import React, { useEffect, useState } from "react";
import "./container.css";
import Typewriter from "typewriter-effect";
const Container = () => {
  const handlClickDown = () => {
    const scrollValue = (100 / 100) * window.innerHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: scrollValue,
      behavior: "smooth", // Add smooth scrolling effect
    });
  };
  return (
    <div className="background">
      <div className="header-container">
        <div className="header"></div>
        <div className="center">
          <div>Who I'm</div>
          <div className="qoute">
            <Typewriter
              options={{
                strings: [
                  `full stack developer specializing in web development. Wellversed
                  in numerous programming languages including HTML5, CSS , JavaScript, vue js , React js.
                  node js , nest js , express js ,SQL`,
                ],
                autoStart: true,
                loop: false,
                pauseFor: 10000000,
              }}
            />
          </div>
        </div>
        <div className="footer">
          <i
            onClick={handlClickDown}
            class="fa fa-chevron-circle-down"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Container;
