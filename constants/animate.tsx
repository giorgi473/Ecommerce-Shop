import { Variants } from "framer-motion";

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

export const productVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1, duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export const colorVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const priceVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.7, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } },
};

export const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
};
