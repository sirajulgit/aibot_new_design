import { useEffect, useRef } from "react";
import gsap from "gsap";

const Pricing = () => {
  const pricingRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
        if (card) observer.observe(card); // Ensure card is not null before observing
      });
      

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="pricing" ref={pricingRef}>
      <div className="container">
        <div className="text">
          <h3>Site Pricing</h3>
          <p>Retryl is currently in Beta, and minor adjustments may be made to the plan in the future.</p>
        </div>
        <div className="pricing_wrapper">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`pricing_item ${index === 1 ? "pricing_item_active" : ""}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
                    <div className="animated-border-box">
                      
                    <div className="pricing_item_wrapper">
                <div className="pricing_header">
                  <h5>Starter</h5>
                  <h3>$300 <span>/month</span></h3>
                  <p>Simple and powerful</p>
                </div>
                <div className="pricing_button">
                  <a href="#" className="pricing_btn">
                    Choose Starter Plan <span><img src="images/Vector%209.png" alt="" /></span>
                  </a>
                </div>
                <h4>Get Started today:</h4>
                <div className="pricing_body">
                  <div className="pricing_body_item">
                    <p>Profit Target</p>
                    <p>$6,000</p>
                  </div>
                  <div className="pricing_body_item">
                    <p>Max Position</p>
                    <p>10 contracts</p>
                  </div>
                  <div className="pricing_body_item">
                    <p>Daily Loss Limit</p>
                    <p>None</p>
                  </div>
                  <div className="pricing_body_item">
                    <p>Trailing Max Drawdown</p>
                    <p>$3,000</p>
                  </div>
                  <div className="pricing_body_item">
                    <p>Drawdown Mode</p>
                    <p>EOD</p>
                  </div>
                </div>
                <a href="#" className="view_all_btn">
                  View all <span><img src="images/Vector%209%20(2).png" alt="" /></span>
                </a>
              </div> </div>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
