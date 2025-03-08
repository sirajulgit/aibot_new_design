import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SvgIcon from "../../shared/icons/rightarrow";
import { Box } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const SintraSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!imageRef.current || !textRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.to(imageRef.current, {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        rotate: 0,
                        filter: "blur(0px)",
                        duration: 1,
                        ease: "power4.out"
                    });

                    gsap.to(textRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out"
                    });

                    // Add pulse effect
                    gsap.to(imageRef.current, {
                        scale: 1.05,
                        repeat: -1,
                        yoyo: true,
                        duration: 2,
                        ease: "sine.inOut",
                        delay: 1
                    });
                } else {
                    gsap.to(imageRef.current, {
                        opacity: 0,
                        x: -80,
                        scale: 0.9,
                        rotate: -5,
                        filter: "blur(10px)",
                        duration: 0.8,
                        ease: "power2.out"
                    });

                    gsap.to(textRef.current, {
                        opacity: 0,
                        y: 20,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="sintra" ref={sectionRef}>
            <div className="container">
                <Box className="sintra_wrapper"
                sx={{
                    flexDirection:{xs:'column', md:'row'}
                }}>
                    <Box className="image" ref={imageRef} sx={{ opacity: 0, transform: "translateX(-80px) scale(0.9)",
                        width:{xs:'100%', md:'100%'}
                     }}>
                        <img src="/images/Adobe_Express_file_1.png" alt="Sintra AI" />
                    </Box>
                    <div className="text" ref={textRef} style={{ opacity: 0, transform: "translateY(20px)" }}>
                        <h3>Sintra. World’s first AI employees, personalized for your business. Making work feel like play.</h3>
                        <p>Available 24/7. The only employees who love overtime. Always ready to save your most valuable asset—your time.</p>
                        <p>Speaks in 150+ languages. Go global—select, communicate, and complete your work in over 150 languages.</p>
                        <p>Available 24/7. The only employees who love overtime. Always ready to save your most valuable asset—your time.</p>
                        <div className="animated-border-box">
                            <a className="btn"> Get Started
                                <SvgIcon />
                            </a>
                        </div>
                    </div>
                </Box>
            </div>
        </section>
    );
};

export default SintraSection;
