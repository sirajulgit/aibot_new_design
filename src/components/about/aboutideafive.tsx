import { Box, Stack, Typography } from "@mui/material";
import RippleButton from "../../shared/button";
import { useRef } from "react";
import { gsap } from "gsap";
import { InView } from "react-intersection-observer";

const BusinessToolsUIfive = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const animateComponent = () => {
        const tl = gsap.timeline();

        // Animate text section
        if (textContainerRef.current) {
            tl.fromTo(
                textContainerRef.current.children,
                { 
                    opacity: 0, 
                    x: -50,
                    rotationY: -15
                },
                { 
                    opacity: 1, 
                    x: 0,
                    rotationY: 0,
                    duration: 0.7, 
                    stagger: 0.2,
                    ease: "power2.out"
                }
            );
        }

        // Animate image
        if (imageRef.current) {
            tl.fromTo(
                imageRef.current,
                { 
                    opacity: 0, 
                    x: 100,
                    rotation: 5,
                    scale: 0.9
                },
                { 
                    opacity: 1, 
                    x: 0,
                    rotation: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)"
                },
                "-=0.4"
            );
        }
    };

    return(
        <InView 
            onChange={(inView) => {
                if (inView) {
                    animateComponent();
                }
            }}
        >
            {({ ref }) => (
                <Box 
                    ref={ref}
                    component={'div'} 
                    sx={{py:10, background:'white'}}
                >
                    <Box 
                        ref={containerRef}
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
                            <Box 
                                ref={textContainerRef}
                                component={'div'} 
                                flex={1.5}
                            >
                                <Box 
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
                                    <Typography variant="h4" color="#000510" fontWeight={500}>
                                        Vizzy, generate a festive image for our holiday marketing.
                                    </Typography>
                                    <Typography variant="body2" color="#000510" fontSize={18}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                                    </Typography>
                                    <Box>
                                        <RippleButton text={"Try Now"} link={""}/>
                                    </Box>
                                </Box>
                            </Box>

                            <Box 
                                component={'div'} 
                                flex={2} 
                                textAlign={'center'}
                            >
                                <img 
                                    ref={imageRef}
                                    src="images/abt7.png" 
                                    alt="" 
                                    style={{ width:'90%'}}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            )}
        </InView>
    )
}

export default BusinessToolsUIfive;