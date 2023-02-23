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

import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Header />
      <ServiceWorks />
      <ServiceCleaning />
      <LookProfessional />
      <Follow />
      <Office />
      <What />
      <RequestFree />
      <Footer />
    </>
  );
};

export default Home;
