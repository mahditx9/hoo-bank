import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";
import {
  translateYPos,
  translateXVariants,
  translateXLeft,
  translateXRight,
} from "../animations.js";
// import { useState } from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <motion.div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 ${styles.paddingX}`}
      >
        <motion.div
          variants={translateXVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </motion.div>

        <motion.div
          variants={translateXLeft}
          initial="hidden"
          animate="visible"
          className={`flex flex-col  justify-between w-full sm:flex-row`}
        >
          <h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span> Payments Methode
          </h2>
          <div className="ss:flex hidden md:mr-4 mr-0 mt-5">
            <GetStarted />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={translateYPos}
        initial="hidden"
        whileInView="visible"
        className={`flex-1  flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full  white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>

      <motion.div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </motion.div>
    </section>
  );
};

export default Hero;
