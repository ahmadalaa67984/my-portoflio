import React, { useEffect, useRef } from "react";
import "./overView.css";
import lottie from 'lottie-web';
import lordiconJson from '../../system-solid-199-attribution';
import lordiconJsonCopy from '../../system-solid-199-attribution-copy.json';
import lordiconJsonMiddle from '../../system-solid-34-code';
const OverView = () => {


 const containerRef = useRef(null);
 const containerRefCopy = useRef(null);
 const containerRefMiddle = useRef(null);
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      animationData: lordiconJson,
      renderer: 'svg', // or 'canvas'
      loop: true,
      autoplay: true,
    });

    return () => {
      animation.destroy(); // Clean up animation when component unmounts
    };
  }, []);
  useEffect(() => {
    const animationCopy = lottie.loadAnimation({
      container: containerRefCopy.current,
      animationData: lordiconJsonCopy,
      renderer: 'svg', // or 'canvas'
      loop: true,
      autoplay: true,
    });

    return () => {
      animationCopy.destroy(); // Clean up animation when component unmounts
    };
  }, []);
  useEffect(() => {
    const animationMiddle = lottie.loadAnimation({
      container: containerRefMiddle.current,
      animationData: lordiconJsonMiddle,
      renderer: 'svg', // or 'canvas'
      loop: true,
      autoplay: true,
    });

    return () => {
      animationMiddle.destroy(); // Clean up animation when component unmounts
    };
  }, []);

  const handlClickDown=()=>{
    const scrollValue = (200 / 100) * window.innerHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: scrollValue,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  }
  const handlClickTop=()=>{
    const scrollValue = (0 / 100) * window.innerHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: scrollValue,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  }
  return (
    <div className="background">
      <div className="overview-container">
            <div className="header">
          <div className="title">Services</div>
          <div>
            <i  onClick={handlClickTop} class="fa fa-chevron-circle-up" aria-hidden="true"></i>
            </div>
            <div className="title">1</div>
            </div>
        <div className="center">
            <div className="item">
              <div style={{color:"white" ,width:"150px",margin:"auto"}} ref={containerRefCopy} />
              <span>Easy to Use   
                Web</span>
            </div>
            <div className="item">
            <div style={{color:"white" ,width:"150px",margin:"auto"}} ref={containerRefMiddle} />
            <span>Clean Code</span>
            </div>
            <div className="item">
            <div style={{color:"white" ,width:"150px",margin:"auto"}} ref={containerRef} />
            <span>high performance
            websites
            </span>
            </div>
        </div>
        <div className="footer">
          <i onClick={handlClickDown} class="fa fa-chevron-circle-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default OverView;
