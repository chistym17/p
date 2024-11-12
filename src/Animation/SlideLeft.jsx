import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SlideInFromLeft = ({ children, duration = 1000 }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
          } else {
            setShouldAnimate(false);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold if needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '100%', // Ensure height is sufficient
      }}
    >
      <div
        style={{
          transition: `transform ${duration}ms ease-in-out`,
          transform: shouldAnimate ? 'translateX(0)' : 'translateX(-100%)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

SlideInFromLeft.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
};

export default SlideInFromLeft;
