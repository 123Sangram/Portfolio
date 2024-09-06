import React from "react";

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div>
      <div className="tab-titles flex mt-5 mb-10">
        <p
          className={`tab-links mr-12 cursor-pointer ${
            activeTab === "skills" && "active-link"
          }`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </p>
        <p
          className={`tab-links mr-12 cursor-pointer ${
            activeTab === "experience" && "active-link"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </p>
        <p
          className={`tab-links cursor-pointer ${
            activeTab === "education" && "active-link"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </p>
      </div>
      {activeTab === "skills" && (
        <div className="tab-contents active-tab">
          <ul>
            <li>
              <span className="text-pink-600">Frontend web-Development</span>
              <br />
              HTML, CSS, and JavaScript
              <br />
              Frontend Frameworks (React) and Libraries
              <br />
              State Management
              <br />
              API Integration
            </li>
            <li>
              <span className="text-pink-600">Backend Development</span>
              <br />
              Node.js
              <br />
              Express.js
              <br />
            </li>
            <li>
              <span className="text-pink-600">UI/UX</span>
              <br />
              Designing Web
            </li>
          </ul>
        </div>
      )}
      {activeTab === "experience" && (
        <div className="tab-contents active-tab">
          <ul>
            <li>
              <span className="text-pink-600">2024 - current</span>
              <br />
              UI/UX Design Training 
            </li>
        
            <li>
              <span className="text-pink-600">2023 - 2024 (current)</span>
              <br />
              Working in React
            </li>
          </ul>
        </div>
      )}
      {activeTab === "education" && (
        <div className="tab-contents active-tab">
          <ul>
            <li>
              <span className="text-pink-600">UI/UX</span>
              <br />
              Designing Web
            </li>
            <li>
              <span className="text-pink-600">Frontend web-Development</span>
              <br />
              HTML, CSS, and JavaScript
              <br />
              Frontend Frameworks and Libraries
              <br />
              State Management
              <br />
              API Integration
            </li>
         
          </ul>
        </div>
      )}
    </div>
  );
}

export default Tabs;

