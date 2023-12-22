import  { useState, useEffect } from "react";
import '../../Styles/Clock.css'
const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date('January 5, 2024').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;

      if (difference < 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    countDown();

    return () => {
      clearInterval(interval); 
    };
  }, []); 
  return (
    <div className="clock_wrapper d-flex align-items-center gap-3">
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h2 className="text-black mb-2">{days}</h2>
          <h6>Days</h6>
        </div>
        <span>:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h2 className="text-black mb-2">{hours}</h2>
          <h6>Hours</h6>
        </div>
        <span>:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h2 className="text-black mb-2">{minutes}</h2>
          <h6>Minutes</h6>
        </div>
        <span>:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h2 className="text-black mb-2">{seconds}</h2>
          <h6>Seconds</h6>
        </div>
      </div>
    </div>
  );
};

export default Clock;
