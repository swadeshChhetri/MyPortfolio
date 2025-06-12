import React, { useEffect, useRef, useState } from "react";
import "./videos.css";

const videos = [
  "https://www.youtube.com/embed/5vpEA3VidHc",
  "https://www.youtube.com/embed/EWGrS-EaEdY",
  "https://www.youtube.com/embed/cT_xIw6Rdhc",
  "https://www.youtube.com/embed/JfxAJf1x-oI",
  "https://www.youtube.com/embed/YKZWgeA4Qug",
];

export default function YouTubeSlider() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && containerRef.current) {
        const container = containerRef.current;
        const videoWidth = container.firstChild.offsetWidth + 16; // 16px gap

        if (
          container.scrollLeft + container.clientWidth + videoWidth >=
          container.scrollWidth
        ) {
          // Smooth reset to start
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll to next video
          container.scrollBy({ left: videoWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="container py-4">
       <h2 className="gf_h2 heading">
          <i className="bi bi-briefcase-fill"></i>
          Featured<span> Work</span>
        </h2>
      <div
        className="d-flex overflow-auto"
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          gap: "16px",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
      >
        {videos.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0"
            style={{ width: "calc(100% / 3)", minWidth: "320px" }}
          >
            <div className="ratio ratio-16x9 rounded shadow">
              <iframe
                src={src}
                title={`YouTube Video ${idx + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
