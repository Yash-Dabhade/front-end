import React from "react";
import styled from "styled-components";
import "../App.css";
import "../styles/ProjectCard.scss";

function ProjectCard({ color, title, desc, github, video, imgPath, tags }) {
  return (
    <Holder>
      <article className={"postcard dark " + color}>
        <a className="postcard__img_link" href="#">
          <img
            className="postcard__img"
            src="https://picsum.photos/1000/1000"
            alt="Image Title"
          />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title blue">
            <a href="#">{title}</a>
          </h1>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">{desc}</div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <i className="fas fa-tag mr-2"></i>
              {tags}
            </li>
            <li className={"tag__item play " + color}>
              <a href="#">
                <i className="fas fa-play mr-2"></i>Play Demo
              </a>
            </li>
          </ul>
        </div>
      </article>
    </Holder>
  );
}

const Holder = styled.div`
  margin-top: 150px;
  margin-right: 120px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProjectCard;
