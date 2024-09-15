// import React from "react";
// import '../components/Resume.css'

// const Resume = () => {
//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         lineHeight: "1.6",
//         padding: "20px",
//       }}
//     >
//       <h1>Sangram SIngh</h1>
//       <p>
//         <strong>Frontend-developer</strong>
//       </p>

//       <section>
//         <h2>Contact Information</h2>
//         <p>
//           Email:{" "}
//           <a href="mailto:mrnitishkumar04@gmail.com">singhamvan@gmail.com</a>
//         </p>
//         {/* <p>Phone: +918250191891</p> */}
//         <p>
//           LinkedIn:{" "}
//           <a
//             href="https://www.linkedin.com/in/nitishkumar14"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             linkedin.com/in/nitishkumar14
//           </a>
//         </p>
//       </section>

//       <section>
//         <h2>Skill Summary</h2>
//         <ul>
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>JAVASCRIPT</li>
//           <li>React.js</li>
//           <li>Tailwind.CSS</li>
//           <li>Material UI</li>
//           <li>Git & Github</li>
//           <li>Node.js</li>
//           <li>Express</li>
//         </ul>
//       </section>

//       <section>
//         <h2>Work Experience</h2>
//         <h3>Frontend development</h3>
//         <p>
//           Provided rural and tribal women with accurate health information
//           during their transition from healthcare facilities. Conducted thorough
//           UX research and designed an intuitive, user-friendly interface for
//           seamless interaction.
//         </p>
//         <p>
//           Participated in an IIT Delhi-organized UI/UX hackathon focused on
//           creating a financial management solution for youth. Conducted in-depth
//           UX research and developed an interactive UI for the project.
//         </p>
//       </section>

//       <section>
//         <h2>Education</h2>
//         <p>
//           <strong>Ajay Kumar Garg Engineering College</strong> - B.Tech in CSE
//         </p>
//         {/* <p>
//           <strong></strong> - 12th (CBSE)
//         </p>
//         <p>
//           <strong>Kendriya Vidyalaya</strong> - 10th (CBSE)
//         </p> */}
//       </section>

//       <section>
//         <h2>About Me</h2>
//         <p>
//           Design has always struck me as a means of communication between the
//           outside world and the inner self!
//         </p>
//         <p>
//           Hello, as a Frontend developer, I'm pursuing a profession in
//           Frontend development with room for advancement. I have quite a proficiency in
//           communicative knowledge and team-oriented skills.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Resume;


// **************************************




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
                  Enthusiastic and motivated 3rd-year Computer Science student
                  pursuing a B.Tech degree. Possesses a solid foundation in
                  programming, algorithms, and data structures, with hands-on
                  experience in various coding projects and coursework. Eager to
                  apply academic knowledge to real-world challenges and gain
                  practical experience in software development, problem-solving,
                  and technology innovation. Strong communicator and team player
                  with a proactive attitude towards learning and growth in the
                  field of computer science.
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
