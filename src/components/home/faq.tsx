import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box
} from "@mui/material";
import SvgIcon from "../../shared/icons/rightarrow";
import Footerbtn from "../../shared/footerbtn";
import RippleButton from "../../shared/button";


const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is MUI?", answer: "MUI (Material-UI) is a popular React UI framework with pre-designed components." },
    { question: "How do I use an Accordion?", answer: "You can use the Accordion component from MUI to create expandable sections." },
    { question: "Is MUI free to use?", answer: "Yes, MUI is an open-source project available under the MIT license." }
  ];

  return (
    
    <Container >

<div className="Questions">
    <div className="container">
    <div className="question_wrapper">
        <div className="text">
        <h3>Questions?<br/>
Let’s clear things up.</h3>
            <p>Yes, we understand—AI-powered solutions, business automation tools, AI for marketing, AI for customer support… a lot of big words can get confusing.</p>
            <p>We’re here to make it clear—check out our FAQs, and if you still feel the need to ask AI questions, Cassie is always ready to answer.</p>
        </div>
        <div className="accordion">
         <div className="accordion-container">
            
         <Box sx={{ mt: 4 }}>
       
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={activeIndex === index}
            onChange={() => toggleAccordion(index)}
          >
            <AccordionSummary expandIcon={<SvgIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>  
</div>
        </div>
        </div>    
        <div className="question_richtxt">
        <h3>Try the new creative tool that everyone
is raving about.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae mollis ligula. Pellentesque tempus, magna vel consectetur semper, purus nulla volutpat lacus.</p>
            
            

    {/* <div className="animated-border-box"
    style={{
      transform:'scale(3)', marginTop:60
    }}>   <a className="btn footerbutton">  Start For Free
            <SvgIcon/>
            </a>
            </div> */}
          <Box sx={{
            display:{xs:'none', sm:'block'}
          }}>
            <Footerbtn/>
            </Box>
            <Box sx={{
            display:{xs:'block', sm:'none'},
            transform:'scale(1.2)'
          }}>
            <RippleButton text={"Start For Free"} link={""}></RippleButton>
            </Box>
        </div>
    </div>


    </div>
     
    </Container>
  );
};

export default FAQAccordion;
