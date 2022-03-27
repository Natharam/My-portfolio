import React from "react"
import data from "../MyInfo"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
