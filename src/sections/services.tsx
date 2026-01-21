import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Code2, Smartphone, Palette, Server } from "lucide-react";

const services = [
  {
    title: "Web App Development",
    icon: <Code2 className="h-6 w-6" />,
    description:
      "Responsive, performant web apps built with React, Next.js, and TypeScript.",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="h-6 w-6" />,
    description:
      "Cross-platform mobile apps with React Native, focused on smooth UX and performance.",
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="h-6 w-6" />,
    description:
      "Human-centered product design from wireframes to polished visuals in Figma.",
  },
  {
    title: "APIs & Backend (Node.js)",
    icon: <Server className="h-6 w-6" />,
    description:
      "Secure REST/GraphQL APIs, integrations, and data layers with Node.js, Postgres, MongoDB.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-300"
          >
            Services
          </motion.p>
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-gray-100"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How I can help
          </motion.h2>
          <motion.p
            className="max-w-2xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Fullstack delivery across web, mobile, and backend—covering design,
            build, and integration.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full">
                <CardHeader className="space-y-2">
                  <div className="inline-flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 w-11 h-11">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="#contact" className="hidden md:block">
            <Button>Let&apos;s work together</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
