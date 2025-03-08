import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LearnSectionabt = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const midImageRef = useRef<HTMLVideoElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(imageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 2.5,
            ease: "power3.out",
          });
          gsap.to(midImageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 3,
            ease: "power3.out",
          });
          gsap.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });

          // Ensure video plays when section is in view
          if (midImageRef.current) {
            midImageRef.current.play().catch((error) => {
              console.error("Video play failed:", error);
            });
          }
        } else {
          gsap.to(imageRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: "power3.out",
          });
          gsap.to(midImageRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power3.out",
          });
          gsap.to(textRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="learn" style={{background:'white', padding:'60px 0 0'}}>
      <div className="container">
        <div ref={textRef} className="text" style={{ opacity: 0, transform: "translateY(20px)" }}>
          <h3 style={{color:'#000510'}}>They learn your business. Just like real employees.</h3>
          <p style={{color:'#000510'}}>
            Answer questions about your brand, add files, instructions, and your
            website for more unique results. The more information they have, the
            better the outcome.
          </p>
        </div>
        <div className="image">
          <img
            ref={imageRef}
            style={{ opacity: 0, transform: "scale(0.8)", width:'90%', maxWidth:800, display:'block', margin: '30px auto 0' }}
            src="images/abt4.png"
            alt="AI Learning Representation"
          />
          {/* <div className="mid_img">
            <video ref={midImageRef} autoPlay muted  playsInline
            style={{
              maxWidth:'70%'
            }}>
              <source src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c%2F673ea9f10353f48a685fd1fc_SOshie%20Landing%20from%20Martynas-transcode.mp4" />
              <source
                src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c%2F673ea9f10353f48a685fd1fc_SOshie%20Landing%20from%20Martynas-transcode.webm"
                data-wf-ignore="true"
              />
            </video>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LearnSectionabt;
