// SkillsPage.tsx

import { motion } from "framer-motion";
import { SkillCard } from "../components";
import { featuredSkills } from "../data";
import { Link, useLocation } from "react-router-dom";

export function SkillsPage() {
  const location = useLocation();
  const isPortfolioPage = location.pathname === "/portfolio";
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard name={skill.name} imageUrl={skill.imageUrl} />
            </motion.div>
          ))}
        </div>
        {!isPortfolioPage && (
          <div className="flex justify-center mt-10">
            <Link
              to="/portfolio"
              className="text-sm font-semibold text-blue-600 dark:text-blue-300 hover:underline"
            >
              See full stack & projects →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
