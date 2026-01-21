// Footer.tsx
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const navigation = ["home", "skills", "experience", "work", "contact"];

export function Footer() {
  return (
    <footer className="py-6 bg-muted dark:bg-card ">
      <div className="max-w-6xl   text-foreground mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Me */}
          <div>
            <h2 className="text-xl font-semibold ">About Me</h2>
            <p className="mt-4 text-sm">
              I'm a passionate developer with experience in creating dynamic and user-friendly applications. I love exploring new technologies and
              bringing ideas to life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold ">Quick Links</h2>
            {navigation.map(item => (
              <ul className="mt-4 space-y-2" key={item}>
                <li>
                  <a href={`/#${item}`} className="hover:underline">
                    {item}
                  </a>
                </li>
              </ul>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold ">Contact</h2>
            <ul className="mt-4 space-y-2">
              <li>
                Email:{""}
                <a href="mailto:yvonnemwikali162@gmail.com" className="hover:text-white hover:underline">
                  yvonnemwikali162@gmail.com
                </a>
              </li>
              <li>Location: Beren, moi university</li>
              <li>
                <div className="flex space-x-4 mt-2">
                  <a href="https://wa.me/+254796808579" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaWhatsapp className="w-5 h-5 hover:text-white" />
                  </a>
                  <a href="https://x.com/YvonneMwikali01" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaXTwitter className="w-5 h-5 hover:text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/yvonne-mwikali/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FiLinkedin className="w-5 h-5 hover:text-white" />
                  </a>
                  <a href="https://github.com/Yvonne-Mwikali" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FiGithub className="w-5 h-5 hover:text-white" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Yvonne mwikali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
