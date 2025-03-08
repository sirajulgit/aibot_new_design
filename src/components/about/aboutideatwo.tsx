import { Box, Stack, Typography } from "@mui/material";
import RippleButtondefault from "../../shared/buttonripple";
import { ChangeEvent, useRef, useState} from "react";
import { gsap } from "gsap";
import { InView } from "react-intersection-observer";

const BusinessToolsUItwo = () => {
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
   
    const fileDropRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const subHeaderRef = useRef<HTMLDivElement>(null);

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files);
            setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles(prevFiles => [...prevFiles, ...droppedFiles]);
    };

    const handleBoxClick = () => {
        fileInputRef.current?.click();
    };

    const animateComponent = () => {
        // Create a timeline for coordinated animations
        const tl = gsap.timeline();

        // Animate header with a more dynamic entrance
        if (headerRef.current) {
            tl.fromTo(
                headerRef.current,
                { 
                    opacity: 0, 
                    y: 50,
                    scale: 0.9 
                },
                { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    duration: 0.8, 
                    ease: "back.out(1.7)"
                }
            );
        }

        // Animate subheader with a slight delay and bounce
        if (subHeaderRef.current) {
            tl.fromTo(
                subHeaderRef.current,
                { 
                    opacity: 0, 
                    y: 30,
                    rotationX: -15
                },
                { 
                    opacity: 1, 
                    y: 0,
                    rotationX: 0,
                    duration: 0.7, 
                    ease: "power2.out"
                },
                "-=0.4"
            );
        }

        // Animate the container elements
        if (containerRef.current) {
            tl.fromTo(
                containerRef.current.querySelectorAll('h4, h6, body1'),
                { 
                    opacity: 0, 
                    y: 50,
                    rotationY: 15
                },
                { 
                    opacity: 1, 
                    y: 0,
                    rotationY: 0,
                    duration: 0.8, 
                    stagger: 0.2,
                    ease: "power2.out"
                }
            );
        }

        // Animate the image with a more complex animation
        if (imageRef.current) {
            tl.fromTo(
                imageRef.current,
                { 
                    opacity: 0, 
                    scale: 0.8,
                    rotation: -10
                },
                { 
                    opacity: 1, 
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.3)"
                },
                "-=0.4"
            );
        }

        // Animate the file drop zone with a wobble effect
        if (fileDropRef.current) {
            tl.fromTo(
                fileDropRef.current,
                { 
                    opacity: 0, 
                    y: 30,
                    rotation: -2
                },
                { 
                    opacity: 1, 
                    y: 0,
                    rotation: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                },
                "-=0.3"
            )
            // Add a subtle wobble animation after initial entrance
            .to(fileDropRef.current, {
                rotation: 1,
                duration: 0.2,
                repeat: 3,
                yoyo: true,
                ease: "power1.inOut"
            });
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
                    sx={{py:15, background:'none'}}
                >
                    <Box 
                        ref={containerRef}
                        component={'div'} 
                        className="container" 
                        display={{xs:'block', md:'flex'}} 
                        justifyContent={'center'} 
                        alignItems={'center'} 
                        flexDirection={'column'}
                    >
                        <Typography 
                            ref={headerRef}
                            variant="h4" 
                            textAlign={'center'} 
                            fontWeight={500}
                        >
                            From ideas to built-in tools. It's all here.
                        </Typography>
                        <Typography 
                            ref={subHeaderRef}
                            variant="body1" 
                            textAlign={'center'} 
                            maxWidth={800} 
                            my={2}
                        >
                            Personalized Solutions. Employees adapt to your business needs, providing personalized solutions, from AI for marketing to personal growth and everything in between.
                        </Typography>

                        <Stack 
                            direction={{md:'row'}} 
                            justifyContent={'space-between'} 
                            width={'100%'} 
                            gap={10} 
                            my={5} 
                            mt={10}
                        >
                            <Box component={'div'} flex={1}>
                                <Box 
                                    component={'div'}
                                    sx={{
                                        '& img':{
                                            maxWidth:'100%', 
                                            objectFit:'fill'
                                        }
                                    }}
                                >
                                    <img 
                                        ref={imageRef}
                                        src="images/ab2.png" 
                                        alt="Business Tools"
                                    />
                                </Box>
                            </Box>

                            <Box component={'div'} flex={1}>
                                <Box 
                                    component={'div'}
                                    sx={{
                                        border:'1px solid rgba(255, 255, 255, 0.14)', 
                                        borderRadius:3, 
                                        p:4, 
                                        color:'#000510',
                                        display:'flex', 
                                        flexDirection:'column', 
                                        justifyContent:'flex-start', 
                                        alignItems:'center', 
                                        background:'#FFFFFF1C',
                                        '&':{
                                            '.comimg':{
                                                transform:'translateY(-50%)', 
                                                maxWidth:'100%'
                                            }
                                        }
                                    }}
                                >
                                    <Box component={'div'} height={80}>
                                        <img src="images/pic.png" className="comimg"/>
                                    </Box>
                                    <Typography variant="h6">
                                        Analyzing prompt...
                                    </Typography>
                                    <Typography variant="body2" mt={1}>
                                        Lorem Ipsum is simply dummy text of the printing and.
                                    </Typography>

                                    <Box
                                        ref={fileDropRef}
                                        sx={{
                                            width: 300, 
                                            minHeight: 150, 
                                            border: '2px dashed #718091', 
                                            p: 4, 
                                            borderRadius: 4, 
                                            mt: 2,
                                            display: 'flex', 
                                            justifyContent: 'center', 
                                            alignItems: 'center', 
                                            gap: 2,
                                            flexDirection: 'column',
                                            '&': {
                                                a: {
                                                    '&.btn': {
                                                        height: 48
                                                    }
                                                }
                                            }
                                        }}
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                    >
                                        <Box 
                                            component={'div'} 
                                            className="animated-border-box"        
                                            onClick={handleBoxClick}
                                        >
                                            <RippleButtondefault 
                                                text="Browse files" 
                                            />
                                            <input 
                                                type="file" 
                                                ref={fileInputRef}
                                                style={{ display: 'none' }}
                                                onChange={handleFileSelect}
                                                multiple
                                            />
                                        </Box>

                                        <Typography variant="body2" color="gray">
                                            or drag and drop files here
                                        </Typography>

                                        {/* Optional: Display selected files */}
                                        {files.length > 0 && (
                                            <Box>
                                                <Typography variant="body2" color="gray">
                                                    Selected Files: {files.map(file => file.name).join(', ')}
                                                </Typography>
                                            </Box>
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            )}
        </InView>
    )
}

export default BusinessToolsUItwo;