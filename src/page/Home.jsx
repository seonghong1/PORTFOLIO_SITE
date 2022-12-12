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
    })
    const [introduce, setIntroduce] = useState(false)
    const home_skills = [
        {
            id: 0, color: "#61dafc", img: "img/react.png", title: "React",
            text: "에 대한 설명입니다"
        },
        {
            id: 1, color: "#f7df1e", img: "img/js.png", title: "Javascript",
            text: "에 대한 설명입니다"

        },
        {
            id: 2, color: "#0867ac", img: "img/jquery.png", title: "Jquery",
            text: "에 대한 설명입니다"

        },
        {
            id: 3, color: "#cd6799", img: "img/sass.png", title: "Sass",
            text: "에 대한 설명입니다"

        },
        {
            id: 4, color: "#e44d26", img: "img/html.png", title: "Html",
            text: "에 대한 설명입니다"

        },
        {
            id: 5, color: "#004ce8", img: "img/css.png", title: "Css",
            text: "에 대한 설명입니다"

        },
        {
            id: 6, color: "#f05133", img: "img/git.png", title: "Git",
            text: "에 대한 설명입니다"

        },
        {
            id: 7, color: "#00c9fe", img: "img/photo.png", title: "Photoshop",
            text: "에 대한 설명입니다"

        },
        {
            id: 8, color: "#10b981", img: "img/figma.png", title: "Figma",
            text: "에 대한 설명입니다"

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