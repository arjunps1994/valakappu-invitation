"use client";
import { useState } from "react";

// Cover with "tap to open": the details stay hidden until the guest taps.
export default function Gate({ hero, children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="hero">
        <div className="poster">
          <div className="hero-text">
            {hero}
            {!open && (
              <button className="btn open rise" style={{ "--d": ".8s" }} onClick={() => setOpen(true)}>
                Tap to open
              </button>
            )}
          </div>
        </div>
      </header>
      {open && <div className="reveal">{children}</div>}
    </>
  );
}
