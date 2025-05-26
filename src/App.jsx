import { useEffect, useState } from "react";
import AboutSection from "./components/about/aboutSection";
import ContactSection from "./components/contect/contactSection";
import HeaderSection from "./components/header/headerSection";
import HomeSection from "./components/home/homeSection";
import ProjectSection from "./components/work/WorkSection";
import ExpertiseSection from "./components/expertise/expertiseSection";
import Certification from "./components/certificate/certificateSection";
import Footer from "./components/footer/footer";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [isDaylight, setIsDaylight] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    Aos.init();
  }, []);

  const toggleTheme = () => {
    setIsDaylight(!isDaylight);
  };

  return (
    <div
      className={isDaylight ? "bg-light text-dark" : "bg-dark"}
      style={{ minHeight: "100vh" }}
    >
      <HeaderSection toggleTheme={toggleTheme} isDaylight={isDaylight} />
      <HomeSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectSection setActiveVideo={setActiveVideo} />
      <Certification />
      <ContactSection />
      <Footer />
      {activeVideo === 1 && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="video-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setActiveVideo(null)}>
              &times;
            </span>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/s56Bqpb55o8"
                title="FinancePortal Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      {activeVideo === 2 && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="video-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setActiveVideo(null)}>
              &times;
            </span>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UcahQxfk3gY"
                title="Konnektglobe Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
