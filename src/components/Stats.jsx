import { motion } from "framer-motion";
import styles from "../styles";
import { stats } from "../constants/index";
function Stats() {
  const statsBoxVariants = {
    hidden: { translateY: 150, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: { duration: 0.4, when: "beforeChildren" },
    },
  };
  const statsVariants = {
    hidden: { translateY: 150, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
    },
  };
  return (
    <motion.section
      variants={statsBoxVariants}
      initial="hidden"
      animate="visible"
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat, index) => (
        <motion.div
          variants={statsVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: `${0.3 + (index + 1) / 10}` }}
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </motion.section>
  );
}

export default Stats;
