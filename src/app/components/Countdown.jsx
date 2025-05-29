"use client";
import React, { useState, useEffect } from "react";

const ONE_WEEK_IN_MS = 8 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(ONE_WEEK_IN_MS);

  useEffect(() => {
    const endTime = Date.now() + ONE_WEEK_IN_MS;

    const interval = setInterval(() => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeParts = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeParts(timeLeft);

  return (
    <div className="text-center text-xl mt-[80px] lg:mt-[150px]  rounded-lg shadow-md ">
      <h1 className="text-[25px] lg:text-[50px] font-black mb-[65px]">
        Countdown to 1 Week
      </h1>
      <div className="flex flex-wrap justify-center gap-[25px]">
        <TimeBlock label="Days" value={days} />
        <TimeBlock label="Hours" value={hours} />
        <TimeBlock label="Minutes" value={minutes} />
        <TimeBlock label="Seconds" value={seconds} />
      </div>
    </div>
  );
}

function TimeBlock({ label, value }) {
  return (
    <div>
      <div className="flex w-[80%] m-auto flex-col font-mono items-center ]">
        <span className="text-[60px] lg:text-[140px] text-[#DD7E24] px-[25px] lg:px-[60px] rounded-[18px] py-[10px] border-[1px] border-[#DD7E24]">
          {String(value).padStart(2, "0")}
        </span>
        <span className=" text-[18px] lg:text-[30px] mt-[10px] text-[#DD7E24]">
          {label}
        </span>
      </div>
    </div>
  );
}

export default CountdownTimer;
