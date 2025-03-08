import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,

  Box,

} from "@mui/material";
import SvgIcon from "../../shared/icons/rightarrow";


const FAQAccordionwhite: React.FC = () => {
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
    


<Box className="Questions"
sx={{background:'white', pt:10, '&':{
  '.text':{
  h3:{ color:'#000510'},
  p:{color:'#000510'}
}
}}}>
    <div className="container" style={{background:'none'}}>
    <div className="question_wrapper">
        <div className="text">
      
        <Typography variant="h4" color="#000510" fontWeight={500} mb={3}>Questions? <br />Let’s clear things up.</Typography>
        <Typography variant="body2" color="#000510" className="whitefaq">Yes, we understand—AI-powered solutions, business automation tools, AI for marketing, AI for customer support… a lot of big words can get confusing.</Typography>
        <Typography variant="body2" color="#000510" className="whitefaq">We’re here to make it clear—check out our FAQs, and if you still feel the need to ask AI questions, Cassie is always ready to answer.</Typography>
           
        </div>
        <div className="accordion">
         <div className="accordion-container">
            
         <Box sx={{ mt: 4 }}>
       
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={activeIndex === index}
            onChange={() => toggleAccordion(index)}
            className="whiteaccr"
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
    
    </div>


    </Box>
     

  );
};

export default FAQAccordionwhite;
