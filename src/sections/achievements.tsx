import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";
import { achievements } from "../data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-300">
            Achievements
          </motion.p>
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-gray-100"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Certifications & Milestones
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A quick snapshot of completed programs and shipped work. Certificates can be attached as links when ready.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{item.title}</span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-300">{item.year}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700 dark:text-gray-200 flex-1 space-y-3">
                  <p>{item.description}</p>
                  {item.link && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        View certificate <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
