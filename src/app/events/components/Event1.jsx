"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ProjectXplosion = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative w-full py-20 md:py-40 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br">
        {/* Background Glow */}
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#595584]"></div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Top Section: Welcome & Description */}
          <div className="text-center py-8">
            <h1
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-up",
                isVisible && "is-visible"
              )}
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Project{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                  Xplosion
                </span>
              </span>
            </h1>
            <p
              className={cn(
                "text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 font-mono animate-fade-up",
                isVisible && "is-visible"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              Showcase your innovative ideas where creativity meets technology.
              Present your projects across various domains, compete with the best,
              and win exciting prizes!
            </p>
          </div>

          {/* Middle Section: Poster & Guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start py-8">
            {/* Event Poster */}
            <div
              className={cn(
                "flex justify-center animate-slide-left",
                isVisible && "is-visible"
              )}
            >
              <Image
                src="/project-poster.png"
                alt="ProjectXplosion Poster"
                width={400}
                height={600}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md object-cover rounded-2xl shadow-lg dark:shadow-black/50"
                loading="lazy"
              />
            </div>

            {/* Guidelines */}
            <div
              className={cn(
                "p-5 md:p-10 rounded-2xl shadow-lg dark:shadow-black/50 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 font-mono animate-slide-right",
                isVisible && "is-visible"
              )}
            >
              <h2 className="text-2xl font-bold underline text-gray-800 dark:text-gray-200 mb-4">
                Guidelines
              </h2>
              <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-semibold">Team Size:</span> 1 to 4 members.
                </li>
                <li>
                  <span className="font-semibold">Submission:</span> Upload your project as a{" "}
                  <span className="font-bold">PDF</span> via the provided Google Form.
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                Domains: (but not limited to)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Cyber Security, Blockchain & Web3, AI & ML, Sustainable Development,
                IoT, Data Science & Big Data
              </p>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                PDF Requirements:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Project Title, Proposed Solution, Methodology, Uniqueness & Innovation,
                Feasibility & Implementation Plan, Expected Outcomes & Impact
              </p>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                Rounds & Evaluation:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Preliminary:</span> Submit your PDF before{" "}
                <span className="font-bold">12th March 2025</span>. Selections are
                based on project uniqueness and technology used.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">
                  Final Round (17th March 2025):
                </span>{" "}
                Bring a <span className="font-bold">working prototype</span> and your
                presentation on a <span className="font-bold">pen drive</span> or via email.{" "}
                <span className="font-bold">Time:</span> 6 mins explanation, 2 mins demo, 2
                mins Q&A.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <span className="font-semibold">Mode:</span> Offline
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Venue:</span> Mechanical Block, 3rd floor seminar hall
              </p>
              <p className="mt-4 font-bold text-red-500">
                Exciting cash prizes for winners!
              </p>
            </div>
          </div>

          {/* Register Now Button */}
          <div className="flex justify-center py-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfsNP5BFWZgp9RNKsfEK-ZT9E6ghrpP5iHfJyPrXTtHIDDs-Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all hover-scale animate-fade-up",
                isVisible && "is-visible"
              )}
              style={{ transitionDelay: "400ms" }}
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectXplosion;
