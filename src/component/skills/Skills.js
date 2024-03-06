import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";




const Skills = () => {

  const [progress,setProgress]=useState({css:0,js:0,html:0,rea:0});
  useEffect(() => {
    const handleScroll = () => {
      if(((window.scrollY/window.innerHeight)*100)>195)
      {
        setProgress({
          css:90,
          js:80,
          html:95,
          rea:75
        })
      }
      console.log((window.scrollY/window.innerHeight)*100);
    };

    // Attach event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlClickDown=()=>{
    const scrollValue = (300 / 100) * window.innerHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: scrollValue,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  }
  const handlClickTop=()=>{
    const scrollValue = (100 / 100) * window.innerHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: scrollValue,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  }
  
  return (
    <div className="skills-container">
      <div className="center-container">
        <div className="header">
          <div className="title">Skills</div>
          <div>
            <i onClick={handlClickTop} class="fa fa-chevron-circle-up" aria-hidden="true"></i>
          </div>
          <div className="title">2</div>
        </div>
        <div className="center">
         
            <div style={{position: 'relative'}} className="circ-caption">
              <FontAwesomeIcon  style={{position: 'absolute', top: '30%', left: '45%'}} icon={faHtml5} />
              <CircularProgress variant="determinate" value={progress.html} size={80} />
              <CircularProgress style={{zIndex:"-1",color:"#ffffff85",position: 'absolute'}} variant="determinate" value={100} size={80} />
              <span>HTML</span>
            </div>
            <div className="circ-caption" style={{position: 'relative'}}>
            <FontAwesomeIcon  style={{position: 'absolute', top: '30%', left: '45%'}} icon={faCss3} />
              <CircularProgress variant="determinate" value={progress.css} size={80} />
              <CircularProgress style={{zIndex:"-1",color:"#ffffff85",position: 'absolute'}} variant="determinate" value={100} size={80} />
              <span>CSS</span>
            </div>
            <div className="circ-caption" style={{position: 'relative'}}>
            <FontAwesomeIcon  style={{position: 'absolute', top: '30%', left: '43%'}} icon={faJs} />
              <CircularProgress variant="determinate" value={progress.js} size={80} />
              <CircularProgress style={{zIndex:"-1",color:"#ffffff85",position: 'absolute'}} variant="determinate" value={100} size={80} />
              <span>JS</span>
            </div>
            <div className="circ-caption" style={{position: 'relative'}}>
            <FontAwesomeIcon  style={{position: 'absolute', top: '28%', left: '45%'}} icon={faReact} />
              <CircularProgress variant="determinate" value={progress.rea} size={80} />
              <CircularProgress style={{zIndex:"-1",color:"#ffffff85",position: 'absolute'}} variant="determinate" value={100} size={80} />
              <span>React JS</span>
            </div>
          
        </div>
        <div className="footer">
          <i onClick={handlClickDown} class="fa fa-chevron-circle-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Skills;
