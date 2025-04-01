


// ******************************************


import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Resume.css";

const Resume = () => {
  const resumeRef = useRef();

  const downloadPDF = () => {
    const input = resumeRef.current;
    html2canvas(input, { scale: 1 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div>
      <div ref={resumeRef} className="resume-container">
        <div className="header">
          <h1>Shreyansh Yadav</h1>
          <div className="fflex">
            <div className="contact">
              <p>Ghaziabad, India, 201015</p>
              <p>shreyanshy06@gmail.com</p>
            </div>
            <div>
              <p>Mobile no. : +91 8726909122</p>
              <a href="http://www.linkedin.com/in/shreyansh-yadav-2b9851246">
                http://www.linkedin.com/in/shreyansh-yadav-2b9851246
              </a>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="left-column">
            <div className="section">
              <div>
                <p>
                  Here’s a refined and polished version of your text with a
                  stronger and more cohesive flow: Driven Frontend Developer I
                  am a passionate 3rd-year Computer Science student pursuing a
                  B.Tech degree, with a strong focus on creating intuitive,
                  responsive, and visually captivating user interfaces. My
                  expertise in frontend technologies such as HTML, CSS,
                  JavaScript, and React.js allows me to design seamless digital
                  experiences that prioritize both functionality and aesthetics.
                  Through various hands-on projects, I have honed my technical
                  skills while blending creativity to solve real-world
                  challenges.
                </p>
              </div>
              <h2>Education</h2>
              <div className="education-item">
                <p>
                  <span className="edu"> High School:</span>
                  <span className="school">
                    Umanath Singh Higher Secondery School, Jaunpur
                  </span>
                </p>
                <p>
                  <span>2019</span>
                  <span className="school">Percentage: 94.2%</span>
                </p>
              </div>
              <hr></hr>
              <div className="education-item">
                <p>
                  <span className="edu">Intermediate:</span>
                  <span className="school">
                    Umanath Singh Higher Secondery School, Jaunpur
                  </span>
                </p>
                <p>
                  <span>2021</span>
                  <span className="school">Percentage: 94.2%</span>
                </p>
              </div>
              <hr></hr>
              <div className="education-item">
                <p>
                  <span className="edu"> B.tech:</span>
                  <span className="school">
                    Ajay kumar garg Engineering college, Ghaziabad
                  </span>
                </p>
                <p>
                  <span>2022 - 2026</span>
                  <span className="school">Percentage: 82.7%</span>
                </p>
              </div>
            </div>
            <div className="section">
              <h2>Professional Experience</h2>
              <p>
                Seeking a beginner role to enhance and explore my technical
                knowledge gained at AKTU University in the last three years. I
                hold a B.Tech degree from AJAY KUMAR GARG ENGINEERING COLLEGE,
                GHAZIABAD and won the quiz challenge held at the campus.
              </p>
            </div>
            <div>
              <h2>Languages</h2>
              <ul>
                <li className="gulabi_aakhe">English</li>

                <li className="gulabi_aakhe">Hindi</li>
              </ul>
            </div>
            <div>
              <h2>Work</h2>
              <ul>
                <a href="https://lucent-stardust-25f149.netlify.app/">
                  <li className="gulabi_aakhe">
                    Developed a dynamic movie website using React, Tailwind,
                    allowing users to browse and search for movies with
                    real-time data.{" "}
                  </li>{" "}
                  https://lucent-stardust-25f149.netlify.app
                </a>

                <a href="https://coruscating-brigadeiros-e8d823.netlify.app/">
                  <li className="gulabi_aakhe">
                    Created a responsive social media website using HTML, CSS,
                    and JavaScript, enabling users to create profiles, post
                    updates, and interact with other users.{" "}
                  </li>{" "}
                  https://coruscating-brigadeiros-e8d823.netlify.app
                </a>
              </ul>
            </div>
          </div>

          <div className="right-column">
            <div className="section">
              <h2>Skills</h2>
              <ul>
                <li className="bhara_bhara">
                  <span className="">
                    <span className="weight_badhana">
                      {" "}
                      Programming languages:
                    </span>
                    <span className="gulabi">JAVA, Python</span>
                  </span>
                </li>
                <li className="bhara_bhara">
                  <span>
                    <span className="weight_badhana"> Web technology: </span>
                    <span className="gulabi">HTML5, CSS, Javascript</span>
                  </span>
                </li>

                <li className="bhara_bhara">
                  <span>
                    <span className="weight_badhana"> Database: </span>
                    <span className="gulabi">SQL, MongoDB</span>
                  </span>
                </li>
                <li className="bhara_bhara">
                  <span>
                    <span className="weight_badhana"> Data Analytic tool </span>
                    <span className="gulabi">BI, Tableau</span>
                  </span>
                </li>
                <li className="bhara_bhara">
                  <span>
                    <span className="weight_badhana"> Data manupulation </span>
                    <span className="gulabi">Pandas</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Add the rest of your content */}
      </div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default Resume;
