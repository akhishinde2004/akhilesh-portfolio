import { GitHubCalendar } from "react-github-calendar";
import "./styles/GithubActivity.css";

const GithubActivity = () => {
  // Define a custom theme to match the portfolio's dark, modern aesthetic
  // Empty blocks: dark subtle color. Active blocks: varying shades of cyan/teal.
  const customTheme = {
    dark: [
      "#161b22", // Base empty block color (darker to blend in)
      "rgba(94, 234, 212, 0.2)",
      "rgba(94, 234, 212, 0.4)",
      "rgba(94, 234, 212, 0.7)",
      "rgba(94, 234, 212, 1)", // Highest activity (portfolio's accent color)
    ],
  };

  return (
    <div className="github-section" id="activity">
      <div className="github-container section-container">
        <h2>
          MY <span>ACTIVITY</span>
        </h2>
        <div className="calendar-wrapper" data-cursor="pointer">
          <GitHubCalendar
            username="akhishinde2004"
            blockSize={15}
            blockMargin={5}
            colorScheme="dark"
            theme={customTheme}
            fontSize={14}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubActivity;
