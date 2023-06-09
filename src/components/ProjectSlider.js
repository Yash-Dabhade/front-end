import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../App.css";
import ProjectCard from "./ProjectCard";
import data from "../utils/data";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

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
                url={ele.url}
                video={ele.video}
                github={ele.github}
                imgPath={ele.imgPath}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProjectSlider;
