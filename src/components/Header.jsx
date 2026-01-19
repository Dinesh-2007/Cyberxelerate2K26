import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); // Close menu on selection (for mobile)
  };

  // Optimized Scroll Handler
  const handleScroll = useCallback(() => {
    const scrollPos = window.scrollY;
    const sections = ["home", "about", "events", "guidelines", "contact"];

    let foundSection = "";
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const offsetTop = el.offsetTop - 120; // Adjust for navbar height
        if (scrollPos >= offsetTop && scrollPos < offsetTop + el.offsetHeight) {
          foundSection = section;
          break;
        }
      }
    }

    if (foundSection && foundSection !== activeSection) {
      setActiveSection(foundSection);
    }

    setIsVisible(scrollPos < lastScrollY || scrollPos < 80);
    setLastScrollY(scrollPos);
  }, [lastScrollY, activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 transition-transform duration-300 ease-in-out border-b-2 border-gray-300 dark:border-gray-600 backdrop-blur-md 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link
          href="/"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/rmkcet-logo.png"
            className="h-14 w-14 object-cover animate-pulse"
            alt="RMKCET Logo"
          />
        </Link>
        <div className="hidden xl:flex flex-col">
          <span className="self-center text-xl font-normal whitespace-nowrap dark:text-white">
            R.M.K College of Engineering and Technology
          </span>
          <span className="self-center text-sm whitespace-nowrap dark:text-gray-300 font-serif">
            Department of Computer Science and Engineering (Cyber Security)
          </span>
        </div>

        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <Link
            href="/CyberXelerate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 hover:scale-105 transition-transform font-serif"
            >
              <div>Event Poster</div>
            </HoverBorderGradient>
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 rounded-lg md:border-0">
            {["home", "about", "events", "guidelines", "contact"].map((id) => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  onClick={() => handleSectionClick(id)}
                  className={`block py-2 px-4 rounded-full transition-colors duration-200 ease-in-out font-serif
                    ${
                      activeSection === id
                        ? "border-2 border-gray-400 dark:border-gray-600"
                        : "text-gray-900"
                    }
                    dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
