import { Box } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import RippleButton from "../../shared/button";
import MoonIcon from "../../shared/icons/moon";
import StarsIcon from "../../shared/icons/stars";

const HomeRes = () =>{
    gsap.registerPlugin(ScrollTrigger);
    const moonbg = useRef(null);

// stars

 


    const heroRef =  useRef<HTMLDivElement>(null);
      const topIconRef = useRef(null);
      const heroTextRef = useRef(null);

  
      const initialFrames = 10; // Frames for initial animation
  const additionalFrames = 5; // One frame for each text item animation
  const totalFrames = initialFrames + (additionalFrames * 3); 
// Generate image paths for all sequences
const sequenceFrames = [
  ...Array.from({ length: initialFrames }, (_, i) => `/images/frames/${initialFrames - i}.png`),
  `/images/other/1.png`,  // First text section frame
  `/images/other/2.png`,  // Second text section frame
  `/images/other/3.png`,   // Third text section frame
  `/images/other/4.png`,  // First text section frame
  `/images/other/5.png`,  // Second text section frame
  `/images/other/6.png` ,  // Third text section frame
  `/images/other/7.png`,  // First text section frame
  `/images/other/8.png`,  // Second text section frame
  `/images/other/9.png`,   // Third text section frame
  `/images/other/10.png`,  // First text section frame
  `/images/other/11.png`,  // Second text section frame
  `/images/other/12.png` ,  // Third text section frame
  `/images/other/13.png`,  // First text section frame
  `/images/other/14.png`,  // Second text section frame
  `/images/other/15.png`   // Third text section frame
  
];

// Final frames for each text section
const finalFrames = {
  text1: '/images/other/1.png',
  text2: '/images/other/6.png',
  text3: '/images/other/11.png'
  
};

const [currentFrame, setCurrentFrame] = useState(0);
const [activeTextItems, setActiveTextItems] = useState([false, false, false]);
const [currentSection] = useState(null);
const [animationComplete, setAnimationComplete] = useState(false);
const [progressHeight, setProgressHeight] = useState('0%');
const containerRef = useRef(null);
const textBoxHeights = ['10%', '50%', '100%'];
  useEffect(() => {
    // Preload images
    [...sequenceFrames, ...Object.values(finalFrames)].forEach(path => {
      const img = new Image();
      img.src = path;
    });


    const container = containerRef.current;
    
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=300%",
      pin: true,
      pinSpacing: true,
      scrub: .2,
      onUpdate: (self) => {
        const progress = self.progress;
        const frame = Math.floor(progress * (totalFrames - 1));
        
        // Handle frame sequence
        if (frame < totalFrames) {
          setCurrentFrame(frame);
          setAnimationComplete(false);
        } else {
          setAnimationComplete(true);
        }

        // Determine active text sections
        if (frame >= initialFrames) {
          const activeIndex = Math.floor((frame - initialFrames) / additionalFrames);
          setActiveTextItems(prev => prev.map((_, index) => index <= activeIndex));
          setProgressHeight(textBoxHeights[activeIndex] || '0%');
         
        }
       
      }
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [totalFrames]);

  const isLastFrame = currentFrame >= initialFrames - 1;


  // text

  gsap.registerPlugin(TextPlugin);


    const textRef = useRef(null);
    const fullText = "An 80's celestial punk 3D design studio portfolio.";
    useEffect(() => {
      if (!textRef.current) return;
      
      // Function to create the complete typing animation cycle
      const createTypingAnimation = () => {
        const tl = gsap.timeline({
          repeat: -1, // Makes the timeline repeat indefinitely
          repeatDelay: 1 // Adds a 1-second delay between iterations
        });
        
        // Type the text in (left to right)
        tl.to(textRef.current, {
          duration: 3,
          text: {
            value: fullText,
            type: "diff"  // This makes GSAP add characters one by one from left to right
          },
          ease: "none"
        });
        
        // Pause at the end with blinking cursor
        tl.to(textRef.current, {
          // borderRight: '4px solid #ff00ff',
          duration: 0.5,
          repeat: 4,
          yoyo: true
        });
        
        // Delete the text right to left - we'll do this by slicing the string
        let currentText = fullText;
        for (let i = fullText.length; i >= 0; i--) {
          tl.to(textRef.current, {
            duration: 0.05,  // Quick character deletion
            text: currentText.substring(0, i),
            ease: "none"
          });
          currentText = currentText.substring(0, i);
        }
        
        // Pause before restarting
        tl.to(textRef.current, {
          // borderRight: '4px solid #ff00ff',
          duration: 0.5,
          repeat: 2,
          yoyo: true
        });
        
        return tl;
      };
      
      // Create and play the animation
      const masterTimeline = createTypingAnimation();
      
      // Cleanup function to kill the animation when component unmounts
      return () => {
        masterTimeline.kill();
      };
    }, []);
// gsap end
      

return(
    
    <div id="innermain"
    style={{position:'relative', overflow:'hidden'}}>
    <Box component={'div'}
    ref={moonbg}
    sx={{
        background:'radial-gradient(60.42% 60.42% at 50.02% 60.42%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 69.42%, rgba(255, 255, 255, 0.08) 75.33%, rgba(255, 255, 255, 0.13) 80.42%, rgba(255, 255, 255, 0.31) 86.39%, rgba(255, 255, 255, 0.57) 92.19%, #FFF 100%)',
        borderRadius:'100%', opacity:'0.4', mixBlendMode:'luminosity', boxShadow:'0px -20px 40px 0px rgba(255, 255, 255, 0.60)',
        mt:6, position:'absolute', width:'100%',
        '& svg':{
            width:'100%'
        }
    }}>
     <MoonIcon/>

    </Box>
    <Box component={'div'} className="stars" sx={{ position:'absolute', left:0, top:-100, zIndex:1, width:'100%', height:600, }}>
     <StarsIcon/>
    </Box>


    {/* <!--        1st section--> */}
    <section className="hero_banner" ref={heroRef}
    style={{
     background:'none', position:'relative', zIndex:9, 
    }}>
     <div className="container"
  style={{
    width:'1200px', overflow:'hidden'
  }}>
    <div className="hero_banner_wrapper">
      <div className="top_icon" ref={topIconRef}
     >
        <img src="images/top_icon.png" alt="Top Icon"
         style={{
            marginTop:'-45px'
          }} />
      </div>
      <div className="hero_text" ref={heroTextRef}>
        <h2>Your employees, on AI.</h2>
        <p>Build, grow, and scale your business with a team that never sleeps.</p>
        <div className="icon_txt">
          <span className="icon">
            <img src="images/small%20icon.png" alt="Small Icon" />
          </span>
          <span
          style={{
            color: '#fff',
        textShadow: '0 0 10pxrgb(255, 255, 255), 0 0 20pxrgb(255, 255, 255)',
        display: 'block',
        borderRight: '4px solid transparent',
        padding: '1rem ',
        height:56, width:458, maxWidth:'100%'
          }}>
      <span 
      ref={textRef} 
      className="typing-text"
      style={{
        fontSize: '1rem',
        lineHeight:'normal',
        textAlign:'left',
        minHeight: '2.5rem', width:400, display:'block'
      }}
           ></span>
          </span>
         
        </div>
        <div className="animated-border-box">  
       <RippleButton text="Get Started" link="#" />
       </div>
      </div>

    </div>
  </div>

  <div ref={containerRef} className="ai_popeline" style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        width: '1200px',
        overflowX:'hidden',
        height: '100%'
      }}>
        <div className="ai_popeline_wrapper" style={{ 
          display: 'flex', 
          width: '100%',
          height: '100%'
        }}>
          <div className="text-section text" style={{
            width: '70%',
            padding: '0 40px',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: isLastFrame ? '0' : '-70%',
            overflow: 'hidden',
            opacity: 1,
            transition: 'all 1s ease'
          }}>
            <h6>AI Popeline</h6>
            <h3>Building sites, end-to-end.</h3>

            <div className="text_box_wrapper">
              <div className="progress_bar_wrapper">
                <div className="progress_bar">
                  <div className="progress" style={{ height: progressHeight }}>
                    <div className="color"></div>
                    <div className="icon">
                      <img src="images/small icon.png" alt="Small Icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-box">
                {[
                  {
                    title: "Analyzing prompt...",
                    description: "Available 24/7. The only employees who love overtime. Always ready to save your."
                  },
                  {
                    title: "Crafting designs...",
                    description: "Available 24/7. The only employees who love overtime. Always ready to save your."
                  },
                  {
                    title: "Tweak, iterate, publish!",
                    description: "Available 24/7. The only employees who love overtime. Always ready to save your."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`text_box_item ${activeTextItems[index] ? 'active' : ''}`}
                    style={{
                      transform: `translateX(${activeTextItems[index] ? '0' : '100px'})`,
                      opacity: activeTextItems[index] ? 1 : 0,
                      transition: 'all 0.5s ease',
                      transitionDelay: `${index * 0.2}s`
                    }}
                  >
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
                <div className="animated-border-box">  
                <RippleButton text="Get Started" link="#" />
                </div>
              </div>
            </div>
          </div>

          <Box className="bottom_icon" sx={{
            width: isLastFrame ? '40%' : '100%',
            height: '100%',
            position: 'relative',
            transition: 'all 0.5s'
          }}>
            <div className="sequence-container" style={{
              position: 'relative',
              width: '100%',
              height: '100%'
            }}>
              {!animationComplete ? (
                // Show frame sequence during initial animation
                sequenceFrames.map((path, index) => (
                  <img
                    key={path}
                    src={path}
                    alt={`Frame ${index + 1}`}
                    style={{
                      display: currentFrame === index ? 'block' : 'none',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'opacity 0.1s ease-in-out'
                    }}
                  />
                ))
              ) : (
                // Show final frames based on current section
                currentSection && (
                  <img
                    src={finalFrames[currentSection]}
                    alt={`${currentSection} final frame`}
                    className="otherimages"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />
                )
              )}
            </div>
          </Box>
        </div>
      </div>
    </div>
    </section>
    </div>
)
}

export default HomeRes;