import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
      
        <span><a style={{textDecoration:'none',color:'white',fontSize:'2rem'}} href="tel:+8801840643946">CALL Now</a></span>
        <span><a style={{textDecoration:'none',color:'white',fontSize:'2rem'}} href="mailto:mustafarahman792@gmail.com">mustafarahman792@gmail.com</a></span>
        
        <div className="f-icons">
          <a href="https://www.instagram.com/developer_mustafa_rahman/" target="blank"><Insta color="white" size={"3rem"} /></a>
          
          <a href="https://www.facebook.com/Mustafa24hours" target="blank"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/developer-mustafa" target="blank"><Gitub color="white" size={"3rem"} /></a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
