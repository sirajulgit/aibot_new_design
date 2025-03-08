import { useEffect, useRef } from 'react';
import { Box, Stack, Typography } from "@mui/material";
import RippleButton from "../../shared/button";
import { gsap } from 'gsap';

const BusinessToolsUIseven = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const image = imageRef.current;
        const textContainer = textContainerRef.current;
        const button = buttonRef.current;

        // Intersection Observer to check if section is in viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animation timeline
                        const tl = gsap.timeline();

                        // Animate image from left
                        image && tl.fromTo(image, 
                            { opacity: 0, x: -100, scale: 0.9 }, 
                            { 
                                opacity: 1, 
                                x: 0, 
                                scale: 1, 
                                duration: 1, 
                                ease: 'power3.out' 
                            }
                        )

                        // Animate text container from right
                        textContainer && tl.fromTo(textContainer, 
                            { opacity: 0, x: 100, scale: 0.9 }, 
                            { 
                                opacity: 1, 
                                x: 0, 
                                scale: 1, 
                                duration: 1, 
                                ease: 'power3.out' 
                            },
                            '-=0.7' // overlap with image animation
                        )

                        // Animate button with a pop effect
                        button && tl.fromTo(button, 
                            { opacity: 0, scale: 0.5 }, 
                            { 
                                opacity: 1, 
                                scale: 1, 
                                duration: 0.6, 
                                ease: 'back.out(1.7)' 
                            },
                            '-=0.5'
                        );
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        // Observe the section
        if (section) {
            observer.observe(section);
        }

        // Cleanup
        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <Box 
            ref={sectionRef}
            component={'div'} 
            sx={{py:6, background:'white'}}
        >
            <Box 
                component={'div'} 
                className="container" 
                display={{xs:'block', md:'flex'}} 
                justifyContent={'center'} 
                alignItems={'center'} 
                flexDirection={'column'} 
                px={4}
            >
                <Stack 
                    direction={{md:'row'} }
                    justifyContent={'space-between'} 
                    alignItems={'flex-start'} 
                    width={'100%'} 
                    gap={5} 
                    my={0} 
                    mt={10}
                >
                    <Box component={'div'} flex={2} textAlign={'center'}>
                        <img 
                            ref={imageRef}
                            src="images/abt8.png" 
                            alt="Vizzy AI Assistant" 
                            style={{ width:'90%'}}
                        />
                    </Box>
                    
                    <Box component={'div'} flex={1.5}>
                        <Box 
                            ref={textContainerRef}
                            component={'div'}
                            sx={{
                                '& img':{
                                    maxWidth:'100%', 
                                    objectFit:'fill'
                                },
                                display:'flex', 
                                flexDirection:'column', 
                                gap:4
                            }}
                        >
                            <Typography 
                                variant="h4" 
                                color="#000510" 
                                fontWeight={500}
                            >
                                Vizzy, generate a festive image for our holiday marketing.
                            </Typography>
                            
                            <Typography 
                                variant="body2" 
                                color="#000510" 
                                fontSize={18}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                            </Typography>
                            
                            <Box ref={buttonRef}>
                                <RippleButton text={"Try Now"} link={""} />
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default BusinessToolsUIseven;