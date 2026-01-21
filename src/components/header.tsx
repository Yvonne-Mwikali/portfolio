import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const navigation = ["home", "skills", "experience", "work", "contact"];
const logo = "../logo.png";
const logo2 = "../logo3.png";
export function Header() {
  const [theme, setTheme] = useState("light");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-blue backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex-row flex h-14 items-center justify-between">
        <a
          href="/#home"
          className="flex items-center space-x-2 ml-5 rounded-lg"
        >
          {theme === "dark" ? (
            <img src={logo} alt="personal logo" className="h-15 w-20 " />
          ) : (
            <img src={logo2} alt="personal logo" className="h-20 w-30 mt-4" />
          )}
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navigation.map((nav) => (
            <a
              key={nav}
              href={`/#${nav}`}
              className="transition-colors hover:text-primary"
            >
              {nav}
            </a>
          ))}
          <Link
            to="/portfolio"
            className="transition-colors hover:text-primary"
          >
            portfolio
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="/#contact" className="hidden sm:flex">
            <Button variant="default" className="hidden sm:flex">
              Hire Me
            </Button>
          </a>
          <Link to="/portfolio" className="hidden sm:flex">
            <Button variant="outline">Portfolio</Button>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleDrawer}
          >
            {isDrawerOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 w-full bg-background text-foreground z-40 transition-transform duration-300 ${
          isDrawerOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center py-1 px-4 border-b">
          {theme === "dark" ? (
            <img src={logo} alt="personal logo" className="h-15 w-20 " />
          ) : (
            <img src={logo2} alt="personal logo" className="h-20 w-30" />
          )}{" "}
          <Button variant="ghost" size="icon" onClick={closeDrawer}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <div className="flex flex-col space-y-6 py-2 px-4 text-center">
          {navigation.map((nav) => (
            <a
              key={nav}
              href={`/#${nav}`}
              className="text-lg font-medium hover:text-primary"
              onClick={closeDrawer}
            >
              {nav}
            </a>
          ))}
          <Link
            to="/portfolio"
            className="text-lg font-medium hover:text-primary"
            onClick={closeDrawer}
          >
            portfolio
          </Link>
          <a href="/#contact" onClick={closeDrawer}>
            <Button variant="default" className="w-full">
              Hire Me
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
