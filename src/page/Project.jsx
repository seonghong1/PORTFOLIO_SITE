import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImExit } from 'react-icons/im';

/*
  프로젝트  캡쳐시
  pc : 408x500 
  모바일 : 전체화면
  
*/ 
const project = [
  {
    title: "Project name", 
    pc_img: ["project/mm.png", "project/반응형_빙그레_pc.png", "project/반응형_빙그레_pc.png"], 
    m_img: ["project/mm.png", "project/반응형_빙그레_pc.png", "project/반응형_빙그레_pc.png"], 
    skills: ["../../public/img/react.png", "../../img/js.png", "../../img/sass.png"], info: "프로젝트에 대해서 간단한 설명입니다. 프로젝트에 대해서 간단한 설명입니다.",
    detail_info: `프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.`
  },
  {
    title: "Project name",
    pc_img: ["project/mm.png", "project/반응형_빙그레_pc.png", "project/반응형_빙그레_pc.png"], 
    m_img: ["project/mm.png", "project/반응형_빙그레_pc.png", "project/반응형_빙그레_pc.png"], 
    skills: ["../../img/sass.png"], info: "프로젝트에 대해서 간단한 설명입니다. 프로젝트에 대해서 간단한 설명입니다.",
    detail_info: `프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.`
  },
  {
    title: "Project name",
    pc_img: ["project/mm.png", "project/반응형_빙그레_pc.png", "project/반응형_빙그레_pc.png"], 
    m_img: ["project/mm.png", "project/반응형_빙그레_pc.png", "project/반응형_빙그레_pc.png"], 
    skills: ["../../img/js.png", "../../img/sass.png"], info: "프로젝트에 대해서 간단한 설명입니다. 프로젝트에 대해서 간단한 설명입니다.",
    detail_info: `프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.`
  },
  {
    title: "Project name",
    pc_img: ["project/mm.png", "project/반응형_빙그레_pc.png", "project/반응형_빙그레_pc.png"], 
    m_img: ["project/mm.png", "project/반응형_빙그레_pc.png", "project/반응형_빙그레_pc.png"], 
    skills: ["../../img/js.png", "../../img/sass.png"], info: "프로젝트에 대해서 간단한 설명입니다. 프로젝트에 대해서 간단한 설명입니다.",
    detail_info: `프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.`
  },
  {
    title: "Project name",
    pc_img: ["project/mm.png", "project/반응형_빙그레_pc.png", "project/반응형_빙그레_pc.png"], 
    m_img: ["project/mm.png", "project/반응형_빙그레_pc.png", "project/반응형_빙그레_pc.png"], 
    skills: ["../../img/js.png", "../../img/sass.png"], info: "프로젝트에 대해서 간단한 설명입니다. 프로젝트에 대해서 간단한 설명입니다.",
    detail_info: `프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.`
  },
  {
    title: "Project name",
    pc_img: ["project/프로젝트_날씨앱_pc01.png", "project/프로젝트_날씨앱_pc02.png"], 
    m_img: ["project/프로젝트_날씨앱_m01.png", "project/프로젝트_날씨앱_m02.png"], 
    skills: ["../../img/js.png", "../../img/sass.png"], info: "프로젝트에 대해서 간단한 설명입니다. 프로젝트에 대해서 간단한 설명입니다.",
    detail_info: `프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.`
  },
  {
    title: "Project name",
    pc_img: ["project/프로젝트_가위바위보게임_pc01.png", "project/프로젝트_가위바위보게임_pc02.png", "project/프로젝트_가위바위보게임_pc03.png"], 
    m_img: ["project/프로젝트_가위바위보게임_m01.png", "project/프로젝트_가위바위보게임_m02.png", "project/프로젝트_가위바위보게임_m03.png"], 
    skills: ["../../img/js.png", "../../img/sass.png"], info: "프로젝트에 대해서 간단한 설명입니다. 프로젝트에 대해서 간단한 설명입니다.",
    detail_info: `프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.`
  },
  {
    title: "Project name",
    pc_img: ["project/mm.png", "project/반응형_빙그레_pc.png", "project/반응형_빙그레_pc.png"], 
    m_img: ["project/mm.png", "project/반응형_빙그레_pc.png", "project/반응형_빙그레_pc.png"], 
    skills: ["../../img/js.png", "../../img/sass.png"], info: "프로젝트에 대해서 간단한 설명입니다. 프로젝트에 대해서 간단한 설명입니다.",
    detail_info: `프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.
                \n 프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.`
  },
]
const clonecoding = [
  {
    title: "INZENT", img: ["project/반응형_인젠트_pc.png", "project/반응형_인젠트_pc.png", "project/반응형_인젠트_pc.png"], 
    skill: ["../../img/js.png", "../../img/jquery.png", "../../img/html.png", "../../img/css.png"]
  },
  {
    title: "URBAN LAUNDERTTE", img: ["project/반응형_어반런드렛_pc.png", "project/반응형_인젠트_pc.png", "project/반응형_인젠트_pc.png"], 
    skill: ["../../img/js.png", "../../img/jquery.png", "../../img/html.png", "../../img/css.png"]
  },
  {
    title: "타이어테크", img: ["project/반응형_타이어테크_pc.png", "project/반응형_인젠트_pc.png", "project/반응형_인젠트_pc.png"], 
    skill: ["../../img/jquery.png", "../../img/html.png", "../../img/css.png"]
  },
  {
    title: "빙그레", img: ["project/반응형_빙그레_pc.png", "project/반응형_인젠트_pc.png", "project/반응형_인젠트_pc.png"], 
    skill: ["../../img/js.png", "../../img/jquery.png", "../../img/html.png", "../../img/css.png"]
  },
  {
    title: "우성사료", img: ["project/클론코딩_우성사료.png", "project/반응형_인젠트_pc.png", "project/반응형_인젠트_pc.png"], 
    skill: ["../../img/jquery.png", "../../img/html.png", "../../img/css.png"]
  },
  {
    title: "INSUROBO", img: ["project/반응형_인슈로보_pc.png", "project/반응형_인젠트_pc.png", "project/반응형_인젠트_pc.png"], 
    skill: ["../../img/jquery.png", "../../img/html.png", "../../img/css.png"]
  },
  {
    title: "아산병원_모바일", img: ["project/적응형_아산병원.png", "project/반응형_인젠트_pc.png", "project/반응형_인젠트_pc.png"], 
    skill: ["../../img/jquery.png", "../../img/html.png", "../../img/css.png"]
  },
  {
    title: "도시락통", img: ["project/반응형_도시락통_pc.png", "project/반응형_인젠트_pc.png", "project/반응형_인젠트_pc.png"], 
    skill: ["../../img/html.png", "../../img/css.png"]
  }
]
// 프로젝트 내부 이미지는 슬라이드로 설정
const Project = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="project">
      <div className="title">PROJECT</div>
      {/* ===== 프로젝트 pc버전 입니다 ===== */}
      <div className="project_wrap">
        {project.map((item, index) => {
          return (
            <div data-aos-duration="1000" data-aos="fade-up" className="project_item">
              <span className="number">{index + 1} / 8</span>
              <h1 className='project_name'>{item.title}</h1>
              <div className="project_inner">
                <div className="img_wrap">
                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {item.pc_img.map((img)=>{
                      return <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                    })}
                  </Swiper>
                </div>
                <div className="text_wrap">
                  <ul className="project_skills">
                    {item.skills.map((skill) => <li style={{ backgroundImage: `url(${skill})` }}></li>)}
                  </ul>
                  <p className="info">
                    {item.info}
                  </p>
                  <p className="detail_info">
                    {item.detail_info}
                  </p>
                  <div className="move">
                    <a href="#"></a>
                    <a href="#"></a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* ===== 프로젝트 모바일버전 입니다 ===== */}
      <div className="project_mobile slide_top">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {project.map((item) => {
            return (
              <SwiperSlide>
                <div className="slide_item">
                  <div className="slide_title">
                    <h3>{item.title}</h3>
                    <div className="move">
                      <span className='github'></span>
                      <span className='site'></span>
                    </div>
                  </div>
                  <div className="slide_wrap">
                    <div className="top">
                      <div className="img_wrap">
                      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {item.m_img.map((img)=>{
                      return <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                    })}
                  </Swiper>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="slide_skills">
                        {item.skills.map((item) => {
                          return <span style={{ backgroundImage: `url(${item})` }}></span>
                        })}
                      </div>
                      <p>{item.info}</p>
                      <p>{item.detail_info}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <h2 className="cloneCoding_title">CloneCoding</h2>
      {/* ===== 클론코딩 pc버전 입니다 =====*/}
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="cloneCoding_wrap cloneCoding_style">
        {clonecoding.map((item) => {
          return (
            <article className=' cloneCoding_item'>
              <h3 className="name">{item.title}</h3>
              <div className="img_wrap">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {item.img.map((img)=>{
                      return <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                    })}
                  </Swiper>
              </div>
              <div className="skill_list">
                {item.skill.map((i) => {
                  return <span style={{ backgroundImage: `url(${i})` }} className="skill"></span>
                })}
              </div>
              <div className="move">
                <span className="github"></span>
                <a href='#' className="site"><ImExit /></a>
              </div>
            </article>
          )
        })}
      </div>
      {/* ===== 클론코딩 모바일 버전 입니다 ===== */}
      <div className="project_mobile cloneCoding_style">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {clonecoding.map((item) => {
            return (
              <SwiperSlide>
                <div className="slide_item">
                  <div className="slide_title">
                    <h3>{item.title}</h3>
                    <div className="move">
                      <span className='github'></span>
                      <span className='site'></span>
                    </div>
                  </div>
                  <div className="slide_wrap">
                    <div className="top">
                      <div className="img_wrap">
                      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {item.img.map((img)=>{
                      return <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                    })}
                  </Swiper>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="slide_skills">
                        {item.skill.map((i) => {
                          return <span style={{ backgroundImage: `url(${i})` }}></span>
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Project