import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



const Skills = () => {

    useEffect(()=>{
        AOS.init();
    })

    const skill_items = [
        {
             id: 1, img: "img/react.png", title:"React", 
             text: `- Redux를 활용한 상태관리 경험이 있으며 활용할 수 있습니다.
                \n- React-Router를 활용한 SPA 개발 경험이 있고, 활용할 수 있습니다.
                \n- 다양한 Hooks 사용할 수 있습니다.
                \n      * useState  * useEffect *useContext
                \n      * useReducer    *useMemo    *useRef
                `, 
             color: "#61dafc", type:"react"
            },
        {
             id: 2, img: "img/js.png", title:"Javascript", 
             text: `- ES6+ 문법에 익숙합니다.
                \n- 비동기 처리를 이해하며 활용할 수 있습니다. ( promise, acync, await )
                \n- 라이브러리를 사용하지 않고 다양한 애니메이션, 이벤트들을 구현할 수 있습니다.
                \n- JSON을 통해 데이터를 활용할 수 있습니다.
                 `, 
             color: "#f7df1e", type:"js" 
            },
        { 
            id: 3, img: "img/jquery.png", title:"Jquery", 
            text: `- 다양한 애니메이션, 이벤트들을 구현할 수 있습니다.
                \n- Ajax를 활용하여 비동기 통신을 구현할 수 있습니다.
            `, 
            color: "#0867ac", type:"jquery" 
        },
        { 
            id: 4, img: "img/sass.png", title:"Sass", 
            text: `- SCSS 문법에 익숙합니다.
                \n- 조건문, 반복문을 활용해 동적으로 css관리를 할 수 있습니다.
                \n- import, mixin, extend 기능을 활용할 수 있습니다.
                \n- 변수를 활용해 속성값을 관리할 수 있습니다.
                `, 
            color: "#cd6799", type:"sass" 
        },
        { 
            id: 5, img: "img/html.png", title:"Html", 
            text: `- 웹표준을 지키려 노력합니다.
                \n- 시멘틱 태그를 이해하고 사용할 수 있습니다.
            `, 
            color: "#e44d26", type:"html" 
        },
        { 
            id: 6, img: "img/css.png", title:"Css", 
            text: `- keyframe을 활용해 다양한 애니메이션들을 구현해낼 수 있습니다.
                \n- media query를 활용하여 반응형 웹을 개발할 수 있습니다.
                \n- 크로스 브라우징에 대해 이해하고 있으며, 능숙해지기 위해 현재 계속 학습하고 있습니다.
                \n- bootstrap, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.
            `, 
            color: "#004ce8", type:"css" 
        },
        { 
            id: 7, img: "img/figma.png", title:"Figma", 
            text: `- 프로젝트의 기반을 잡는 와이어프레임을 작성할 수 있습니다.
                \n- Prototype을 활용해 실제 디바이스에서의 모습과 이벤트들을 구현해낼 수 있습니다.
            `, 
            color: "#10b981", type:"figma" 
        },    
        { 
            id: 8, img: "img/photo.png", title:"Photoshop", 
            text: `- 이미지를 필요에 알맞게 크기와 속성, 색상을 수정할 수 있습니다.
            `, 
            color: "#00c9fe", type:"photo" 
        },
        { 
            id: 9, img: "img/git.png", title:"Git", 
            text: `- git을 사용하여 프로젝트 관리를 할 수 있습니다.
            `, 
            color: "#f05133", type:"git" 
        },
    ]
    return (
        <div className='skills'>
            <h1>SKILLS</h1>
            <div className="skills_wrap">
                {skill_items.map((i) => {
                    return (
                        <div className={`skills_item ${i.type}`} >
                            <img data-aos-delay="400" data-aos-duration="700" data-aos="fade-right" src={i.img} alt="" />
                            <div data-aos-delay="600" data-aos="fade-up" data-aos-duration="1500" className="text_box" style={{ border: `5px solid ${i.color}` }}>
                                <h2  className="title" style={{color:i.color}}>{i.title}</h2>
                                <p className="text" >{i.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Skills