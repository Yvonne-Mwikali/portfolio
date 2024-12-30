import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  imageUrl: string;
}

export function SkillCard({ name, imageUrl }: SkillCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-20 h-20 mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <motion.p
        className="font-semibold text-sm text-gray-800 text-nowrap dark:text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {name}
      </motion.p>
    </motion.div>
  );
}
