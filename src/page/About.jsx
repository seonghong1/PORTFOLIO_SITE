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
  { title: '간단한 자기소개 부탁해 ~', 
    answer_title:'👨‍💻프론트엔드 개발자 조성홍 입니다.', 
    answer: '개발자의 꿈을 안고 프론트엔드과정 수업과 개인 공부를 통해 개발자가 되기 위해 노력하고 있습니다.\n현재 중점적으로 사용할 수 있고 학습하고 있는 기술은 React와 Javascript입니다.\nVue또한 기초를 배우며 익숙해지도록 노력하고 있습니다. \n배움이 즐겁고 책임감 있는 개발자 조성홍. \n앞으로 잘 지켜봐주세요 !', 
    transform: '-20%' },
  { title: '어떻게 개발자를 꿈꾸게 되었니?', 
    answer_title:`능력주의와 나만의 경쟁력 ❗`, 
    answer: `처음 개발자를 꿈꾸게 되었던 계기는 바로 능력주의와 남들과 다른 나만의 경쟁력을 키우기 위해서입니다. \n단순 연차가 아닌 스스로의 능력과 결과물로 본인의 가치가 형성된다는 점에서 큰 매력을 느끼게 되었습니다. \n또한 "노력하면 무엇이든지 할 수 있다" 라는 신념을 갖고 있어 항상 다양한 일에 도전하고 노력으로 인한 성과를 거두어 왔습니다. \n저는 뛰어난 개발자가 될 수 있다는 스스로의 믿음을 갖고있습니다. \n스스로의 능력으로 가치를 인정받는 유능한 개발자가 될 것 입니다.
            `, 
    transform: '-40%' },
  { title: '현재 공부하고 있거나 앞으로 배우고싶은 기술 있어?', 
    answer_title:'나의 꿈은 풀스택 ❗', 
    answer: `현재는 React와 Javascript에 중점을 두어 학습하고 있습니다. Redux와 thunk, 비동기처리에 대해서 \n개념적 이해 뿐만 아니라 다양한 경우에서 직접 사용해보며 스스로 내 것 으로 만들기 위해 노력하고있습니다. \n또한 다양한 기능들과 외부 api등을 사용하기 위해 다른 언어의 필요성도 느끼게 되었습니다.\n저의 단기적 목표인 하나의 완성된 서비스를 A~Z까지 스스로 구현해내기 위해 메인 언어인 자바스크립트 이외에도\n백엔드 언어를 서브로 배우면서 23년 이내에 단기적 목표를 이룰 것입니다.`, 
    transform: '58%' },
  { title: '성격의 장단점 간단히 말해줄래?', 
  answer_title:'무궁무진한 성장 가능성과 성실함 ❗', 
  answer: `스스로 본인을 소개할때 "무궁무진한 성장 가능성"이라고 말하는건 자신을 높여 소개하는 경우가 대부분이지만\n저는 잘 갖추어진 습관과 항상 노력하는 저의 모습을 알기에 자신있게 말하며 저를 표현할 수 있습니다. \n학습을 할 때 구현되고 나서의 즐거움, 문제를 해결하고 나서의 성취감 등등 개발공부를 하며 항상 즐거움을 느끼며 배움에 임하고 있습니다. \n또한 성실함의 지표가 될 수 있는 근태에 대해서 지난 호텔에서의 2년 동안 지각 조퇴 단한번 없이 근무를 하였습니다. \n근태 뿐만 아니라 항상 능동적이고 먼저 나서서 일을 처리하며 주변 동료들로부터 성실함을 인정받는 사원으로 자리매김 하였습니다.\n저와 같이 근무하며 무궁무진한 성장 가능성과 성실함을 지켜봐주세요 !
           `, 
  transform: '38%' 
},
  { title: '나이가 어린데 아르바이트 연차가 왜 이렇게 많아?', 
    answer_title:'책임감에 대해서.', 
    answer: `중학생때부터 필요한 물건, 배우고싶은 분야가 있을때 스스로 아르바이트를하며 필요를 채워나갔습니다.\n평일에 3일과 주말은 아르바이트, 이틀은 학원을 다니며 나만의 꿈을 펼쳐나갔습니다.\n학습하는 시간이 부족했지만 학교 등굣길이나 지하철에서 틈틈히 학습을 하며 두마리 토끼를 모두 잡을 수 있었습니다.\n학업 또한 수업시간에 온전히 집중하며 수업을 듣고, 고등학교 3년 개근을 통해 스스로 계획한대로 마무리 할 수 있었습니다.\n조금 힘들었지만 어쩌면 스스로를 책임지고 미래를 생각할 수 있었던 계기가 되었었고, 지금의 나로 성장시켜 줄 수 있었던 경험이 되어주어서 감사하게 생각하고 있습니다.`, 
    transform: '17%' },
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