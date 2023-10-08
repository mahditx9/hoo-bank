/* eslint-disable react/prop-types */
import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";
import { motion } from "framer-motion";
import { translateYPos } from "../animations.js";
const featureVariants = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <motion.div
      variants={featureVariants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.5,
        delayChildren: `${0.2 + (index + 1) / 10}}s`,
      }}
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card hover:pl-[44px] ease-linear duration-300`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </motion.div>
  );
};

const Business = () => (
  <section id="features" className={layout.section}>
    <motion.div
      variants={translateYPos}
      initial="hidden"
      whileInView="visible"
      className={layout.sectionInfo}
    >
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle the
        money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>

      <Button styles={`mt-10`} />
    </motion.div>

    <motion.div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>
  </section>
);

export default Business;
