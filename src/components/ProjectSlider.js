import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../App.css";
import ProjectCard from "./ProjectCard";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const data = [
  {
    title: "GP Pen Official Website",
    desc: "It is the official institution website of Government Polytechnic Pen created using Next JS, Chakra UI and Notion.It is hosted live (visited by 41k+ visitors till date) and used by the students, faculty members and others for getting updates and all the information about the institute and the courses it provides.",
    color: "green",
  },
  {
    title: "GPP Student Section Portal",
    desc: "It is official web application made using React JS and Firebase for the purpose of providing online Bonafide Certificate system to the students of the Government Polytechnic Pen. It also automates the process of creating Leaving Certificate and managing all its operations.It is live website used by the faculty members and students of the Government Polytechnic Pen on the regular basis.",
    color: "blue",
  },
  {
    title: "AICTE PORTAL (SIH 22 Project)",
    desc: "It is the web application created using React JS, Firebase and Tailwind CSS for SIH 22 Finale. This project fills the gap between the technologies used in the market and the technologies/subjects taught in the college. It has an intelligent algorithm which is capable of finding the best fit for a particular subject of a given course in a curriculum considering the new subject/technology pre requisites.",
    color: "red",
  },
  {
    title: "Spartan Coder-Forum",
    desc: "It is online coding forum web application made using PHP and MySQL. User can have discussions on various problems faced and can also comment on the other user's asked questions. It contains various categories and also includes enchanced security features like protection against potential XSS attacks",
    color: "yellow",
  },
];

function ProjectSlider() {
  return (
    <div className="main-swiper" id="projectSliderContainer">
      <Swiper
        style={{ maxWidth: "100vw", scrollX: "hidden" }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        {/* using array */}
        {data.map((ele) => {
          return (
            <SwiperSlide maxWidth={"100vw"} key={ele.title}>
              <ProjectCard
                title={ele.title}
                desc={ele.desc}
                tags={ele.tags}
                color={ele.color}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProjectSlider;
