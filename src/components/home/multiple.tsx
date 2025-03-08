import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MultipleWorkspaces = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);

    const isInViewport = (element: HTMLDivElement) => {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current && isInViewport(sectionRef.current)) {
                gsap.to(sectionRef.current, { opacity: 1, y: 0, duration: 0.6 });
                gsap.to(imageRef.current, { scale: 1.1, rotate: 0, duration: 0.6, transformOrigin: "center" });
            } else {
                gsap.to(sectionRef.current, { opacity: 0, y: 50, duration: 0.6 });
                gsap.to(imageRef.current, { scale: 1, rotate: 5, duration: 0.6, transformOrigin: "center" });
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="multiple_workspaces" ref={sectionRef}>
            <div className="container">
                <div className="multiple_workspaces_wrapper">
                    <div className="text">
                        <h3>Multiple workspaces. One AI Team.</h3>
                        <div className="text_item_wrapper">
                            <div className="text_item">
                                <h4>Up to 5 profiles</h4>
                                <p>Create up to 5 business profiles, each customized to your specific goals and powered by AI employees ready to deliver results.</p>
                            </div>
                            <div className="text_item">
                                <h4>Share workspace with the team</h4>
                                <p>Collaborate with your team in real-time. Share your workspace to make business insights accessible to everyone involved.</p>
                            </div>
                        </div>
                    </div>
                    <div className="image" ref={imageRef}>
                        <img src="images/image%20124.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MultipleWorkspaces;