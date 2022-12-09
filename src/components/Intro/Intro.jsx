import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <a style={{textDecoration:'none'}} href="https://mustafa-portfolio2.netlify.app/">Mustafa Rahman</a>
          
          <span>
            Full stack Developer with high level of experience in web designing
            and development, producting the Quality work specialized React.Js, Node.Js, Expres.Js, Next.js & MongoDB etc.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a
            href="https://www.instagram.com/developer_mustafa_rahman/"
            target="blank"
          >
            <img src={Instagram} alt="" />
          </a>

          <a href="https://github.com/developer-mustafa" target="blank">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/developer-mustafa/" target="blank">
          <img src={LinkedIn} alt="" />
          </a>


         


        </div>
      </div>
      {/* right image side */}

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
       <a href="https://mustafa-portfolio3.netlify.app/" target="blank"> <img className="prof" style={{width:"55%", boxShadow:'10px 10px 15px white',borderRadius:'50%' }} src={boy} alt="" /></a>
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Full stack" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
