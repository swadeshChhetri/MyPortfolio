import React from "react";
import "./certificate.css"; // Ensure your CSS file is correctly linked

const Certification = () => {
  return (
    <section id="certification" className="container">
     <h2 className="gf_h2 heading">
     <i className="bi bi-award-fill"></i>Certifi<span>cation</span>
        </h2>

      <div
        id="videoCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Slide 1 - Large Videos with Custom CSS */}
          <div className="carousel-item active">
            <div className="video-flex-row">
              <div className="video-flex-item">
                {/* Using custom-ratio for consistent aspect ratio handling */}
                <div className="custom-ratio">
                <img src="img/1HC.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <div className="video-flex-item">
                <div className="custom-ratio">
                <img src="img/2CC.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <div className="video-flex-item">
                <div className="custom-ratio">
                <img src="img/3JC.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 - Uses Bootstrap's row/col but applies custom-ratio for consistent sizing */}
          <div className="carousel-item">
            <div className="row"> {/* Bootstrap row */}
              <div className="col-md-4 d-flex justify-content-center"> {/* Bootstrap column, d-flex and justify-content-center for centering if needed */}
                <div className="custom-ratio">
                <img src="img/4JCC.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <div className="custom-ratio">
                <img src="img/TC.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <div className="custom-ratio">
                <img src="img/Intern.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 -  */}
          <div className="carousel-item">
            <div className="row"> {/* Bootstrap row */}
              <div className="col-md-4 d-flex justify-content-center">
                <div className="custom-ratio">
                <img src="img/InternShipComplition.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Certification;
