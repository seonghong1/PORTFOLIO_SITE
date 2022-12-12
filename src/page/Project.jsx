import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";



// 프로젝트 내부 이미지는 슬라이드로 설정
const Project = () => {

  useEffect(()=>{
    AOS.init();
},[])
  return (
    <div className="project">
      <div className="title">PROJECT</div>
      <div className="project_wrap">
        <div data-aos-duration="1000" data-aos="fade-up" className="project_item">
          <h1 className='project_name'>Project name</h1>
          <div className="project_inner">
            <div className="img_wrap">
              <img src="" alt="" />
            </div>
            <div className="text_wrap">
              <ul className="project_skills">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p className="info">
                프로젝트에 대해서 간단한 설명입니다. 프로젝트에 대해서<br />
                간단한 설명입니다.</p>
              <p className="detail_info">
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
              </p>
              <div className="move">
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos-duration="1000" data-aos="fade-up" className="project_item">
          <h1 className='project_name'>Project name</h1>
          <div className="project_inner">
            <div className="img_wrap">
              <img src="" alt="" />
            </div>
            <div className="text_wrap">
              <ul className="project_skills">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p className="info">
                프로젝트에 대해서 간단한 설명입니다. 프로젝트에 대해서<br />
                간단한 설명입니다.</p>
              <p className="detail_info">
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
              </p>
              <div className="move">
                <a href=""></a>
                <a href=""></a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos-duration="1000" data-aos="fade-up" className="project_item">
          <h1 className='project_name'>Project name</h1>
          <div className="project_inner">
            <div className="img_wrap">
              <img src="" alt="" />
            </div>
            <div className="text_wrap">
              <ul className="project_skills">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p className="info">
                프로젝트에 대해서 간단한 설명입니다. 프로젝트에 대해서<br />
                간단한 설명입니다.</p>
              <p className="detail_info">
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
                프로젝트를 하고 느낀점, 배운점, 알게된점 등등 자세한 기록을 하는 공간입니다.<br />
              </p>
              <div className="move">
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <SwiperSlide>
            <div className="slide_item">
              <h3 className="slide_title">
                <span>project title</span>
                <div className="move">
                  <span className='github'></span>
                  <span className='site'></span>
                </div>
              </h3>
              <div className="slide_wrap">
                <div className="top">
                  <div className="img_wrap">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="slide_skills">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p>간단한 설명 및 느낀점 입니다.간단한 설명
                     및 느낀점 입니다.간단한 설명 및 느낀점 입
                     니다.간단한 설명 및 느낀점 입니다.간단한 
                     설명 및 느낀점 입니다.간단한 설명 및 느낀
                     점 입니다.간단한 설명 및 느낀점 입니다.
                     점 입니다.간단한 설명 및 느낀점 입니다.
                     점 입니다.간단한 설명 및 느낀점 입니다.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_item">
              <h3 className="slide_title">
                <span>project title</span>
                <div className="move">
                  <span className='github'></span>
                  <span className='site'></span>
                </div>
              </h3>
              <div className="slide_wrap">
                <div className="top">
                  <div className="img_wrap">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="slide_skills">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p>간단한 설명 및 느낀점 입니다.간단한 설명
                     및 느낀점 입니다.간단한 설명 및 느낀점 입
                     니다.간단한 설명 및 느낀점 입니다.간단한 
                     설명 및 느낀점 입니다.간단한 설명 및 느낀
                     점 입니다.간단한 설명 및 느낀점 입니다.
                     점 입니다.간단한 설명 및 느낀점 입니다.
                     점 입니다.간단한 설명 및 느낀점 입니다.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_item">
              <h3 className="slide_title">
                <span>project title</span>
                <div className="move">
                  <span className='github'></span>
                  <span className='site'></span>
                </div>
              </h3>
              <div className="slide_wrap">
                <div className="top">
                  <div className="img_wrap">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="slide_skills">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p>간단한 설명 및 느낀점 입니다.간단한 설명
                     및 느낀점 입니다.간단한 설명 및 느낀점 입
                     니다.간단한 설명 및 느낀점 입니다.간단한 
                     설명 및 느낀점 입니다.간단한 설명 및 느낀
                     점 입니다.간단한 설명 및 느낀점 입니다.
                     점 입니다.간단한 설명 및 느낀점 입니다.
                     점 입니다.간단한 설명 및 느낀점 입니다.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className="cloneCoding_title">CloneCoding</h2>
      <div className="cloneCoding_wrap">
        <article className='binggrae cloneCoding_item'>
          <h3 className="name">project_name</h3>
          <div className="img_wrap">
            <img src="project/반응형_빙그레_pc.png" alt="" />
          </div>
          <div className="skill_list">
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
          </div>
          <div className="move">
            <span className="github"></span>
            <span className="site">VIEW</span>
          </div>
        </article>
        <article className='cloneCoding_item'>
          <h3 className="name">project_name</h3>
          <div className="img_wrap">
            <img src="project/클론코딩_우성사료.png" alt="" />
          </div>
          <div className="skill_list">
            <span className="skill js"></span>
            <span className="skill jquery"></span>
            <span className="skill html"></span>
            <span className="skill css"></span>
          </div>
          <div className="move">
            <span className="github"></span>
            <span className="site">VIEW</span>
          </div>
        </article>
        <article className='cloneCoding_item'>
          <h3 className="name">project_name</h3>
          <div className="img_wrap">
            <img src="project/반응형_도시락통_pc.png" alt="" />
          </div>
          <div className="skill_list">
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
          </div>
          <div className="move">
            <span className="github"></span>
            <span className="site">VIEW</span>
          </div>
        </article>
        <article className='cloneCoding_item'>
          <h3 className="name">project_name</h3>
          <div className="img_wrap">
            <img src="project/반응형_인젠트_pc.png" alt="" />
          </div>
          <div className="skill_list">
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
          </div>
          <div className="move">
            <span className="github"></span>
            <span className="site">VIEW</span>
          </div>
        </article>
        <article className='cloneCoding_item'>
          <h3 className="name">project_name</h3>
          <div className="img_wrap">
            <img src="project/반응형_어반런드렛_pc.png" alt="" />
          </div>
          <div className="skill_list">
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
          </div>
          <div className="move">
            <span className="github"></span>
            <span className="site">VIEW</span>
          </div>
        </article>
        <article className='cloneCoding_item'>
          <h3 className="name">project_name</h3>
          <div className="img_wrap">
            <img src="project/반응형_타이어테크_pc.png" alt="" />
          </div>
          <div className="skill_list">
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
          </div>
          <div className="move">
            <span className="github"></span>
            <span className="site">VIEW</span>
          </div>
        </article>
        <article className='cloneCoding_item'>
          <h3 className="name">project_name</h3>
          <div className="img_wrap">
            <img src="project/적응형_아산병원.png" alt="" />
          </div>
          <div className="skill_list">
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
          </div>
          <div className="move">
            <span className="github"></span>
            <span className="site">VIEW</span>
          </div>
        </article>
        <article className='cloneCoding_item'>
          <h3 className="name">project_name</h3>
          <div className="img_wrap">
            <img src="project/카카오톡.png" alt="" />
          </div>
          <div className="skill_list">
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
            <span className="skill"></span>
          </div>
          <div className="move">
            <span className="github"></span>
            <span className="site">VIEW</span>
          </div>
        </article>
      </div>
      <div className="project_mobile">
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
          <SwiperSlide>
            <div className="slide_item">
              <h3 className="slide_title">
                <span>project title</span>
                <div className="move">
                  <span className='github'></span>
                  <span className='site'></span>
                </div>
              </h3>
              <div className="slide_wrap">
                <div className="top">
                  <div className="img_wrap">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="slide_skills">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_item">
              <h3 className="slide_title">
                <span>project title</span>
                <div className="move">
                  <span className='github'></span>
                  <span className='site'></span>
                </div>
              </h3>
              <div className="slide_wrap">
                <div className="top">
                  <div className="img_wrap">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="slide_skills">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_item">
              <h3 className="slide_title">
                <span>project title</span>
                <div className="move">
                  <span className='github'></span>
                  <span className='site'></span>
                </div>
              </h3>
              <div className="slide_wrap">
                <div className="top">
                  <div className="img_wrap">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="slide_skills">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Project