import { useState, useRef, useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import SvgIcon from "../../shared/icons/rightarrow";

export default function IconTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef<HTMLDivElement | null>(null);
  
  const tabs = [
    {
      title: "Vizzy",
      subtitle: "Manages all your visual needs",
      description: [
        "From improving quality, removing backgrounds, to creating custom images, Vizzy handles all aspects of image preparation and optimization for your professional needs.",
        "With advanced AI tools, you can refine your images with ease.",
        "Seamless integration with your workflow ensures efficiency."
      ],
      image: "images/image%20122%20(2).png",
      tabimg: "images/image%20122.png"
    },
    {
      title: "Automate",
      subtitle: "Handles repetitive tasks",
      description: [
        "Schedule posts, auto-reply to messages, and manage your workflows effortlessly with Automate.",
        "Automate customer interactions and improve response times.",
        "Optimize efficiency by reducing manual tasks."
      ],
      image: "images/tb2.png",
      tabimg: "images/tbh2.png"
    },
    {
      title: "Analyze",
      subtitle: "Get insights from your data",
      description: [
        "Track engagement, performance, and key metrics with real-time analytics powered by AI.",
        "Gain valuable insights to refine your strategies.",
        "Make data-driven decisions with confidence."
      ],
      image: "images/tb3.png",
      tabimg: "images/tbh3.png"
    },  {
      title: "Vizzy",
      subtitle: "Manages all your visual needs",
      description: [
        "From improving quality, removing backgrounds, to creating custom images, Vizzy handles all aspects of image preparation and optimization for your professional needs.",
        "With advanced AI tools, you can refine your images with ease.",
        "Seamless integration with your workflow ensures efficiency."
      ],
      image: "images/image%20122%20(2).png",
      tabimg: "images/image%20122.png"
    },
    {
      title: "Automate",
      subtitle: "Handles repetitive tasks",
      description: [
        "Schedule posts, auto-reply to messages, and manage your workflows effortlessly with Automate.",
        "Automate customer interactions and improve response times.",
        "Optimize efficiency by reducing manual tasks."
      ],
      image: "images/tb2.png",
      tabimg: "images/tbh2.png"
    },
    {
      title: "Analyze",
      subtitle: "Get insights from your data",
      description: [
        "Track engagement, performance, and key metrics with real-time analytics powered by AI.",
        "Gain valuable insights to refine your strategies.",
        "Make data-driven decisions with confidence."
      ],
      image: "images/tb3.png",
      tabimg: "images/tbh3.png"
    },  {
      title: "Vizzy",
      subtitle: "Manages all your visual needs",
      description: [
        "From improving quality, removing backgrounds, to creating custom images, Vizzy handles all aspects of image preparation and optimization for your professional needs.",
        "With advanced AI tools, you can refine your images with ease.",
        "Seamless integration with your workflow ensures efficiency."
      ],
      image: "images/image%20122%20(2).png",
      tabimg: "images/image%20122.png"
    },
    {
      title: "Automate",
      subtitle: "Handles repetitive tasks",
      description: [
        "Schedule posts, auto-reply to messages, and manage your workflows effortlessly with Automate.",
        "Automate customer interactions and improve response times.",
        "Optimize efficiency by reducing manual tasks."
      ],
      image: "images/tb2.png",
      tabimg: "images/tbh2.png"
    },
    {
      title: "Analyze",
      subtitle: "Get insights from your data",
      description: [
        "Track engagement, performance, and key metrics with real-time analytics powered by AI.",
        "Gain valuable insights to refine your strategies.",
        "Make data-driven decisions with confidence."
      ],
      image: "images/tb3.png",
      tabimg: "images/tbh3.png"
    },  {
      title: "Vizzy",
      subtitle: "Manages all your visual needs",
      description: [
        "From improving quality, removing backgrounds, to creating custom images, Vizzy handles all aspects of image preparation and optimization for your professional needs.",
        "With advanced AI tools, you can refine your images with ease.",
        "Seamless integration with your workflow ensures efficiency."
      ],
      image: "images/image%20122%20(2).png",
      tabimg: "images/image%20122.png"
    },
    {
      title: "Automate",
      subtitle: "Handles repetitive tasks",
      description: [
        "Schedule posts, auto-reply to messages, and manage your workflows effortlessly with Automate.",
        "Automate customer interactions and improve response times.",
        "Optimize efficiency by reducing manual tasks."
      ],
      image: "images/tb2.png",
      tabimg: "images/tbh2.png"
    },
    {
      title: "Analyze",
      subtitle: "Get insights from your data",
      description: [
        "Track engagement, performance, and key metrics with real-time analytics powered by AI.",
        "Gain valuable insights to refine your strategies.",
        "Make data-driven decisions with confidence."
      ],
      image: "images/tb3.png",
      tabimg: "images/tbh3.png"
    }
  ];

  useEffect(() => {
    if (tabListRef.current) {
      const activeTabElement = tabListRef.current.querySelector(".Mui-selected");
      if (activeTabElement instanceof HTMLElement) {
        activeTabElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      }
    }
  }, [activeTab]);

  return (
    <section className="icon_tab_main">
      <div className="container">
        <div className="h_text">
          <h3>Automates work. Even while you sleep.</h3>
          <p>Automate tasks with business automation tools—create social media posts, respond to comments, and more.</p>
        </div>
        <div className="icon_tabs">
          <div className="tab_sec">
            <Box ref={tabListRef} className="tab_list tabMenu" sx={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap" }}>
              <Tabs
                value={activeTab}
                onChange={(_, newValue) => setActiveTab(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
              >
                {tabs.map((tab, index) => (
                  <Tab
                    key={index}
                    icon={<img src={tab.tabimg} alt="Tab Icon" />}
                  />
                ))}
              </Tabs>
            </Box>
          </div>
          <div className="tabContents">
            {tabs.map((tab, index) => (
              <div key={index} className={`tabContent ${activeTab === index ? "active" : ""}`}>
                <div className="tabContent_item">
                  <div className="text">
                    <h3>{tab.title}</h3>
                    <h4>{tab.subtitle}</h4>
                    {tab.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                    <div className="animated-border-box">   <a className="btn ">  Get Started
                      <SvgIcon/>
                      </a>
                      </div>
                  </div>
                  <div className="image">
                    <img src={tab.image} alt={tab.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
