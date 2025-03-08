import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Stack } from "@mui/material";

const AutomatesWork = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    const isInViewport = (element: HTMLDivElement) => {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };

    useEffect(() => {
        const handleScroll = () => {
            itemsRef.current.forEach((item, index) => {
                if (item && imagesRef.current[index]) {
                    if (isInViewport(item)) {
                        if (!gsap.isTweening(item)) {
                            gsap.to(item, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
                        }

                        if (!gsap.isTweening(item.querySelector(".item_text"))) {
                            gsap.to(item.querySelector(".item_text"), {
                                opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.3
                            });
                        }

                        if (!gsap.isTweening(imagesRef.current[index])) {
                            gsap.to(imagesRef.current[index], {
                                opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "power3.out", delay: 0.5
                            });
                        }
                    } else {
                        if (!gsap.isTweening(item)) {
                            gsap.to(item, { opacity: 0.3, y: 30, duration: 0.6, ease: "power1.out" });
                        }

                        if (!gsap.isTweening(item.querySelector(".item_text"))) {
                            gsap.to(item.querySelector(".item_text"), {
                                opacity: 0, x: -20, duration: 0.6, ease: "power1.out"
                            });
                        }

                        if (!gsap.isTweening(imagesRef.current[index])) {
                            gsap.to(imagesRef.current[index], {
                                opacity: 0, scale: 0.95, rotate: 5, duration: 0.6, ease: "power1.out"
                            });
                        }
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="automates_work">
            <div className="container">
                <div className="text">
                    <h3>Automates work. Even while you sleep.</h3>
                    <p>Automate tasks with business automation tools—create social media posts, respond to comments, and more.</p>
                </div>
                <div className="automates_work_wrapper" ref={wrapperRef}>
                    <div className="automates_work_item item_full" ref={el => { if (el) itemsRef.current[0] = el; }}>
                        <Stack direction={{xs:'column' , md:'row'}} sx={{
                            gap: 2,
                            '&':{
                                '.item_text':{
                                    width:{xs:'100%', md:'60%'}
                                },
                                '.item_img':{
                                    width:{xs:'100%', md:'40%'}
                                }
                            }
                        }}>
                        <div className="item_text">
                            <h3>Soshie, schedule social media posts for me</h3>
                            <p>Automate your social media game with AI for marketing. Write, create, and post content effortlessly with AI-powered solutions.</p>
                        </div>
                        <div className="item_img" ref={el => { if (el) imagesRef.current[0] = el; }}>
                            <img src="images/image%20111.png" alt="" />
                        </div>
                        </Stack>
                        
                    </div>
                    
                    <div className="automates_work_item item_half" ref={el => { if (el) itemsRef.current[1] = el; }}>
                        <div className="item_text">
                            <h3>Cassie, check my Facebook comments</h3>
                            <p>Engage your audience with business automation tools. Use AI for customer support to analyze comments and craft personalized responses.</p>
                        </div>
                        <div className="item_img" ref={el => { if (el) imagesRef.current[1] = el; }}>
                            <img src="images/image%20113.png" alt="" />
                        </div>
                    </div>
                    
                    <div className="automates_work_item item_half" ref={el => { if (el) itemsRef.current[2] = el; }}>
                        <div className="item_text">
                            <h3>Cassie, check my Facebook comments</h3>
                            <p>Engage your audience with business automation tools. Use AI for customer support to analyze comments and craft personalized responses.</p>
                        </div>
                        <div className="item_img" ref={el => { if (el) imagesRef.current[2] = el; }}>
                            <img src="images/image%20114.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AutomatesWork;
