import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "SoyVision",
    category: "AI / Computer Vision",
    description: "AI-powered web app detecting Yellow Mosaic Virus in soyabean leaves with severity grading (0–3 scale). Trained on 1,147 real field images achieving 98% accuracy with results in under 3 seconds.",
    tools: "Python, Flask, PyTorch, YOLOv8, CNN, SQLite",
    image: "/images/SoyVision_cropped.png",
    githubUrl: "https://github.com/akhishinde2004/SoyVision",
  },
  {
    title: "HireReady",
    category: "AI Resume Screener",
    description: "NLP-driven resume screening system that matches candidates to job descriptions using semantic keyword analysis. Features real-time recruiter dashboard with scoring and ranking.",
    tools: "Python, FastAPI, React, spaCy, NLP",
    image: "/images/hireready.png",
    liveUrl: "https://hireready-three-lemon.vercel.app",
    githubUrl: "https://github.com/akhishinde2004/hireready",
  },
  {
    title: "CampusCart",
    category: "College Marketplace",
    description: "Full-stack MERN marketplace for college students to buy and sell textbooks, electronics, and dorm items. Features real-time chat, JWT auth, and Cloudinary media handling.",
    tools: "React, Node.js, Express, MongoDB, Cloudinary, JWT",
    image: "/images/campuscart.png",
    liveUrl: "https://campuscart-rouge.vercel.app",
    githubUrl: "https://github.com/akhishinde2004/campuscart",
  },
  {
    title: "DevPulse",
    category: "Developer Activity Dashboard",
    description: "Real-time GitHub activity tracker that visualizes commits, PRs, and repository stats with interactive charts. Built for developers to monitor and showcase their coding activity.",
    tools: "React, Node.js, MongoDB, GitHub API",
    image: "/images/devpulse.png",
    liveUrl: "https://dev-pulse-pied-one.vercel.app",
    githubUrl: "https://github.com/akhishinde2004/DevPulse",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description" style={{ fontSize: "14px", color: "#adacac", margin: "10px 0", lineHeight: "1.5" }}>
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">TECH STACK</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-links">
                          {/* {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="carousel-link" data-cursor="pointer">
                              <FiExternalLink /> Live Demo
                            </a>
                          )} */}
                          {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="carousel-link" data-cursor="pointer">
                              <FiGithub /> GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
