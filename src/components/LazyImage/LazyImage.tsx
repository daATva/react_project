import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  height,
  width,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.unobserve(imgRef.current as Element);
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
        observer.unobserve(imgRef.current as Element);
      }
    };
  }, []);

  return (
    <div ref={imgRef}>
      {isLoaded ? (
        <img src={src} alt={alt} height={height} width={width} {...props} />
      ) : (
        <div
          style={{
            height,
            width,
            backgroundColor: 'gray',
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;
