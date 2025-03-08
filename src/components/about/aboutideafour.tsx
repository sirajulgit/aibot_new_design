import { Box, Stack, Typography } from "@mui/material";
import RippleButton from "../../shared/button";
import { useRef } from "react";
import { gsap } from "gsap";
import { InView } from "react-intersection-observer";

const BusinessToolsUIfour = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftImageRef = useRef<HTMLImageElement>(null);
    const centerTextRef = useRef<HTMLDivElement>(null);
    const rightImageRef = useRef<HTMLImageElement>(null);

    const animateComponent = () => {
        const tl = gsap.timeline();

        // Animate left image
        if (leftImageRef.current) {
            tl.fromTo(
                leftImageRef.current,
                { 
                    opacity: 0, 
                    x: -100,
                    rotation: -10,
                    scale: 0.8
                },
                { 
                    opacity: 1, 
                    x: 0,
                    rotation: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );
        }

        // Animate center text section
        if (centerTextRef.current) {
            tl.fromTo(
                centerTextRef.current.children,
                { 
                    opacity: 0, 
                    y: 50,
                    rotationX: -15
                },
                { 
                    opacity: 1, 
                    y: 0,
                    rotationX: 0,
                    duration: 0.7, 
                    stagger: 0.2,
                    ease: "power2.out"
                },
                "-=0.4"
            );
        }

        // Animate right image
        if (rightImageRef.current) {
            tl.fromTo(
                rightImageRef.current,
                { 
                    opacity: 0, 
                    x: 100,
                    rotation: 10,
                    scale: 0.8
                },
                { 
                    opacity: 1, 
                    x: 0,
                    rotation: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.5"
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
                    sx={{py:15, background:'none', pb:0}}
                >
                    <Box 
                        ref={containerRef}
                        component={'div'} 
                        className="container-fluid" 
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
                            <Box component={'div'} flex={1}>
                                <img 
                                    ref={leftImageRef}
                                    alt="" 
                                    src="images/abt6.png" 
                                    style={{
                                        transform:'translateY(-150px)'
                                    }}
                                />
                            </Box>
                            <Box 
                                ref={centerTextRef}
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
                                    <Typography variant="h4" fontWeight={500}>
                                        Vizzy, generate a festive image for our holiday marketing.
                                    </Typography>
                                    <Typography variant="body2" fontSize={18}>
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
                                pr={10}
                            >
                                <img 
                                    ref={rightImageRef}
                                    src="images/abt5.png" 
                                    alt="" 
                                    style={{ width:'100%'}}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            )}
        </InView>
    )
}

export default BusinessToolsUIfour;