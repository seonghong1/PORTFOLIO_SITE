import React, { useState, useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BsFillCloudSnowFill } from 'react-icons/bs';
import { IoMdClock } from 'react-icons/io';

import './bottombar.scss'
import { Link } from 'react-router-dom';

const Bottombar = ({setNavState }) => {
    const time = new Date();
    const hours = time.getHours()
    const minutes = time.getMinutes()
    // 날씨정보
    const [weather, setWeather] = useState(null)
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            getWeatherByCurrentLocation(lat, lon)
        });
    }
    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=196daaaf32e593d6d34bef920e72034f&units=metric`
        let response = await fetch(url);
        let data = await response.json();
        setWeather(data)
    }
    useEffect(() => {
        getCurrentLocation()
    }, [])
    const setState = () => {
        setNavState('false')
    }
    return (
        <div className='Bottom_bar'>
            <div className="BottomBar_wrap">
                <Link to='/'>
                    <div className="bottom_list home_icon" onClick={setState}><AiFillHome /></div>
                </Link>
                <div className="bottom_list"><BsFillCloudSnowFill />{weather?.name}{weather?.main.temp}℃</div>
                <div className="bottom_list"><IoMdClock />{hours}:{minutes}</div>
            </div>
        </div>
    )
}

export default Bottombar