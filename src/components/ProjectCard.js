import React from "react";
import "../App.css";

function ProjectCard({ color, title, desc, github, video, imgPath, tags }) {
  return (
    <div className="projcard-container">
      <div className={"projcard projcard-" + color}>
        <div className="projcard-innerbox">
          <img
            className="projcard-img"
            src="https://picsum.photos/800/600?image=1041"
          />
          <div className="projcard-textbox">
            <div className="projcard-title"></div>
            <div className="projcard-subtitle">
              This explains the card in more detail
            </div>
            <div className="projcard-bar"></div>
            <div className="projcard-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="projcard-tagbox">
              <span className="projcard-tag">HTML</span>
              <span className="projcard-tag">CSS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
