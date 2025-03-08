
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Box,  Stack } from "@mui/material";
import RippleButton from "../../shared/button";


interface Slide {
  id: number;
  img: string;
  title: string;
  bgColor: string;
}

const slides: Slide[] = [
  {
    id: 1,
    img: "images/slider/1.png",
    title: "Review historical data for analysis.",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    img: "images/slider/2.png",
    title: "Optimize workflows with AI-driven insights.",
    bgColor: "bg-pink-500",
  },
  {
    id: 3,
    img: "images/slider/3.png",
    title: "Predict trends using machine learning models.",
    bgColor: "bg-blue-300",
  },
  {
    id: 4,
    img: "images/slider/4.png",
    title: "Enhance productivity with automation.",
    bgColor: "bg-orange-500",
  },
  {
    id: 5,
    img: "images/slider/1.png",
    title: "Review historical data for analysis.",
    bgColor: "bg-blue-500",
  },
  {
    id: 6,
    img: "images/slider/2.png",
    title: "Optimize workflows with AI-driven insights.",
    bgColor: "bg-pink-500",
  },
  {
    id: 7,
    img: "images/slider/3.png",
    title: "Predict trends using machine learning models.",
    bgColor: "bg-blue-300",
  },
  {
    id: 8,
    img: "images/slider/4.png",
    title: "Enhance productivity with automation.",
    bgColor: "bg-orange-500",
  },
];

const FromIdeasSection: React.FC = () => {
  return (

    <section className="from_ideas relative  py-16">
       <div className="container mx-auto px-4"
      style={{
        width:'100vw', overflow:'hidden'
      }}>
        <div className="text max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            From ideas to built-in tools. It's all here.
          </h3>
          <p className="text-gray-600">
            Personalized Solutions. Employees adapt to your business needs,
            providing personalized solutions, from AI for marketing to personal
            growth and everything in between.
          </p>
        </div>
        <Box className="slidercontainer" component={'div'} >
      <div className="w-full max-w-6xl mx-auto py-10" style={{ maxWidth: "100vw",  }}>
        <Swiper
          modules={[Navigation, Pagination, FreeMode, Autoplay]}
          spaceBetween={20}
          slidesPerView={2} 
          navigation
          pagination={false}
          freeMode={true} 
          grabCursor={true} 
          loop={true} 
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 }, 
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Box className="from_ideas_item ove" sx={{
                position:'relative', overflow:'hidden'
              }}>
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full object-cover rounded-lg "
                />
                <Box className="item_text"
                sx={{
                  position:'absolute', left:0, bottom:0, width:'100%', height:'auto', p:2
                }}>
                  <span>{slide.title}</span>
                  <h4>{slide.title}</h4>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Box>
        </div>
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} mt={3}>
           <div className="animated-border-box">  
           <RippleButton text="Explore More" link="#" />
           </div>
      </Stack>
        </section>
 
  );
};

export default FromIdeasSection;
