import React, { useEffect, useRef, useState } from 'react'
import search_icon from '../assets/search_icon.png'
import acik from '../assets/acik.png'
import azkapali from '../assets/azkapali.png'
import cisg from '../assets/cisg.png'
import cisn from '../assets/cisn.png'
import cok_kapali from '../assets/cok_kapali.png'
import flur from '../assets/flur.png'
import kapali from '../assets/kapali.png'
import mix from '../assets/mix.png'
import rain from '../assets/rain.png'
import shower from '../assets/shower.png'
import showern from '../assets/showern.png'
import sisg from '../assets/sisg.png'
import sisn from '../assets/sisn.png'
import snow from '../assets/snow.png'
import storm from '../assets/sisn.png'
import sulukar from '../assets/sulukar.png'
import thun_nigt from '../assets/thun_nigt.png'
import thun_raing from '../assets/thun_raing.png'
import thun_raind from '../assets/thun_raind.png'
import thun from '../assets/thun.png'
import wind from '../assets/wind.png'
import humidity from '../assets/humidity.png'
import windy from '../assets/windy.png'


function Home() {

  const inputRef=useRef()
  const[weather,setWeather]=useState(false);
  const allicons={
      "t01d":thun_raind,"t01n":thun_raing, "t02d":thun_raind, "t02n":thun_raing, "t03d":thun_raind, "t03n":thun_raing, "t04d":thun, "t04n":thun_nigt,
      "t05d":thun, "t05n":thun_nigt, "d01d":flur, "d01n":flur, "d02d":flur,"d02n":flur, "d03d":flur,"d03n":flur,"r01d":rain,"r01n":rain,"r02d":rain,"r02n":rain
      ,"r03d":storm,"r03n":storm,"f01d":rain,"f01n":rain,"r04d":rain,"r04n":rain,"r05d":cisg,"r05n":cisn,"r06d":rain,"r06n":cisn,
      "s01d":shower,"s01n":showern,"s02d":snow,"s02n":snow,"s03d":snow,"s03n":snow,"s04d":shower,"s04n":showern,"s05d":wind,"s05n":wind,
      "a01d":sisg,"a01n":sisn,"a02d":sisg,"a02n":sisn,"a03d":sisg,"a03n":sisn,"a04d":sisg,"a04n":sisn,"a05d":sisg,"a05n":sisn,"a06d":sisg,"a06n":sisn,
      "c01d":acik,"c01n":acik,"c02d":mix,"c02n":azkapali,"c03d":cok_kapali,"c03n":cok_kapali,"c04d":kapali,"c04n":kapali,
      
  }

  const search = async(city)=>{
    if(city === ""){
      alert("Enter City Name")
    }
    try{
      const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${import.meta.env.VITE_APP_ID}` 
      const response =await fetch(url);
      const data = await response.json();

      if(!response.ok){
        alert(data.message);
        return;
      }

      console.log(data)
      const icon= allicons[data.data[0].weather.icon]
      setWeather({
        humidity:data.data[0].rh,
        windspeed:data.data[0].wind_spd,
        temparature:data.data[0].temp,
        location:data.data[0].city_name,
        description:data.data[0].weather.description,
        icon:icon
      })
    } catch(error){
        setWeather(false);
        console.error("Eror in Fetching Weather Data");
    }
  }

  useEffect(()=>{
    search("London")
  },[])


  


  return (
    <div className='Home'>
      
      <p style={{marginTop:"50px"}}>Seeing the weather of the whole world  </p>
      <p>with  <span>Dark Weather!</span></p>
      
      <div className='weather'>
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder='Search City..'   onKeyUp={event => {
                if (event.key === 'Enter') {
                  search(inputRef.current.value)
                }
              }}/>
          <img onClick={()=>search(inputRef.current.value)} src={search_icon} alt="" />
        </div>
        
        <img src={weather.icon} alt=""  className='weather-icon'/>
        <p className='desciption'>{weather.description}</p>
        <p className='temperature'>{weather.temparature}°C</p>
        <p className='location'>{weather.location}</p>
        <div className='weather-data'>
          <div className="col">
            <img style={{width:"40px", height:"40px"}} src={humidity} alt="" />
            <div>
              <span>{weather.humidity} %</span>
              <span>Humidity</span>
            </div>
          </div>

          <div className="col">
            <img style={{width:"40px", height:"40px"}} src={windy} alt="" />
            <div>
              <span>{weather.windspeed} Km/h</span>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>

     
      </div>
  )
}

export default Home