import React, { useState } from 'react'
import './page.scss'
import './respon_page.scss'
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

// aos, swiper 추가 설치 필요
// yarn add aos
// yarn add swiper
const Home = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    const [introduce, setIntroduce] = useState(false)
    const home_skills = [
        {
            id: 0, color: "#61dafc", img: "img/react.png", title: "React",
            text: `- Redux를 활용한 상태관리 경험이 있으며 활용할 수 있습니다.
            \n- React-Router를 활용한 SPA 개발 경험이 있고, 활용할 수 있습니다.
            \n- 다양한 Hooks 사용할 수 있습니다.
            \n      * useState  * useEffect *useContext
            \n      * useReducer    *useMemo    *useRef`
        },
        {
            id: 1, color: "#f7df1e", img: "img/js.png", title: "Javascript",
            text: `- ES6+ 문법에 익숙합니다.
            \n- 비동기 처리를 이해하며 활용할 수 있습니다. ( promise, acync, await )
            \n- 라이브러리를 사용하지 않고 다양한 애니메이션, 이벤트들을 구현할 수 있습니다.
            \n- JSON을 통해 데이터를 활용할 수 있습니다.
             `

        },
        {
            id: 2, color: "#0867ac", img: "img/jquery.png", title: "Jquery",
            text: `- 다양한 애니메이션, 이벤트들을 구현할 수 있습니다.
            \n- Ajax를 활용하여 비동기 통신을 구현할 수 있습니다.
        `

        },
        {
            id: 3, color: "#cd6799", img: "img/sass.png", title: "Sass",
            text: `- SCSS 문법에 익숙합니다.
            \n- 조건문, 반복문을 활용해 동적으로 css관리를 할 수 있습니다.
            \n- import, mixin, extend 기능을 활용할 수 있습니다.
            \n- 변수를 활용해 속성값을 관리할 수 있습니다.
            `

        },
        {
            id: 4, color: "#e44d26", img: "img/html.png", title: "Html",
            text: `- 웹표준을 지키려 노력합니다.
            \n- 시멘틱 태그를 이해하고 사용할 수 있습니다.
        `

        },
        {
            id: 5, color: "#004ce8", img: "img/css.png", title: "Css",
            text: `- keyframe을 활용해 다양한 애니메이션들을 구현해낼 수 있습니다.
            \n- media query를 활용하여 반응형 웹을 개발할 수 있습니다.
            \n- 크로스 브라우징에 대해 이해하고 있으며, 능숙해지기 위해 현재 계속 학습하고 있습니다.
            \n- bootstrap, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.
        `

        },
        {
            id: 6, color: "#f05133", img: "img/git.png", title: "Git",
            text: `- 프로젝트의 기반을 잡는 와이어프레임을 작성할 수 있습니다.
            \n- Prototype을 활용해 실제 디바이스에서의 모습과 이벤트들을 구현해낼 수 있습니다.
        `

        },
        {
            id: 7, color: "#00c9fe", img: "img/photo.png", title: "Photoshop",
            text: `- 이미지를 필요에 알맞게 크기와 속성, 색상을 수정할 수 있습니다.
            `

        },
        {
            id: 8, color: "#10b981", img: "img/figma.png", title: "Figma",
            text: `- git을 사용하여 프로젝트 관리를 할 수 있습니다.
            `

        },
    ]

    const [skills_item, setSkills_item] = useState(1)
    const [info_on, setInfo_on] = useState(false)

    return (
        <div className='home'>
            <div data-aos-duration="1300" data-aos-delay="200" data-aos="fade-right" className="home_left">
                <div className="skills_info" style={info_on ? { opacity: 0.98, transform: 'translateX(0)' } : { opacity: 0, transform: 'translateX(-100px)' }}>
                    <div className="close" onClick={() => setInfo_on(false)}>
                        <AiOutlineCloseCircle />
                    </div>
                    <div className="skills_info_img">
                        <img src={home_skills[skills_item].img} alt="" />
                    </div>
                    <div className="skills_info_text">
                        <h1 style={{color:home_skills[skills_item].color}}>{home_skills[skills_item].title}</h1>
                        <p>{home_skills[skills_item].text}</p>
                    </div>
                </div>
                <div className="img_wrap">
                    <img src="" alt="" />
                </div>
                <div className="text_wrap">
                    <span>Front-end</span>
                    <span>developer</span>
                </div>
            </div>
            <div data-aos-duration="1300" data-aos-delay="400" data-aos="fade-up" className="home_right">
                <div className="close_N_open" style={{ opacity: introduce ? 0.05 : 1 }} onClick={() => setIntroduce(!introduce)}>
                    {introduce ? <AiOutlineCheckCircle /> : <AiOutlineCloseCircle />}
                </div>
                <div className="introduce" style={{ opacity: introduce ? 0 : 0.98, transition: 'all 0.4s', height: introduce ? '0%' : '90%' }}>
                    <p style={introduce ? { display: 'none' } : { display: 'block' }}>
                    간단한 자기소개 및 서두  입니다. 
                    </p>
                </div>
                <div className="skills_img_wrap">
                    {home_skills.map((item) => {
                        return (
                            <div className="skills_img" onClick={() => {
                                setSkills_item(item.id)
                                setInfo_on(true)
                            }
                            }>
                                <img src={item.img} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div className="info_text">
                    <p>※ 이미지를 클릭하시면 스킬에 대한 정보를 볼 수 있습니다.</p>
                </div>
            </div>
        </div >
    )
}

export default Home