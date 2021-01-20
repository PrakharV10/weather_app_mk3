import React, { useState} from 'react'

import Footer from './Footer'
import Loader from './Loader';
import MidContainer from './MidContainer'
import SearchBar from './SearchBar'
import UpperText from "./UpperText"

function Main() {



    // Weather API
    const [weather, setWeather] = useState();

    function api_call(event){
        event.preventDefault()
    
        var location = event.target.elements.location.value;
    
        const url = `${process.env.REACT_APP_WEATHER_URL}?q=${location}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`;
    
        fetch(url)
        .then(Response => Response.json())
        .then(json => setWeather(json));

        event.target.elements.location.value = "";
      }
      console.log(weather)

      function getBG(){
          if(typeof weather != "undefined"){
            if(weather.main.temp < 10)
                return 'wrapper freeze'
            else if(weather.main.temp >10 && weather.main.temp <20)
                return 'wrapper'
            else 
                return 'wrapper warm'
          }
          else{
              return 'wrapper';
          }
      }
    
    return (
        <div className={getBG()}>
            {
                !weather && 
                <div className="loader-class">
                    <div className="loader-mask">
                        <Loader api_call={api_call}/>
                    </div>
                </div>
            }
            {
                weather && 
                <div className=" main wrapper-mask">
                    <SearchBar api_call={api_call}/>  
                    <UpperText Weather={weather}/>
                    <MidContainer Weather={weather} />
                    <Footer Weather={weather}/>
                </div>
            }
        </div>
    )
}

export default Main
