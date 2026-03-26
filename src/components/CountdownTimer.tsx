import { useState, useEffect } from "react";

const TARGET = new Date("2026-06-15T09:00:00");

const CountdownTimer = () => {
  const [time, setTime] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = Math.max(0, TARGET.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  }

  useEffect(() => {
    const i = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(i);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Mins", value: time.minutes },
    { label: "Secs", value: time.seconds },
  ];

  return (
    <div className="flex gap-4">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-muted border border-primary/30 flex items-center justify-center box-glow-red">
            <span className="font-tech text-2xl sm:text-3xl font-bold text-primary">
              {String(u.value).padStart(2, "0")}
            </span>
          </div>
          <span className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">{u.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
