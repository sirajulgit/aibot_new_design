import React, { useEffect, useRef } from 'react';
import SvgIcon from './icons/rightarrow';

interface RippleButtonProps {
  text: string;
  link: string;
  onClick?: () => void;
}

const RippleButton: React.FC<RippleButtonProps> = ({ text, link }) => {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const existingRipples = button.querySelectorAll('.ripple, .water-ripple');
      if (existingRipples.length > 4) {
        existingRipples[0].remove();
      }

      const ripple = document.createElement('span');
      ripple.className = 'ripple';

      const maxSize = Math.max(rect.width, rect.height);
      const rippleSize = maxSize / 7;

      ripple.style.width = ripple.style.height = `${rippleSize}px`;
      ripple.style.left = `${x - rippleSize / 2}px`;
      ripple.style.top = `${y - rippleSize / 2}px`;

      button.appendChild(ripple);

      for (let i = 1; i <= 2; i++) {
        const waterRipple = document.createElement('span');
        waterRipple.className = `water-ripple water-ripple-${i}`;

        waterRipple.style.width = waterRipple.style.height = `${rippleSize}px`;
        waterRipple.style.left = `${x - rippleSize / 2}px`;
        waterRipple.style.top = `${y - rippleSize / 2}px`;

        button.appendChild(waterRipple);

        setTimeout(() => {
          waterRipple.remove();
        }, 1500 + i * 150);
      }

      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };

    button.addEventListener('mousemove', handleMouseMove);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <a ref={buttonRef} href={link} className="btn">
      {text} 
      <SvgIcon />
    </a>
  );
};

export default RippleButton;
