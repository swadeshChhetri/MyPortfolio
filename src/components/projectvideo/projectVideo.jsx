import React from "react";
import "./projectVideo.css";

const ProjectVideo = () => {
  return (
    <section className="container my-5">
      <h2 className="gf_h2 heading text-center mb-4">
        <i className="bi bi-camera-video-fill me-2"></i> Promotion
        <span> Video</span>
      </h2>

      <div className="single-video-wrapper">
        <div className="custom-ratio">
          <iframe
            src="https://www.youtube.com/embed/yCzcsb-h6iQ"
            title="Promotion Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ProjectVideo;
