import React from "react";
import Articles from "src/components/Articles";
import Follow from "src/components/Follow";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import LookProfessional from "src/components/LookProfessional";
import Office from "src/components/Office";
import RequestFree from "src/components/RequestFree";
import ServiceCleaning from "src/components/ServiceCleaning";
import ServiceWorks from "src/components/ServiceWorks";
import What from "src/components/What";
import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray("[data-animation]");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: section,
            start: "top center",
          },
          opacity: 1,
          duration: 1,
        }
      );
    });
  }, []);

  return (
    <div>
      <Header />
      <ServiceWorks />
      <ServiceCleaning />
      <LookProfessional />
      <Follow />
      <Office />
      <What />
      <Articles />
      <RequestFree />
      <Footer />
    </div>
  );
};

export default Home;
