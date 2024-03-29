import React, { useState } from 'react'
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faDownLong, faDownload } from '@fortawesome/free-solid-svg-icons';
function Contact() {
    const downloadPDF = () => {
        // Replace 'your_pdf_file.pdf' with the path or URL to your PDF file
        const pdfUrl = 'https://drive.google.com/file/d/1B_X8pp4hmUYbg7knDLFgdWxzFW9mFsTR/view?usp=sharing';
    
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'downloadable_file.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can add logic here to send the form data to a server
    
        console.log('Form submitted:', formData);
      };
    
      const handlClickDown=()=>{
        const scrollValue = (500 / 100) * window.innerHeight;
    
        // Scroll to the calculated position
        window.scrollTo({
          top: scrollValue,
          behavior: 'smooth', // Add smooth scrolling effect
        });
      }
      const handlClickTop=()=>{
        const scrollValue = (300 / 100) * window.innerHeight;
    
        // Scroll to the calculated position
        window.scrollTo({
          top: scrollValue,
          behavior: 'smooth', // Add smooth scrolling effect
        });
    }
  return (
    <div className="background">
    <div className="contact-container">
    <div className="header">
          <div className="title">Contact</div>
          <div>
            <i onClick={handlClickTop} class="fa fa-chevron-circle-up" aria-hidden="true"></i>
          </div>
          <div className="title">4</div>
        </div>
      <div className="center">
        <div>Download my  Resume<br/>
        <FontAwesomeIcon 
        className='download-cv' style={{marginLeft:"",cursor:"pointer"}} 
        icon={faDownload}
        onClick={downloadPDF} />
        </div>
        <div className="qoute">
        <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />

      <label>
        Message:<br/>
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
        </div>
      </div>
      <div className="footer">
        <i onClick={handlClickDown} class="fa fa-chevron-circle-down" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  )
}

export default Contact