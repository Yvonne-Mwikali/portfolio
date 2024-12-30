import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { ScrollArea } from "../components/ui/scroll-area";
import { Toast, ToastProvider } from "../components/ui/toast";
import { Button } from "../components/ui/button";
import { ProjectInterface, projects } from "../data/projects";

const categories = ["all", "webs", "uiux", "graphics"];
const PROJECTS_PER_PAGE = 8;

export function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectInterface | null>(null);
  const [toastProject, setToastProject] = useState<ProjectInterface | null>(null);
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + PROJECTS_PER_PAGE);
  };

  return (
    <div id="work" className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Recent Work</h1>

      <Tabs
        value={selectedCategory}
        onValueChange={(value) => {
          setSelectedCategory(value);
          setVisibleCount(PROJECTS_PER_PAGE);
        }}
        className="mb-8 justify-center flex items-center"
      >
        <TabsList className="grid w-auto grid-cols-4 gap-2">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="capitalize w-auto text-center px-3 flex-1 mb-2 rounded-md text-sm"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProjects.map((project) => (
          <Card
            key={project.id}
            className="relative cursor-pointer transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setToastProject(project)}
            onMouseLeave={() => setToastProject(null)}
            onClick={() => setSelectedProject(project)}
          >
            <CardContent className="p-0">
              <img src={project.image} alt={project.title} className="w-full rounded-lg h-48 object-cover" />
              <div className="p-4 ">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.category}</p>
              </div>
            </CardContent>
            {toastProject && toastProject.id === project.id && (
              <ToastProvider>
                <Toast className="absolute top-0 left-0 right-0 m-2 bg-opacity-75 text-white p-2 rounded">
                  <p className="text-sm">{project.title}</p>
                </Toast>
              </ToastProvider>
            )}
          </Card>
        ))}
      </div>

      {visibleCount < filteredProjects.length && (
        <div className="mt-8 text-center">
          <Button variant="default" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      )}

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <DialogDescription>{selectedProject?.category}</DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[80vh]">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full h-auto mb-4 object-contain"
            />
            <p className="mb-4">{selectedProject?.description}</p>
            {selectedProject?.liveLink && (
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View Live Project
              </a>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
