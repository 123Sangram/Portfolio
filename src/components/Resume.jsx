import React from "react";
import '../components/Resume.css'

const Resume = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        padding: "20px",
      }}
    >
      <h1>Sangram SIngh</h1>
      <p>
        <strong>Frontend-developer</strong>
      </p>

      <section>
        <h2>Contact Information</h2>
        <p>
          Email:{" "}
          <a href="mailto:mrnitishkumar04@gmail.com">singhamvan@gmail.com</a>
        </p>
        {/* <p>Phone: +918250191891</p> */}
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/nitishkumar14"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/nitishkumar14
          </a>
        </p>
      </section>

      <section>
        <h2>Skill Summary</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>React.js</li>
          <li>Tailwind.CSS</li>
          <li>Material UI</li>
          <li>Git & Github</li>
          <li>Node.js</li>
          <li>Express</li>
        </ul>
      </section>

      <section>
        <h2>Work Experience</h2>
        <h3>Frontend development</h3>
        <p>
          Provided rural and tribal women with accurate health information
          during their transition from healthcare facilities. Conducted thorough
          UX research and designed an intuitive, user-friendly interface for
          seamless interaction.
        </p>
        <p>
          Participated in an IIT Delhi-organized UI/UX hackathon focused on
          creating a financial management solution for youth. Conducted in-depth
          UX research and developed an interactive UI for the project.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <p>
          <strong>Ajay Kumar Garg Engineering College</strong> - B.Tech in CSE
        </p>
        {/* <p>
          <strong></strong> - 12th (CBSE)
        </p>
        <p>
          <strong>Kendriya Vidyalaya</strong> - 10th (CBSE)
        </p> */}
      </section>

      <section>
        <h2>About Me</h2>
        <p>
          Design has always struck me as a means of communication between the
          outside world and the inner self!
        </p>
        <p>
          Hello, as a Frontend developer, I'm pursuing a profession in
          Frontend development with room for advancement. I have quite a proficiency in
          communicative knowledge and team-oriented skills.
        </p>
      </section>
    </div>
  );
};

export default Resume;
