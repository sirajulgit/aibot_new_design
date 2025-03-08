import React, { useEffect, useRef, useState } from "react";

const reviews = [
  { name: "Alice Johnson", country: "US", date: "January 10, 2024", text: "Amazing platform! It has helped me automate my business like never before.", image: "images/bottom_icon.png" },
  { name: "Rajesh Kumar", country: "India", date: "February 2, 2024", text: "Highly recommend this service. The AI features are top-notch!", image: "images/bottom_icon.png" },
  { name: "Sophia Lee", country: "Canada", date: "March 5, 2024", text: "Customer support is very responsive. Love the automation tools.", image: "images/bottom_icon.png" },
  { name: "Liam Brown", country: "UK", date: "April 8, 2024", text: "A must-have tool for entrepreneurs. It's a game changer!", image: "images/user4.png" },
  { name: "Emma Wilson", country: "Australia", date: "May 15, 2024", text: "User-friendly and powerful features. I'm extremely satisfied!", image: "images/bottom_icon.png" },
  { name: "Carlos Rivera", country: "Mexico", date: "June 20, 2024", text: "Great product! Helped me increase productivity significantly.", image: "images/bottom_icon.png" },
  { name: "Yuki Tanaka", country: "Japan", date: "July 25, 2024", text: "Very useful AI-powered solutions. Worth every penny!", image: "images/bottom_icon.png" },
  { name: "Isabelle Dubois", country: "France", date: "August 30, 2024", text: "The marketing automation is incredible. Highly effective!", image: "images/bottom_icon.png" },
  { name: "David Smith", country: "US", date: "September 5, 2024", text: "I've tried many tools, but this one stands out. Excellent!", image: "images/bottom_icon.png" },
  { name: "Chen Wei", country: "China", date: "October 12, 2024", text: "Smooth experience with lots of features. Very happy!", image: "images/bottom_icon.png" },
];

const ReviewSlider: React.FC = () => {
  const reviewWrapperRef = useRef<HTMLDivElement>(null);
  const reviewWrappertwoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 = forward, -1 = reverse
  const [scrollPosition, setScrollPosition] = useState(0);
  const speed = 0.5; // Adjust speed

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
  
    let animationFrameId: number;
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 1 : -1);
      lastScrollY.current = currentScrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
  
    const animateScroll = () => {
      setScrollPosition((prev) => prev + speed * scrollDirection);
  
      if (reviewWrapperRef.current) {
        reviewWrapperRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      }
  
      if (reviewWrappertwoRef.current) {
        reviewWrappertwoRef.current.style.transform = `translateX(${scrollPosition}px)`; // Reverse direction
      }
  
      animationFrameId = requestAnimationFrame(animateScroll);
    };
  
    animationFrameId = requestAnimationFrame(animateScroll);
  
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, scrollDirection, scrollPosition]);
  
  return (
    <section className="review" ref={sectionRef}>
      <div className="container" style={{ width: "100vw", overflow: "hidden" }}>
        <div className="text">
          <h3>Employees of the month, every month.</h3>
          <p>
            With over 60,000 entrepreneurs from more than 100 countries, Sintra is
            the world's leading provider of business automation tools and AI-powered
            solutions.
          </p>
        </div>
        <div className="review_wrapper" style={{ whiteSpace: "nowrap", display: "flex", overflow: "hidden",  }}>
          <div ref={reviewWrapperRef} style={{ display: "flex", willChange: "transform", gap:20 }}>
            {[...Array(2)].map((_, groupIndex) => ( // Duplicating for infinite effect
              <React.Fragment key={groupIndex}>
                {reviews.map((review, index) => (
                  <div className="review_item" key={`${groupIndex}-${index}`} style={{ flexShrink: 0, width: "300px", margin: "0" }}>
                    <div className="review_top">
                      <div className="review_top_left">
                        <h4>{review.name}</h4>
                        <div className="stars">
                          <img src="images/stars.png" alt="rating stars" />
                        </div>
                      </div>
                      <div className="review_top_right">
                        <img src={review.image} alt={review.name} />
                      </div>
                    </div>
                    <p style={{
                        wordBreak:'break-word', whiteSpace:'wrap'
                    }}>"{review.text}"</p>
                    <div className="review_bottom">
                      <span>{review.date}</span> • <span>{review.name}</span> • <span>{review.country}</span>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>

          <div ref={reviewWrappertwoRef} style={{ display: "flex", willChange: "transform", gap:20, marginTop:20 }}>
            {[...Array(2)].map((_, groupIndex) => ( // Duplicating for infinite effect
              <React.Fragment key={groupIndex}>
                {reviews.map((review, index) => (
                  <div className="review_item" key={`${groupIndex}-${index}`} style={{ flexShrink: 0, width: "300px", margin: "0" }}>
                    <div className="review_top">
                      <div className="review_top_left">
                        <h4>{review.name}</h4>
                        <div className="stars">
                          <img src="images/stars.png" alt="rating stars" />
                        </div>
                      </div>
                      <div className="review_top_right">
                        <img src={review.image} alt={review.name} />
                      </div>
                    </div>
                    <p style={{
                        wordBreak:'break-word', whiteSpace:'wrap'
                    }}>"{review.text}"</p>
                    <div className="review_bottom">
                      <span>{review.date}</span> • <span>{review.name}</span> • <span>{review.country}</span>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
