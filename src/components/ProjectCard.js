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
            <li className={"tag__item play " + color}>
              <a href="#">
                <img width="24px" height="28px" src="./icons/play.png" />
              </a>
            </li>
            <li className={"tag__item play " + color}>
              <a href="#">
                <img width="22px" src="./icons/github.png" />
              </a>
            </li>
            <li className={"tag__item play " + color}>
              <a href="#">
                <img width="24px" height="28px" src="./icons/link.png" />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </Holder>
  );
}

const Holder = styled.div`
  margin-top: 55px;
  margin-right: 10px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProjectCard;
