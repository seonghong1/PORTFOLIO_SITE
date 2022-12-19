import React, { useState } from 'react'
import { TbMoodKid } from 'react-icons/tb';
import { MdOutlineSchool, MdLocationOn, MdOutlinePhoneIphone, MdEmail } from 'react-icons/md';
import { RxTriangleDown } from 'react-icons/rx';
import { BsCalendarCheck, BsPencil } from 'react-icons/bs';
import { RiHotelLine, RiFileExcel2Line, RiCustomerService2Fill } from 'react-icons/ri';
import { HiOutlinePresentationChartLine } from 'react-icons/hi';
import { GiWorld } from 'react-icons/gi';
import { AiOutlineCar } from 'react-icons/ai';
import { DiPhotoshop } from 'react-icons/di';
import { GiCommercialAirplane } from 'react-icons/gi';
import { SlBookOpen, SlCalender } from 'react-icons/sl';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const FnQ = [
  { title: '자기소개 부탁해', answer_title:'', answer: '답변입니다 ~~~~', transform: '-20%' },
  { title: '어떻게 개발자를 꿈꾸게 되었니?', answer_title:'답변의 타이틀입니다', answer: '답변입니다 ~~~~', transform: '-40%' },
  { title: '현재 공부하고 있거나 앞으로 배우고싶은 기술 있어?', answer_title:'답변의 타이틀입니다', answer: '답변입니다 ~~~~', transform: '58%' },
  { title: '성격의 장단점 간단히 말해줄래?', answer_title:'답변의 타이틀입니다', answer: '답변입니다 ~~~~', transform: '38%' },
  { title: '개발자로써 목표가 어떻게 되니?', answer_title:'답변의 타이틀입니다', answer: '답변입니다 ~~~~', transform: '17%' },
]


const About = () => {
  const [key, setKey] = useState(0)
  const [answer, setAnswer] = useState(false)
  console.log(key)

  useEffect(()=>{
    AOS.init();
},[])

  return (
    <div className="about">
      <div data-aos-duration="1000" data-aos="flip-left" className="about_main">
        <div className="top">
          <div className="img_wrap">
            <img src="" alt="" />
          </div>
          <h3 className="name">조성홍</h3>
        </div>
        <div data-aos-duration="1000" data-aos="fade-up" data-aos-delay="600" className="bottom">
          <div className="info">
            <h3 className="title">info</h3>
            <ul className='info_list'>
              <li><TbMoodKid className='icon' /><span>2001.01.27</span></li>
              <li><MdLocationOn className='icon' /><span>경기도 성남시</span></li>
              <li><MdOutlinePhoneIphone className='icon' /><span>010-6263-0127</span></li>
              <li className='email'><MdEmail className='icon' /><span>wodeanniversary@naver.com</span></li>
            </ul>
          </div>
          <div className="fnq">
            <h3 className="title">F&Q</h3>
            <ul className='fnq_list'>

              {FnQ.map((item, index) => {
                return (
                  <li onClick={()=>{
                    setAnswer(!answer)
                    setKey(index)
                     }}>
                    <span className='fnq_title'>{item.title}</span>
                    <RxTriangleDown className='icon move_icon' />
                    <div className="answer" style={answer&&key===index? {display:'block', bottom:`${item.transform}`}:{display:'none'}}>
                      <p>{item.answer_title}</p>
                      <span>{item.answer}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="about_sub">
        <div data-aos-duration="1000" data-aos-delay="400" data-aos="fade-right" className="cerificate">
          <h3 className="certificate_title sub_title">Cerificate</h3>
          <div className="article_wrap">
            <article>
              <div className="date"><SlCalender className='icon' /> 2022</div>
              <div className="text_wrap">
                <p><BsPencil className='icon' />정보처리기능사(필기)</p>
              </div>
            </article>
            <article>
              <div className="date"><SlCalender className='icon' /> 2021</div>
              <div className="text_wrap">
                <p><RiHotelLine className='icon' />호텔객실서비스L3</p>
                <p><GiCommercialAirplane className='icon' />국내여행안내사</p>
              </div>
            </article>
            <article>
              <div className="date"><SlCalender className='icon' /> 2020</div>
              <div className="text_wrap">
                <p><DiPhotoshop className='icon' />GTQ Photoshop 1급</p>
                <p><AiOutlineCar className='icon' />자동차운전면허증</p>
              </div>
            </article>
            <article>
              <div className="date"><SlCalender className='icon' /> 2019</div>
              <div className="text_wrap">
                <p><GiWorld className='icon' />HSK 4급</p>
                <p><RiFileExcel2Line className='icon' />컴퓨터활용능력</p>
                <p><RiCustomerService2Fill className='icon' />SMAT</p>
                <p><HiOutlinePresentationChartLine className='icon' />ITQ</p>
              </div>
            </article>
          </div>
        </div>
        <div data-aos-duration="1000" data-aos-delay="400" data-aos="fade-left" className="ecprerience">
          <h3 className="ecprerience_title sub_title">Experience</h3>
          <div className="article_wrap">
            <article>
              <div className="date"><BsCalendarCheck className='icon' /><span>2022.07 ~ 2023.01</span></div>
              <div className="text_wrap">
                <p>
                  <SlBookOpen className='icon' />
                  강남 그린컴퓨터아카데미<br />
                  프로젝트기반 프론트엔드(React,Vue)<br />
                  웹&앱 SW개발자 양성과성 이수
                </p>
              </div>
            </article>
            <article>
              <div className="date"><BsCalendarCheck className='icon' /><span>2020.02 ~ 2022.03</span></div>
              <div className="text_wrap">
                <p><RiHotelLine className='icon' />더포그레이스 리조트 (프론트)</p>
              </div>
            </article>
            <article>
              <div className="date"><BsCalendarCheck className='icon' /><span>2020.03 ~ 2022.01</span></div>
              <div className="text_wrap">
                <p>
                  <MdOutlineSchool className='icon' />제주한라대학교 졸업<br />
                  (호텔외식 객실서비스)
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About