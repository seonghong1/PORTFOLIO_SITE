import React from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Contact = () => {

  useEffect(()=>{
    AOS.init();
})

  return (
    <div  className='contact'>
      <div data-aos-duration="1000" data-aos="flip-left" className="contact_inner">
        <h1 className="title">CONTACT</h1>
        <div className="contact_item_wrap">
          <div className="contact_left">
            <div className="img_wrap">
              <img src="" alt="" />
            </div>
            <div className="name">조성홍</div>
          </div>
          <div className="contact_right">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" className="phone contact_item">
              <FaPhoneSquareAlt className='icon'/> <span>:</span><a href="tel:010-6263-0127" className='address'>010-6263-0127</a>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" className="email contact_item">
              <MdEmail className='icon'/><span>:</span><a href="mailto:wodeanniversary@naver.com" className='address email'>wodeanniversary@naver.com</a>
            </div>
            <div className="text_area">

            </div>
            <div className="sns">
              <a data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="900" className="github" href='https://github.com/seonghong1'></a>
              <a data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000" className="kakao" href=''></a>
              <a data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1100" className="insta" href=''></a>
              <a data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1200" className="gmail" href="mailto:whtjdghd0127@gmail.com"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact