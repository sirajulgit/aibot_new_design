import  { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageSequence = () => {
  const containerRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const totalFrames = 20;

  // Generate array of image paths - update the path to match your public folder structure
  const imagePaths = Array.from({ length: totalFrames }, (_, i) => `/images/frames/${totalFrames - i}.png`);

  useEffect(() => {
    // Preload images
    imagePaths.forEach(path => {
      const img = new Image();
      img.src = path;
      console.log(path,'fff')
    });

    const container = containerRef.current;
    
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=300%", // Adjust this value to control how long the section stays pinned
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const frame = Math.floor(self.progress * (totalFrames - 1));
        setCurrentFrame(frame);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (

    <div className="sequence-container" ref={containerRef}>

      {imagePaths.map((path, index) => (
        <img
          key={path}
          src={path}
          alt={`Frame ${index + 1}`}
          className="sequence-image"
          style={{
            display: currentFrame === index ? 'block' : 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.1s ease-in-out'
          }}
        />
      ))}
    </div>
  );
};

export default ImageSequence;