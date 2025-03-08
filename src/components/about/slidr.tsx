
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Box, Typography } from "@mui/material";



interface Slide {
  id: number;
  img: string;
  icon:string;
  title: string;
  desc:string;
  dectitle:string
}

const slides: Slide[] = [
  {
    id: 1,
    icon: "images/abticon1.png",
    img:"images/abtdesc1.png",
    title: "Birthday Organizer can organize a birthday and create a plan",
    desc: "",
    dectitle:""
   
  },

  {
    id: 2,
    icon: "images/abticon1.png",
    img:"",
    title: "Birthday Organizer can organize a birthday and create a plan",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    dectitle:"Mark's 60th Birthday Bash Plan"
   
  },

  {
    id: 3,
    icon: "images/abticon1.png",
    img:"images/abtdesc1.png",
    title: "Birthday Organizer can organize a birthday and create a plan",
    desc: "",
    dectitle:""
   
  },

  {
    id: 4,
    icon: "images/abticon1.png",
    img:"",
    title: "Birthday Organizer can organize a birthday and create a plan",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    dectitle:"Mark's 60th Birthday Bash Plan"
   
  },

  {
    id: 5,
    icon: "images/abticon1.png",
    img:"images/abtdesc1.png",
    title: "Birthday Organizer can organize a birthday and create a plan",
    desc: "",
    dectitle:""
   
  },

  {
    id: 6,
    icon: "images/abticon1.png",
    img:"",
    title: "Birthday Organizer can organize a birthday and create a plan",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    dectitle:"Mark's 60th Birthday Bash Plan"
   
  },

];

const FromIdeasSectionabt: React.FC = () => {
  return (

    <section className="from_ideas relative  py-16 " style={{paddingBottom:'160px'}}>
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
          navigation ={false}
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
                position:'relative', overflow:'hidden',  boxShadow:'0px 5px 24px 0px rgba(255, 255, 255, 0.4196078431) inset', borderRadius:3, p:3, 
              }}>
                <Typography variant="body2" fontSize={14} textAlign={'center'} mb={1}>{slide.title}</Typography>

                <Box component={'div'} p={2} sx={{
                  background:'url(images/bgcont.png) no-repeat',
                  backgroundSize:'100% ',
                  backgroundPosition:'top center',
                  display:'flex', justifyContent:'center', flexDirection:'column',
                  mt:'60px',
                 
                  '&':{
                    '.slideicon':{
                      mt:'-50px',
                      mx:'auto',
                      height:60
                    }
                  }
                }}>
                 
                  <img src={slide.icon} className="slideicon"/>
                  {slide.dectitle &&
                  <Typography mt={3} fontSize={12}>
                    {slide.dectitle}
                  </Typography>
                  }

                  {slide.desc &&
                  <Typography fontSize={12} color="gray" mt={1} sx={{
                    height:138,
                    overflow:'hidden',
                  }}>
                    {slide.desc}
                  </Typography>
                  }

                  {slide.img && 
                  <Box mt={3} height={166} overflow={'hidden'}>
                    <img src={slide.img} style={{
                      maxHeight:'100%', display:'block', margin:'0 auto'
                    }} /></Box>
                  }
                </Box>
                
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Box>
        </div>
       
        </section>
 
  );
};

export default FromIdeasSectionabt;
