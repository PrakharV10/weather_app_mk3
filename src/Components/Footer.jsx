import React from 'react'
import SmallCards from './SmallCards'


function Footer({Weather}) {    

    const {wind, main} = Weather;

    return (

        <div className="footer">
            <SmallCards name="Wind" number={wind.speed} percent="m/s" />
            <SmallCards name="Pressure" number={main.pressure} percent="hPa" />
            <SmallCards name="Humidity" number={main.humidity} percent="%" />
        </div>
    )
}

export default Footer
