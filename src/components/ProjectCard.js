import React from "react";
import styled from "styled-components";
import "../App.css";
import "../styles/ProjectCard.scss";

function ProjectCard({ color, title, desc, github, video, imgPath, url }) {
  return (
    <Holder>
      <article className={"postcard dark " + color}>
        <a className="postcard__img_link" href="#">
          <img className="postcard__img" src={imgPath} alt="Image Title" />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title blue">
            <a href="#">{title}</a>
          </h1>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">{desc}</div>
          <ul className="postcard__tagbox">
            {video && (
              <a
                style={{ cursor: "pointer" }}
                target="_blank"
                href={video}
                className={"tag__item play " + color}
              >
                <img width="24px" height="28px" src="./icons/play.png" />
              </a>
            )}
            {github && (
              <a
                className={"tag__item play " + color}
                target="_blank"
                style={{ cursor: "pointer" }}
                href={github}
              >
                <img width="22px" src="./icons/github.png" />
              </a>
            )}
            {url && (
              <a
                target="_blank"
                href={url}
                style={{ cursor: "pointer" }}
                className={"tag__item play " + color}
              >
                <img width="24px" height="28px" src="./icons/link.png" />
              </a>
            )}
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
  @media (max-width: 650px) {
    height: fit-content;
    flex-direction: column;
    width: 90%;
    height: fit-content;
    font-size: 25px;
    text-align: center;
    margin-bottom: 12px;
  }
`;

export default ProjectCard;
