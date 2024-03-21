// src/components/LazyImage.jsx
import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.unobserve(imgRef.current);
          }
        });
      },
      {
        rootMargin: '200px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div ref={imgRef}>
      {isLoaded ? (
        <img src={src} alt={alt} {...props} />
      ) : (
        <div
          style={{
            height: props.height,
            width: props.width,
            backgroundColor: 'gray',
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;
