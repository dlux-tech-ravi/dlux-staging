import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

export default function Modal() {
  const webinarDate = new Date("2025-08-29T10:30:00");

  function getTimeRemaining() {
    const diff = webinarDate - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Auto open modal on first render
    setIsOpen(true);
    document.body.style.overflow = "hidden";

    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="webinar-modal-overlay">
      <div className="webinar-modal-container">
        <button className="webinar-modal-close" onClick={handleClose}>
          ✕
        </button>

        <div className="webinar-modal-content">
          {/* LEFT SIDE */}
          <div className="webinar-host">
            <img
              src="/webinar-assets/nic-pic.png"
              alt="Host"
              className="webinar-host-full-image"
            />
            <div className="webinar-host-overlay">
              <h2>
                Nic Meskar <br />
                Sr Martech Consultant
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="webinar-details">
            <h1 className="webinar-title">Join Our LIVE Webinar</h1>

            <h1>
              Hack the Stack <br />
              <p>Smarter Martech for Content Ops That Work</p>
            </h1>
            <h3>
              <span className="webinar-date-highlight">August 29th</span> | Don’t Miss Out!
            </h3>

            {/* Countdown */}
            <div className="countdown-grid">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div className="countdown-card" key={unit}>
                  <div className="countdown-value">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="countdown-label">{unit}</div>
                </div>
              ))}
            </div>

            <button
              className="register-btn"
              onClick={() =>
                window.open(
                  "https://www.dluxeqiq.com/session/webinar-link",
                  "_blank"
                )
              }
            >
              Count Me In!
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
