import { useState, useEffect } from "react";

const Timer = ({minutes=0, seconds=0,onComplete}) => {
    const timeInSeconds = minutes*60 + seconds;
    const [timerVal, setTimerVal] = useState(timeInSeconds);
    // useEffect(() => {
        setInterval(()=>{
            if(timerVal !== 0){
                setTimerVal(timerVal-1);
            }
            
        }, 1000);
    // }, []);
    
    const secondVal = timerVal % 60;
    const minutesVal = Math.floor(timerVal / 60);
    // setTimeout(()=>{
    //     clearInterval(timerInstance)
    // }, timeInSeconds)
    return (
        <span key={secondVal}>{minutesVal}:{secondVal}</span>
    )
}

export default Timer;