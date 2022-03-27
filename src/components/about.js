import React from "react"
import Fade from "react-reveal/Fade"
import data from "../MyInfo"
import image from "../images/profile-image-2.jpg"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>{data.aboutParaOne}</p>
            <p>{data.aboutParaTwo}</p>
            <p>{data.aboutParaThree}</p>
            <p>{data.aboutParaFour}</p>
          </div>
          <div className="image-wrapper">
            <img src={image} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
