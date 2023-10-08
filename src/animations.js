const translateYPos = {
  hidden: { translateY: 100, opacity: 0 },
  visible: {
    translateY: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.3,
      ease: "linear",
    },
  },
};
const translateXVariants = {
  hidden: { translateX: -200, opacity: 0 },
  visible: {
    translateX: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "linear" },
  },
};
const translateXRight = {
  hidden: { translateX: 150, opacity: 0 },
  visible: {
    translateX: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "linear", delay: 0.2 },
  },
};
const translateXLeft = {
  hidden: { translateX: -150, opacity: 0 },
  visible: {
    translateX: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "linear", delay: 0.2 },
  },
};
const InfoVariants = {
  hidden: { translateX: -200, opacity: 0 },
  visible: {
    translateX: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: "linear",
    },
  },
};

const showUp = {
  hidden: {
    opacity: "0",
    y: 90,
  },
  visible: {
    opacity: "1",
    y: 0,
  },
};

export {
  translateYPos,
  translateXVariants,
  InfoVariants,
  showUp,
  translateXLeft,
  translateXRight,
};
