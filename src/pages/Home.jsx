import React from 'react';
import Articles from 'src/components/Articles';
import Follow from 'src/components/Follow';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import LookProfessional from 'src/components/LookProfessional';
import Office from 'src/components/Office';
import RequestFree from 'src/components/RequestFree';
import ServiceCleaning from 'src/components/ServiceCleaning';
import ServiceWorks from 'src/components/ServiceWorks';
import What from 'src/components/What';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}>
        <ServiceWorks />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}>
        <ServiceCleaning />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}>
        <LookProfessional />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}>
        <Follow />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}>
        <Office />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}>
        <What />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}>
        <Articles />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}>
        <RequestFree />
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;
