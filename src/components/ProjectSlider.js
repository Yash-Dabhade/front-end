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
    title: "GPP Student Section Portal",
    desc: "It is official web application made using React JS and Firebase for the purpose of providing online Bonafide Certificate system to the students of the Government Polytechnic Pen. It also automates the process of creating Leaving Certificate and managing all its operations.It is live website used by the faculty members and students of the Government Polytechnic Pen on the regular basis.",
    tags: "React JS, Firebase",
    color: "blue",
  },
  {
    title: "GPP Student Section Portal",
    desc: "It is official web application made using React JS and Firebase for the purpose of providing online Bonafide Certificate system to the students of the Government Polytechnic Pen. It also automates the process of creating Leaving Certificate and managing all its operations.It is live website used by the faculty members and students of the Government Polytechnic Pen on the regular basis.",
    tags: "React JS, Firebase",
    color: "green",
  },
  {
    title: "GPP Student Section Portal",
    desc: "It is official web application made using React JS and Firebase for the purpose of providing online Bonafide Certificate system to the students of the Government Polytechnic Pen. It also automates the process of creating Leaving Certificate and managing all its operations.It is live website used by the faculty members and students of the Government Polytechnic Pen on the regular basis.",
    tags: "React JS, Firebase",
    color: "red",
  },
  {
    title: "GPP Student Section Portal",
    desc: "It is official web application made using React JS and Firebase for the purpose of providing online Bonafide Certificate system to the students of the Government Polytechnic Pen. It also automates the process of creating Leaving Certificate and managing all its operations.It is live website used by the faculty members and students of the Government Polytechnic Pen on the regular basis.",
    tags: "React JS, Firebase",
    color: "yellow",
  },
];

function ProjectSlider() {
  return (
    <div className="main-swiper">
      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
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
            <SwiperSlide key={ele.title}>
              <ProjectCard
                title={ele.title}
                desc={ele.desc}
                tags={ele.tags}
                color={ele.color}
              />
            </SwiperSlide>
          );
        })}

        {/* or use normally  */}

        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default ProjectSlider;
