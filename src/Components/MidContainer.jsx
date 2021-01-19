import React from 'react'
import {database} from '../Database';

function MidContainer({Weather}) {

    const {main, weather} = Weather;

    const val = weather[0].main;

    return (
        <div className='mid-container'>
            <span className="temp">
                {main.temp}<span>&deg;</span>
            </span>
            <span className="sub-text">
                <div className="weather-stat">
                    {database[val].first}
                </div>
                <div className="quote">
                    {database[val].second}
                </div>
            </span>
        </div>
    )
}

export default MidContainer
