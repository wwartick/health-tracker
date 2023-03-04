import React, { useState, useEffect } from 'react';
import './clock.css'

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className="Clock">
      <span className="Time">{hours % 12 || 12}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds} {hours >= 12 ? 'PM' : 'AM'}</span>
      <div className="Date">{formattedDate}</div>
    </div>
  );
}

export default Clock;
