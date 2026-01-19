"use client";

import React, { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Countdown = ({ eventDate }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const timeUnits = [
    { value: time.days, label: "days", color: "text-blue-600 dark:text-blue-500" },
    { value: time.hours, label: "hours", color: "text-green-500 dark:text-green-500" },
    { value: time.minutes, label: "min", color: "text-indigo-400 dark:text-indigo-500" },
    { value: time.seconds, label: "sec", color: "text-red-700 dark:text-indigo-400" },
  ];

  return (
    <div
      ref={ref}
      className={`flex flex-wrap justify-center gap-8 p-12 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-900 dark:to-black border border-gray-700 dark:border-gray-600 animate-fade-up ${isVisible ? "is-visible" : ""}`}
    >
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="timer-unit text-center cursor-default"
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          <span className={`countdown font-mono text-7xl font-bold ${unit.color}`}>
            <span>{unit.value ?? 0}</span>
          </span>
          <div className="text-gray-400 dark:text-gray-500 text-lg font-mono mt-4">{unit.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
