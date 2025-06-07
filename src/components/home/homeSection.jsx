import React, { useEffect, useRef } from "react";
import "./home.css";
import AnimatedBackground from "../../AnimatedBackground";
import Typed from "typed.js";
import { Link } from "react-scroll";

const HomeSection = () => {
  const typedElement = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Full-Stack Web Developer",
        "Web App Creator",
        "Responsive Web Designer",
      ],
      typeSpeed: 40,
      backSpeed: 15,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section className="home" id="home">
        <AnimatedBackground>
          <div className="home-content">
            <img
              src="img/Profile.gif"
              alt="profile image"
              className="home-img"
            />
            <h3>Hi, I'M</h3>

            <h1>Swadesh Chhetri</h1>

            <div className="image-container">
              <h3>
                And I'm a <span ref={typedElement}></span>
              </h3>
            </div>
            <div className="social-media">
              <a href="https://www.facebook.com/swadesh.chhetri.1/">
                <i className="bi bi-facebook fs-1"></i>
              </a>
              <a href="https://www.instagram.com/swadesh.85/">
                <i className="bi bi-instagram fs-1"></i>
              </a>
              <a href="https://www.linkedin.com/in/swadeshchhetri">
                <i className="bi bi-linkedin color fs-1"></i>
              </a>
              <a href="https://github.com/swadeshChhetri">
                <i className="bi bi-github fs-1"></i>
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/1awdoxfXJjEa5D5V58dKIQInDl4gP6PFK/view?usp=sharing"
              download
              className="btnn btnlayout"
            >
              <i className="bi bi-arrow-down-circle fs-3"></i>
              <span className="fs-3 text-white">Resume</span>
            </a>
            <Link to="contact" className="btnn" offset={-30} duration={1500}>
              <i className="bi bi-briefcase fs-3"></i>{" "}
              <span className="fs-3 text-white">Hire Me</span>
            </Link>
          </div>
        </AnimatedBackground>
      </section>
    </>
  );
};

export default HomeSection;
