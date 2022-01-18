// Definimos las animaciones

const searchBarAnimation = {
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  hidden: {
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export { searchBarAnimation };
