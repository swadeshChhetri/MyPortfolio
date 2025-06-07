import React from "react";
import "./about.css";

const AboutSection = () => {
  return (
    <>
      <section style={{ padding: "5px" }} id="about">
        <h2 className="gf_h2 heading">
          <i className="bi bi-person-fill-check"></i>
          ABOUT<span>Me</span>
        </h2>
        <div className="about-container">
          <div
            className="img-container"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src="img/profile.JPG" className="img-cont mt-" alt="" />
          </div>
          <div
            className="about-me"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div class="row">
              <div class="col-lg-10">
                <h3 class="fw-bold mb-2">Hi, I'm Swadesh</h3>
                <h5 class="text-secondary mb-4">
                  Full-Stack Developer · Bengaluru, India
                </h5>

                <p>
                  I am a{" "}
                  <strong>
                    passionate and hardworking Full-Stack Web Application
                    Developer
                  </strong>{" "}
                  with hands-on experience in building real-world web solutions.
                </p>

                <p>
                  I specialize in creating responsive, user-friendly
                  applications using technologies like 
                  <span class="text-primary fw-semibold">
                     HTML, CSS, JavaScript, Laravel, Next.js, TypeScript,
                  </span>
                  and <span class="text-primary fw-semibold">Tailwind CSS</span>
                  .
                </p>

                <p>
                  I have successfully developed and deployed a
                  <strong> Company Finance Management Portal</strong>, showcasing
                  my ability to manage end-to-end project development and
                  deliver impactful results.
                </p>

                <p>
                  I also gained practical experience through a Full-Stack
                  Development internship at a Tamil Nadu-based company.
                </p>

                <p>
                  Currently, I’m working at a Bengaluru-based startup,
                  contributing to both front-end and back-end development.
                </p>

                <p>
                  I thrive in collaborative environments and enjoy turning
                  creative ideas into efficient, scalable solutions.
                </p>

                <p>
                  My goal is to build meaningful applications that solve
                  real-world problems and provide value to users and businesses
                  alike.
                </p>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1awdoxfXJjEa5D5V58dKIQInDl4gP6PFK/view?usp=sharing"
              download
              className="btnn"
            >
              <i className="bi bi-arrow-down-circle fs-3"></i>
              <span className="fs-3 text-white">Resume</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
