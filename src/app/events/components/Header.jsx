"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed z-20 top-0 left-0 w-full transition-transform duration-300 ease-in-out border-b border-gray-300 dark:border-gray-600 backdrop-blur-md bg-white/70 dark:bg-gray-900/80 shadow-lg ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="flex justify-between items-center sm:px-24 px-8 py-4 sm:w-11/12 mx-auto">
        {/* Left Side: Logo and Information */}
        <div className="flex items-center space-x-6">
          <Link
            href="/events"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/rmkcet-logo.png"
              className="h-10 w-10 object-cover animate-pulse"
              alt="RMKCET Logo"
            />
          </Link>
          <div className="hidden md:flex flex-col lg:pl-12 font-serif">
            <span className="text-lg whitespace-nowrap dark:text-white font-normal ">
              R.M.K College of Engineering and Technology
            </span>
            <span className="text-sm whitespace-nowrap dark:text-gray-300">
              Department of Computer Science and Engineering (Cyber Security)
            </span>
          </div>
        </div>

        {/* Right Side: Back Button */}
        <button
          className="p-[3px] relative group"
          onClick={() => router.back()}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-sm   transition-all"></div>
          <div className="px-6 py-2  bg-white dark:bg-gray-900 rounded-lg relative text-gray-900 dark:text-white transition-all duration-300 group-hover:text-indigo-500 dark:group-hover:text-purple-400 font-medium">
            Back
          </div>
        </button>
      </header>
    </nav>
  );
};

export default Header;
