import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Box } from "@mui/material";

const IntegrateTools = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // First animate the wrapper
                    gsap.to(wrapperRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out",
                        onComplete: () => {
                            // Once wrapper is shown, animate text and image
                            gsap.to(imageRef.current, {
                                opacity: 1,
                                y: 0,
                                duration: 0.8,
                                ease: "power2.out"
                            });
                            gsap.to(textRef.current, {
                                opacity: 1,
                                x: 0,
                                duration: 0.8,
                                ease: "power2.out"
                            });

                            // Animate list items with stagger effect
                            gsap.fromTo(
                                listItemsRef.current.filter(Boolean),
                                { opacity: 0, y: 30, scale: 0.8 },
                                { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "elastic.out(1, 0.5)" }
                            );
                        }
                    });
                } else {
                    // Reset animation when out of viewport
                    gsap.set(wrapperRef.current, { opacity: 0, y: 50 });
                    gsap.set(imageRef.current, { opacity: 0, y: 100 });
                    gsap.set(textRef.current, { opacity: 0, x: 70 });
                    gsap.set(listItemsRef.current.filter(Boolean), { opacity: 0, y: 30, scale: 0.8 });
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        
        return () => observer.disconnect();
    }, []);

    return (
        <section className="intregate_tools" ref={sectionRef}>
            <div className="container">
                <Box className="intregate_tools_wrapper" ref={wrapperRef} sx={{ 
                    opacity: 0,
                    transform: "translateY(50px)",
                    flexDirection:{xs:'column', md:'row'} }}>
                    <Box className="text" ref={textRef} sx={{ 
                        opacity: 0, 
                        transform: "translateX(70px)",
                        width:{xs:'100%', md:'60%'}
                        }}>
                        <h3>Integrates with your favorite tools.</h3>
                        <p>
                            Streamline business processes by bringing your favorite tools and AI employees together. AI for business makes working with integrations easier than ever.
                        </p>

                        <ul>
                            {[
                                "images/image%20103.png",
                                "images/image%20105.png",
                                "images/image%20104.png",
                                "images/image%20109.png",
                                "images/image%20107.png",
                                "images/image%20110.png",
                                "images/image%20108.png",
                                "images/image%20106.png"
                            ].map((src, index) => (
                                <li 
                                    key={index} 
                                    ref={(el) => { if (el) listItemsRef.current[index] = el; }}
                                >
                                    <img src={src} alt={`Tool ${index + 1}`} />
                                </li>
                            ))}
                        </ul>
                    </Box>
                    <Box className="image" ref={imageRef} sx={{ opacity: 0, transform: "translateY(100px)",
                        display:{xs:'none', md:'inline-block'}
                     }}>
                        <img src="images/image%20102.png" alt="Illustration" />
                    </Box>
                </Box>
            </div>
        </section>
    );
};

export default IntegrateTools;
