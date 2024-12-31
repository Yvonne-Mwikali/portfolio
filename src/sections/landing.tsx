import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const hero = "../hero.JPEG";

export function Landing() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.6,
      },
    },
  };

  return (
    <div id="home" className=" bg-background text-foreground overflow-hidden">
      <motion.main
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col-reverse items-center py-2 md:py-12 md:grid md:grid-cols-2 gap-y-8 md:gap-12 lg:items-start"
      >
        <div className="space-y-6 text-center md:text-left ml-4">
          <motion.div variants={itemVariants} className="space-y-4 ml-6">
            <motion.p variants={itemVariants} className="text-sm text-muted-foreground">
              I am Yvonne
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
              SOFTWARE DEVELOPER +<br /> UI/UX DESIGNER
            </motion.h1>
            <motion.p variants={itemVariants} className="text-muted-foreground">
              I break down complex user experience problems to create integrity-focused solutions that connect.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 ml-6"
          >
            <motion.a href="/resume.pdf" download variants={itemVariants}>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download my resume
              </Button>
            </motion.a>
            <motion.div variants={itemVariants} className="flex space-x-4">
              <Link
                to="https://github.com/Yvonne-Mwikali"
                rel="noopener noreferrer"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <FiGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                to="https://www.linkedin.com/in/yvonne-mwikali/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <FiLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                to="https://x.com/YvonneMwikali01"
                rel="noopener noreferrer"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <FaXTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 text-center md:text-left ml-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-3xl font-bold">1</h2>
              <p className="text-sm text-muted-foreground">Year Experience</p>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-3xl font-bold">6+</h2>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-3xl font-bold">10+</h2>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </motion.div>
          </motion.div> */}
        </div>

        <motion.div variants={imageVariants} className="relative mx-auto max-w-md mt-8 md:mt-0">
          <div
            className={`relative aspect-square overflow-hidden rounded-3xl transition-transform duration-500 ${
              isHovered ? "rotate-0" : "-rotate-6"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={hero} alt="Profile" width={500} height={500} className="object-cover" />
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
