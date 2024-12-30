import { FiBriefcase, FiBook } from "react-icons/fi";
import { motion } from "framer-motion";
import { timelineData } from "../data/experience-education";

export function ExperienceEducation() {
  const renderTimelineSection = (type: "experience" | "education") => {
    const filteredData = timelineData.filter((item) => item.type === type);
    const title = type === "experience" ? "Experience" : "Education";
    const icon =
      type === "experience" ? <FiBriefcase className="text-primary" /> : <FiBook className="text-secondary" />;

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: type === "experience" ? 0 : 0.2 }}
        className="space-y-8"
        id="experience"
      >
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 relative"
            >
              <div className="absolute -left-10 mt-1.5 w-7 h-7 rounded-full bg-background border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                {icon}
              </div>
              <div className="bg-background text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <h4 className="text-lg text-muted-foreground mb-1">{item.organization}</h4>
                <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                <p className="text-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-foreground">Experience & Education</h1>
        </motion.header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {renderTimelineSection("experience")}
          {renderTimelineSection("education")}
        </div>
      </div>
    </section>
  );
}
