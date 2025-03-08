import { useEffect, useRef } from 'react';
import { Box, Stack, Typography } from "@mui/material";
import { gsap } from 'gsap';

const BusinessToolsUISix = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;
        const subtitle = subtitleRef.current;
        const stats = statsRef.current;
        const image = imageRef.current;

        // Intersection Observer to check if section is in viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animation timeline
                        const tl = gsap.timeline();

                        // Animate title
                        title && tl.fromTo(title, 
                            { opacity: 0, y: 50 }, 
                            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
                        )
                        // Animate subtitle
                        subtitle && tl.fromTo(subtitle, 
                            { opacity: 0, y: 50 }, 
                            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                            '-=0.5'
                        )
                        // Animate image
                        image && tl.fromTo(image, 
                            { opacity: 0, scale: 0.8 }, 
                            { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' },
                            '-=0.5'
                        )
                        // Animate stats boxes
                        if (stats) {
                            const statBoxes = stats.querySelectorAll(':scope > div');
                            tl.fromTo(statBoxes, 
                                { opacity: 0, y: 50, scale: 0.9 }, 
                                { 
                                    opacity: 1, 
                                    y: 0, 
                                    scale: 1, 
                                    duration: 0.6, 
                                    stagger: 0.2,
                                    ease: 'power3.out'
                                },
                                '-=0.5'
                            );
                        }
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
            sx={{py:10, background:'none'}}
        >
            <Box 
                component={'div'} 
                className="container" 
                display={{xs:'block', md:'flex'}} 
                justifyContent={'center'} 
                alignItems={'center'} 
                flexDirection={'column'}
            >
                <Typography 
                    ref={titleRef} 
                    color="#FF7F41" 
                    mb={2}
                    textAlign={'center'}
                >
                    Built on expert knowledge
                </Typography>
                
                <Typography 
                    ref={subtitleRef} 
                    variant="h4"  
                    textAlign={'center'} 
                    fontWeight={500}
                >
                    The sharpest executive assistant you'll ever meet, on AI.
                </Typography>
                
                <Typography 
                    variant="body1" 
                    textAlign={'center'}  
                    maxWidth={800} 
                    my={2}
                >
                    Vizzy is equipped with deep learning algorithms, providing solutions that are both creative and efficient, making everyday tasks smoother and more enjoyable.
                </Typography>

                <Stack 
                    direction={{md:'row'} }
                    alignItems={'center'} 
                    justifyContent={'space-between'} 
                    width={'100%'} 
                    gap={1} 
                    my={5} 
                    mt={10}
                >
                    <Box component={'div'} flex={1}>
                        <Box 
                            ref={imageRef}
                            component={'div'}
                            sx={{
                                '& img':{
                                    maxWidth:'100%', 
                                    objectFit:'fill'
                                },
                                textAlign:'right'
                            }}
                        >
                            <img src="images/abt6.png" alt="Vizzy AI Assistant"/>
                        </Box>
                    </Box>

                    <Box component={'div'} flex={2}>
                        <Stack 
                            ref={statsRef}
                            direction={'row'} 
                            flexWrap={'wrap'} 
                            gap={2.5} 
                            justifyContent={'center'}
                        >
                            {[
                                { prefix: "Up to", value: "3x", description: "More contextual outputs than other AI apps*" },
                                { prefix: "Powered by", value: "3.5 Sonnet", description: "More contextual outputs than other AI apps*" },
                                { prefix: "More than", value: "26k", description: "More contextual outputs than other AI apps*" },
                                { prefix: "Up to", value: "190ms", description: "More contextual outputs than other AI apps*" }
                            ].map((stat, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        boxShadow:'0px 5px 24px 0px rgba(255, 255, 255, 0.4196078431) inset', 
                                        borderRadius:4, 
                                        p:4,
                                        width:300, 
                                        height:200, 
                                        display:'flex', 
                                        justifyContent:'center',
                                        alignItems:'flex-start', 
                                        flexDirection:'column',
                                        gap:2
                                    }}
                                >
                                    <Typography color="#FF7F41">{stat.prefix}</Typography>
                                    <Typography variant="h4" fontWeight={500}>{stat.value}</Typography>
                                    <Typography variant="body2" fontSize={16} color="gray">
                                        {stat.description}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default BusinessToolsUISix;