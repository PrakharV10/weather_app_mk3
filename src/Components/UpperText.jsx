import React,{useState, useEffect} from 'react'

function UpperText({Weather}) {

    const {name} = Weather;

        const [date, setDate] = useState();
    
        function getCurrentDate(){
            let newDate = new Date();
            let date = newDate.getDate();
            let month = newDate.getMonth();
            let year = newDate.getFullYear();
            var time = newDate.getHours() + " : " + newDate.getMinutes();
    
            let monthNamesArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
            const monthName = monthNamesArray[month];
    
            setDate(`${time} - ${date} ${monthName} ${year}`);
        }
    
        useEffect(()=>{
            getCurrentDate();
        })
    
    return (
        <div className ="upper-text">
            <div className="city-name">
                {name}
            </div>
            <div className="current-day">
                {date}
            </div>
        </div>
    )
}

export default UpperText
