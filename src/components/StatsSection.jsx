import React, { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const statsData = [
  { number: 4, label: 'Years Experience' },
  { number: 10, label: 'Projects Completed' },
  { number: 5, label: 'Technologies Mastered' },
  { number: 4, label: 'Hackathons' },
];

const StatsSection = () => {
  const statRefs = useRef([]);
  const [counters, setCounters] = useState(Array(statsData.length).fill(0));

  const animateNumber = (index, target) => {
    let start = 0;
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const timer = setInterval(() => {
      start += 1;
      setCounters((prev) => {
        const newCounters = [...prev];
        newCounters[index] = start;
        return newCounters;
      });
      if (start >= target) clearInterval(timer);
    }, stepTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = statRefs.current.indexOf(entry.target);

          if (entry.isIntersecting) {
            // trigger animation
            entry.target.style.animation = `fadeSlideUp 0.8s ease forwards`;
            entry.target.style.animationDelay = `${index * 0.2}s`;

            // reset number counter
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = 0;
              return newCounters;
            });

            // start number animation
            animateNumber(index, statsData[index].number);
          } else {
            // reset card so animation can run again when scrolling back
            entry.target.style.animation = 'none';
          }
        });
      },
      { threshold: 0.3 }
    );

    statRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      statRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="stat-card"
            ref={(el) => (statRefs.current[index] = el)}
          >
            <h2 className="stat-number">{counters[index]}{stat.number > 9 ? '+' : ''}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
