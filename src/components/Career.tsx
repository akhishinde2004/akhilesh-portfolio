import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Science & Mathematics</h4>
                <h5>G.V.I.S.H, Amravati</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed higher secondary with focus on Science & Mathematics, building the foundation for engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>G H Raisoni College Of Engineering and Management, Nagpur</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              CGPA: 7.83 / 10.0 · No Active Backlogs. Four years of core CS — algorithms, systems, databases, and software engineering. Published research at IEEE CNC 2025.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Development Intern</h4>
                <h5>AB Infotech Solutions Pvt. Ltd., Pune</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built and optimized 15+ RESTful APIs using Java and Node.js, reducing response time by 20%. Engineered responsive React & Angular UIs, cutting load times by 25%. Deployed microservices for 5,000+ users at 99.9% uptime. Optimized PostgreSQL & MongoDB schemas to support 30% data growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
