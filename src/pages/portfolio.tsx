import { motion } from "framer-motion";
import { ContactUs, Services, WorkPage } from "../sections";
// import { Achievements } from "../sections";
import { skillCategories } from "../data/skills";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export function PortfolioPage() {
  return (
    <div className="space-y-16">
      <section className="bg-muted py-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-300"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mt-3 text-foreground"
          >
            Skills, projects, and achievements in one place
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl"
          >
            Fullstack delivery across React, Node.js, Next.js, and React
            Native—plus a design workflow grounded in Figma and Framer Motion.
          </motion.p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-300">
              Stack
            </p>
            <h2 className="text-3xl font-bold text-foreground">Core Skills</h2>
            <p className="text-muted-foreground mt-2">
              Grouped by category for a complete view.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((group) => (
            <Card key={group.category} className="h-full">
              <CardHeader>
                <CardTitle>{group.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-100"
                  >
                    {item}
                  </span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <Services />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <WorkPage />
      </div>

      {/* <div className="max-w-6xl mx-auto px-4">
        <Achievements />
      </div> */}

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <ContactUs />
      </div>
    </div>
  );
}
