import React from "react";
import { useState } from "react";
import "./work.css";

const ProjectSection = ({ setActiveVideo }) => {
  return (
    <>
      <section className="project red" id="project">
        <h2 className="gf_h2 heading">
          <i className="bi bi-briefcase-fill"></i>
          Featured<span> Work</span>
        </h2>
        <div className="project-container">
          <div
            className="project-box"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img src="img/airesume.png" alt="" />
            <div className="project-layer">
              <h4>AI Resume Shortlisting Bot</h4>
              <p>NextJS - NestJS - Google Gemini</p>
              <a
                href="https://resume-analyzer-app.vercel.app/"
                className="text-white bi bi-box-arrow-up-right"
                style={{ fontSize: "18px", textDecoration: "none" }}
              ></a>
            </div>
          </div>

          <div
            className="project-box"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img src="img/crud.png" alt="" />
            <div className="project-layer">
              <h4>UserFlow Manager</h4>
              <p>React - NodeJS - ExpressJS - MongoDB</p>
              <div className="project-links">
                <a
                  href="https://user-crud-sooty.vercel.app/"
                  className="text-white bi bi-box-arrow-up-right"
                  style={{ fontSize: "18px", textDecoration: "none" }}
                ></a>

                {/* GitHub Repo */}
                <a
                  href="https://github.com/swadeshChhetri/User_Crud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://github.com/swadeshChhetri/User_Crud_Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-box"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img src="img/myblog.png" alt="" />
            <div className="project-layer">
              <h4>My BlogApp</h4>
              <p>React - Typescript - Tailwind - Laravel</p>
              <div className="project-links">
                <a
                  href="http://swadeshassignments3.s3-website.ap-south-1.amazonaws.com/"
                  className="text-white bi bi-box-arrow-up-right"
                  style={{ fontSize: "18px", textDecoration: "none" }}
                ></a>

                {/* GitHub Repo */}
                <a
                  href="https://github.com/swadeshChhetri/User_Crud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://github.com/swadeshChhetri/User_Crud_Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>

           <div
            className="project-box"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img src="img/konnektglobe.png" alt="" />
            <div className="project-layer">
              <h4>KonnektGlobe</h4>
              <p>NextJS - TailwindCSS - Laravel - MySQL</p>
              <div className="project-links">
                {/* GitHub Repo */}
                <a
                  href="https://github.com/swadeshChhetri/konnektglobe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://github.com/swadeshChhetri/konnektglob_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  // href="#"
                  onClick={() => setActiveVideo(2)}
                  title="Watch Demo"
                  className="text-white text-xl"
                >
                  <i className="bi bi-play-circle-fill"></i>
                </a>
                <a
                  href="http://65.1.107.230:3000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bi bi-box-arrow-up-right"
                  style={{ fontSize: "18px", textDecoration: "none" }}
                  title="GitHub Repository"
                >
                </a>
              </div>
            </div>
          </div>


          <div
            className="project-box"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img src="img/QuickCart.png" alt=" " />
            <div className="project-layer">
              <h4>QuickCart</h4>
              <p>Html - CSS - JavaScript</p>
              <div className="project-links">
                <a
                  href="https://swadeshchhetri.github.io/QuickCart/"
                  className="text-white bi bi-box-arrow-up-right"
                  style={{ fontSize: "18px", textDecoration: "none" }}
                ></a>

                {/* GitHub Repo */}
                <a
                  href="https://github.com/swadeshChhetri/QuickCart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-box"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img src="img/finance.png" alt=" " />
            <div className="project-layer">
              <h4>Finance-Management-Portal</h4>
              <p>Html - TailwindCSS - JavaScript </p>
              <p style={{ textAlign: "center" }}>PHP - MySQL</p>
              <div className="project-links">
                <a
                  href="https://indtecexpo.vercel.app/"
                  className="text-white bi bi-box-arrow-up-right"
                  style={{ fontSize: "18px", textDecoration: "none" }}
                ></a>

                {/* GitHub Repo */}
                <a
                  href="https://github.com/swadeshChhetri/financePortal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  // href="#"
                  onClick={() => setActiveVideo(1)}
                  title="Watch Demo"
                  className="text-white text-xl"
                >
                  <i className="bi bi-play-circle-fill"></i>
                </a>
              </div>
            </div>
          </div>

          {/* New Projects  */}
         
          <div
            className="project-box"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img src="img/expo.png" alt=" " />
            <div className="project-layer ">
              <h4>INDTECEXPO</h4>
              <p>Nextjs - TailwindCSS - Laravel - MySQL</p>

              <div className="project-links">
                <a
                  href="https://indtecexpo.vercel.app/"
                  className="text-white bi bi-box-arrow-up-right"
                  style={{ fontSize: "18px", textDecoration: "none" }}
                ></a>

                {/* GitHub Repo */}
                <a
                  href="https://github.com/swadeshChhetri/indtecexpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-box"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img src="img/E-BookStore.png" alt=" " />
            <div className="project-layer">
              <h4>E-Bookstore </h4>
              <p>React - Redux - Bootstrap</p>
              <div className="project-links">
                <a
                  href="https://swadeshchhetri.github.io/E_BookStore/"
                  className="text-white bi bi-box-arrow-up-right"
                  style={{ fontSize: "18px", textDecoration: "none" }}
                ></a>

                {/* GitHub Repo */}
                <a
                  href="https://github.com/swadeshChhetri/E_BookStore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-box"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img src="img/jaguar.png" alt=" " />
            <div className="project-layer">
              <h4>Jaguar Media & Entertainment </h4>
              <p>Next.js - TailwindCSS</p>
              <div className="project-links">
                <a
                  href="https://jaguarmedia.vercel.app/"
                  className="text-white bi bi-box-arrow-up-right"
                  style={{ fontSize: "18px", textDecoration: "none" }}
                ></a>

                {/* GitHub Repo */}
                <a
                  href="https://github.com/swadeshChhetri/jaguarmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-box"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src="img/todo.png" alt=" " />
            <div className="project-layer">
              <h4>ToDo-list App</h4>
              <p>Html - CSS - JavaScript</p>
              <div className="project-links">
                <a
                  href="https://swadeshchhetri.github.io/Todo-list/"
                  className="text-white bi bi-box-arrow-up-right"
                  style={{ fontSize: "18px", textDecoration: "none" }}
                ></a>

                {/* GitHub Repo */}
                <a
                  href="https://github.com/swadeshChhetri/Todo-list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-box"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src="img/Calculator.png" alt=" " />
            <div className="project-layer">
              <h4>Calculator</h4>
              <p>Html - CSS - JavaScript</p>
              <div className="project-links">
                <a
                  href="https://swadeshchhetri.github.io/Calculator/"
                  className="text-white bi bi-box-arrow-up-right"
                  style={{ fontSize: "18px", textDecoration: "none" }}
                ></a>

                {/* GitHub Repo */}
                <a
                  href="https://github.com/swadeshChhetri/Calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-box"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src="img/connect4.png" alt=" " />
            <div className="project-layer">
              <h4>Connect4</h4>
              <p>Html - CSS - JavaScript</p>
              <div className="project-links">
                <a
                  href="https://swadeshchhetri.github.io/Connect4/"
                  className="text-white bi bi-box-arrow-up-right"
                  style={{ fontSize: "18px", textDecoration: "none" }}
                ></a>

                {/* GitHub Repo */}
                <a
                  href="https://github.com/swadeshChhetri/Connect4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition"
                  title="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
