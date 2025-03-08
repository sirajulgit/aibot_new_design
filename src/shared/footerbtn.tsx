import React, { useEffect, useRef, useState } from "react";

const MovingDotsBackground: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [opacity, setOpacity] = useState(0); // Smooth transition

  useEffect(() => {
    if (!isVisible) {
      setOpacity(0);
      return;
    }

    setOpacity(1); // Gradual fade-in

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let dots = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.3, // Smoother slow movement
      dy: (Math.random() - 0.5) * 0.3,
    }));

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)"; // Softer white glow
        ctx.fill();

        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:'linear-gradient(316.3deg,rgba(0, 80, 240, 0.3) 3.29%,rgba(0, 5, 16, 0.31) 35.71%,rgba(0, 5, 16, 0.32) 63.32%,rgba(191, 77, 6, 0.3) 98.77%)',
        zIndex: 1,
        opacity: opacity,
        transition: "opacity 0.2s ease-in-out", // Smooth fade-in and fade-out
        pointerEvents: "none", // Prevent interaction issues
      }}
    />
  );
};

const Footerbtn: React.FC = () => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [showCanvas, setShowCanvas] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    const rotateX = (y / height) * -8; // Reduced sensitivity
    const rotateY = (x / width) * 8;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setShowCanvas(true);
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setTimeout(() => setShowCanvas(false), 500); // Delayed hide for smooth exit
  };

  return (
    <>
      <MovingDotsBackground isVisible={showCanvas} />
      
      <div
        className="animated-border-box"
        style={{
          transform: `perspective(500px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) `,
          transition: "transform 0.2s ease-out",
          marginTop: 60,
          width: 502,
          height: 122,
          borderRadius: 100,
          position: "relative",
          zIndex: 4,
          
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          className="btn footerbutton"
          style={{
            display: "inline-block",
            minWidth: 500,
            height: 120,
            fontSize: "3.5rem",
            borderRadius: 100,
          }}
        >
          Start For Free
        </a>
      </div>
    </>
  );
};

export default Footerbtn;
