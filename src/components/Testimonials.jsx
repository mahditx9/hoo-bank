import { feedback } from "../constants";
import styles from "../styles";
import FeedbackCard from "./FeedBackCard";
import { translateXLeft, translateXRight } from "../animations.js";
import { motion } from "framer-motion";
const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <motion.h2
        variants={translateXLeft}
        initial="hidden"
        whileInView="visible"
        className={styles.heading2}
      >
        What People are <br className="sm:block hidden" /> saying about us
      </motion.h2>
      <motion.div
        variants={translateXRight}
        initial="hidden"
        whileInView="visible"
        className="w-full md:mt-0 mt-6"
      >
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </motion.div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card, index) => (
        <FeedbackCard key={card.id} index={index} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
