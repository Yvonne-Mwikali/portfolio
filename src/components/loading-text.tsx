import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingText() {
  const [index, setIndex] = useState(0);
  const words = ["Loading", "Please wait", "Almost there"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      className="text-2xl font-bold text-primary"
    >
      {words[index]}
    </motion.div>
  );
}
