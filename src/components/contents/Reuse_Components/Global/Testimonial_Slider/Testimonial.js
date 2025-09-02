import React, { useEffect, useRef } from "react";
import "./Testimonial.css";

function Testimonials({ clientSaying }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!clientSaying || clientSaying.length === 0) return;

    const cards = containerRef.current.querySelectorAll(
      ".cmp-testimonial-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.8) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        root: containerRef.current,
        threshold: [0.5, 0.8, 1],
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, [clientSaying]);

  return (
    <section className="cmp-testimonials">
      <h2 className="cmp-testimonials-title">What Clients Are Saying</h2>
      <div className="cmp-testimonials-scroll" ref={containerRef}>
        {clientSaying?.map((item, index) => (
          <div className="cmp-testimonial-card" key={index}>
            <div className="cmp-avatar">
              <img src={item.url} alt="Client avatar" />
            </div>
            <div className="cmp-testimonial-content">
              <p className="cmp-testimonial-text">{item?.description}</p>
              <p className="cmp-testimonial-author-content">
                <span className="cmp-name">{item?.title?.split(",")[0]}</span>
                <br />
                <span className="cmp-company">
                  {item?.title?.split(",")[1]}
                </span>
              </p>
            </div>
          </div>
        ))}
        <svg
          className="cmp-bottom-curves"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C50,100 150,0 200,80"
            stroke="#FF5A1F"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}

export default Testimonials;