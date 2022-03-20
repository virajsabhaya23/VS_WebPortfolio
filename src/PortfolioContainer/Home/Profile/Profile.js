/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typical from "react-typical";
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
                <a href="https://www.linkedin.com/in/vsabhaya23/">
                <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="https://github.com/virajsabhaya23">
                <i className="fa fa-github-square"></i>
                </a>
                <a href="https://twitter.com/sabhaya_viraj">
                <i className="fa fa-twitter"></i>
                </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Namaste🙏, I'm{" "}
              <span className="highlighted-text">Viraj Sabhaya</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Junior at UTA 💻",
                    1000,
                    "an Ethusiastic Dev",
                    1000,
                    "Full Stack Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with React Native.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn">
                {" "}
                Hire Me{" "}
            </button>
            <a href="VS0317.pdf" download='VirajSabhayaResume.pdf'>   
                <button className="btn highlighted-btn">Get Resume</button> 
            </a>
          </div>
        </div>

        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}
