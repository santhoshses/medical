import { useState, useEffect } from "react";

const Timer = ({minutes=0, seconds=0,onComplete}) => {
    const [minutes1, setMinutes] = useState(minutes);
    const [seconds1, setSeconds] = useState(seconds);

    useEffect(() => {
        const interval = setInterval(() => {
          if (seconds1 > 0) {
            setSeconds(seconds1 - 1);
          }
          if (seconds1 === 0) {
            if (minutes1 === 0) {
              clearInterval(interval);
            } else {
              setSeconds(59);
              setMinutes(minutes1 - 1);
            }
          }
        }, 1000);
        return () => {
          clearInterval(interval);
        };
      }, [seconds1]);
    
    return (
        <>
            <span>{minutes1}:{seconds1}</span>
        </>
    )
}

export default Timer;