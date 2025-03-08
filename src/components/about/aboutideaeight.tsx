import { useEffect, useRef } from 'react';
import { Box, Stack, Typography } from "@mui/material";
import RippleButton from "../../shared/button";
import { gsap } from 'gsap';

const BusinessToolsUIeight = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;
        const subtitle = subtitleRef.current;
        const cards = cardRefs.current;

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
                            { 
                                opacity: 1, 
                                y: 0, 
                                duration: 0.8, 
                                ease: 'power3.out' 
                            }
                        )

                        // Animate subtitle
                        subtitle && tl.fromTo(subtitle, 
                            { opacity: 0, y: 50 }, 
                            { 
                                opacity: 1, 
                                y: 0, 
                                duration: 0.8, 
                                ease: 'power3.out' 
                            },
                            '-=0.5'
                        )

                        // Animate cards with stagger
                        tl.fromTo(cards, 
                            { 
                                opacity: 0, 
                                y: 100, 
                                scale: 0.9, 
                                rotationX: -20 
                            }, 
                            { 
                                opacity: 1, 
                                y: 0, 
                                scale: 1, 
                                rotationX: 0, 
                                duration: 0.8, 
                                stagger: 0.2, 
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

    // Callback ref to populate cardRefs
    const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
        if (el) {
            cardRefs.current[index] = el;
        }
    };

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
                <Typography 
                    ref={titleRef}
                    variant="h4" 
                    color="#000510"  
                    textAlign={'center'} 
                    fontWeight={500}
                >
                    From ideas to built-in tools. It's all here.
                </Typography>
                
                <Typography 
                    ref={subtitleRef}
                    variant="body1"  
                    color="#000510" 
                    textAlign={'center'}  
                    maxWidth={800} 
                    my={2}
                >
                    Personalized Solutions. Employees adapt to your business needs, providing personalized solutions, from AI for marketing to personal growth and everything in between.
                </Typography>

                <Stack 
                    direction={{md:'row'} }
                    justifyContent={'space-between'} 
                    alignItems={'flex-start'} 
                    width={'100%'} 
                    gap={5} 
                    my={0} 
                    mt={10}
                >
                    {[
                        {
                            title: "Buddy",
                            subtitle: "Your business strategist, on AI.",
                            image: "images/abt9.png"
                        },
                        {
                            title: "Retryl",
                            subtitle: "All you employees, on AI",
                            image: "images/abt10.png"
                        }
                    ].map((card, index) => (
                        <Box 
                            key={index} 
                            component={'div'} 
                            flex={1}
                        >
                            <Box 
                                ref={setCardRef(index)}
                                component={'div'}
                                sx={{
                                    '& img':{
                                        maxWidth:'100%', 
                                        objectFit:'fill'
                                    },
                                    display:'flex', 
                                    flexDirection:'column', 
                                    gap:2, 
                                    background:'#F5F5F5',
                                    padding:4, 
                                    borderRadius:4, 
                                    justifyContent:'center', 
                                    alignItems:'center',
                                    pb:0
                                }}
                            >
                                <Typography 
                                    color="#BF4C06" 
                                    textAlign={'center'}
                                >
                                    {card.title}
                                </Typography>
                                
                                <Typography 
                                    variant="h5" 
                                    color="#000510" 
                                    fontWeight={500} 
                                    textAlign={'center'}
                                >
                                    {card.subtitle}
                                </Typography>
                              
                                <Box mb={4}>
                                    <RippleButton text={"Try Now"} link={""} />
                                </Box>

                                <img 
                                    src={card.image} 
                                    alt={`${card.title} illustration`} 
                                    style={{maxWidth:'100%', height:280}}
                                />
                            </Box>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Box>
    )
}

export default BusinessToolsUIeight;