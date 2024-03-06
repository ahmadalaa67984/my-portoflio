import React from 'react'
import "./signture.css"
function Signture() {

    const handlClickUp=()=>{
        const scrollValue = (400 / 100) * window.innerHeight;
    
        // Scroll to the calculated position
        window.scrollTo({
          top: scrollValue,
          behavior: 'smooth', // Add smooth scrolling effect
        });
    }
  return (
    <div className="background">
    <div className="Signture-container">
    <div className="header">
          <div className="title">ThankYou</div>
          <div>
            <i  onClick={handlClickUp} class="fa fa-chevron-circle-up" aria-hidden="true"></i>
            </div>
            <div className="title">5</div>
            </div>
      <div className="center">
        <div>
        Thank you <br/><span style={{fontSize:"20"}}>Ahmad Alaa</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signture