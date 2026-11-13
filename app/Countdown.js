"use client";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-05T14:30:00+05:30").getTime();

export default function Countdown() {
  const [left, setLeft] = useState(null); // null until mounted, avoids hydration mismatch

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, TARGET - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (left === null) return <div className="count" style={{ minHeight: 84 }} />;
  if (left === 0) return <p className="big">The celebration has begun!</p>;

  const s = Math.floor(left / 1000);
  const units = [["Days", Math.floor(s / 86400)], ["Hours", Math.floor(s / 3600) % 24], ["Mins", Math.floor(s / 60) % 60], ["Secs", s % 60]];

  return (
    <div className="count" role="timer" aria-label="Time until the celebration">
      {units.map(([label, n]) => (
        <div key={label}><b>{String(n).padStart(2, "0")}</b><span>{label}</span></div>
      ))}
    </div>
  );
}
