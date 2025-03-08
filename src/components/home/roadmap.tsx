import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SvgIcon from "../../shared/icons/rightarrow";
import { Box, Stack } from "@mui/material";

const RoadmapSection = () => {
    const textScrollRef = useRef<HTMLDivElement | null>(null);
    const progressRef = useRef<HTMLDivElement | null>(null);
    const [progressHeight, setProgressHeight] = useState(0);
    const scrollSpeed = 4; // Smooth scrolling speed
    let scrollAnimation: gsap.core.Tween | null = null;

    const startScrolling = () => {
        if (!textScrollRef.current) return;

        // Reset to top if already at the bottom
        if (textScrollRef.current.scrollTop >= textScrollRef.current.scrollHeight - textScrollRef.current.clientHeight) {
            textScrollRef.current.scrollTop = 0;
        }

        // Kill any previous animation
        if (scrollAnimation) scrollAnimation.kill();

        scrollAnimation = gsap.to(textScrollRef.current, {
            scrollTop: textScrollRef.current.scrollHeight - textScrollRef.current.clientHeight,
            duration: scrollSpeed, // Smooth speed
            ease: "linear",
            onUpdate: () => {
                if (!textScrollRef.current) return;
                const progress = (textScrollRef.current.scrollTop / (textScrollRef.current.scrollHeight - textScrollRef.current.clientHeight)) * 100;
                setProgressHeight(progress);
            },
            onComplete: () => {
                textScrollRef.current!.scrollTop = 0; // Reset when done
                startScrolling(); // Restart scroll
            }
        });
    };

    const stopScrolling = () => {
        if (scrollAnimation) scrollAnimation.kill();
    };

    useEffect(() => {
        const roadmapWrapper = document.querySelector(".roadmap_wrapper");

        const handleMouseEnter = () => {
            startScrolling(); // Start scrolling on hover every time
        };

        const handleMouseLeave = () => {
            stopScrolling(); // Stop scrolling when mouse leaves
        };

        roadmapWrapper?.addEventListener("mouseenter", handleMouseEnter);
        roadmapWrapper?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            roadmapWrapper?.removeEventListener("mouseenter", handleMouseEnter);
            roadmapWrapper?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section className="roadmap">
            <div className="container">
                <div className="text">
                    <h5>Roadmap</h5>
                    <h3>The tool that evolves and grows with you.</h3>
                    <p>Retryl is currently in Beta, and minor adjustments may be made to the plan in the future.</p>

                    <div className="animated-border-box">
                        <a className="btn">See Full Roadmap <SvgIcon/></a>
                    </div>
                </div>

                <div className="roadmap_wrapper" style={{ width: "100%" }}>
                    <Stack direction={{xs:'column-reverse', sm:'row'}} width={"100%"}>
                        <Stack sx={{ minWidth: "70%" }}>
                            <div className="roadmap_text" style={{ width: "100%" }}>
                                <div className="roadmap_text_item">
                                    <div className="side_icons">
                                        <div className="s_icon"><img src="images/Vector.png" alt="icon"/></div>
                                        <div className="progress_bar_wrapper">
                                            <div className="progress_bar">
                                                <div className="progress">
                                                    <div 
                                                        className="color" 
                                                        ref={progressRef} 
                                                        style={{ height: `${progressHeight}%`, transition: "height 0.3s ease-in-out" }}
                                                    ></div>
                                                    <div className="icon"><img src="images/small%20icon.png" alt="icon"/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="side_icons_text">
                                        <h6>Shipped in Beta</h6>
                                    </div>
                                </div>

                                {/* Scrollable Roadmap Items */}
                                <div
                                    className="side_icons_text textscroll ss-pt-15"
                                    ref={textScrollRef}
                                    style={{
                                        maxHeight: 330,
                                        overflowY: "auto",
                                        marginBottom: 30,
                                        marginLeft: 64,
                                        scrollbarWidth: "none",
                                    }}
                                >
                                    {Array(10).fill(null).map((_, index) => (
                                        <Box className="side_icons_text_item" key={index}
                                        sx={{
                                            flexDirection:{xs:'column', md:'row'},
                                            '&':{
                                                '.icon':{
                                                    marginRight:0
                                                }
                                            }
                                        }}>
                                            <div className="icon"><img src="images/image%20128.png" alt="icon"/></div>
                                            <div className="text_t">
                                                <h4>Text to website {index}</h4>
                                                <p>The first, but hardest step!</p>
                                            </div>
                                        </Box>
                                    ))}
                                </div>
                            </div>

                            <a className="btn">See Full Roadmap <SvgIcon/></a>
                        </Stack>

                        {/* Roadmap Image */}
                        <div className="roadmap_image">
                            <img src="images/image%20127.png" alt="roadmap"/>
                        </div>
                    </Stack>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
