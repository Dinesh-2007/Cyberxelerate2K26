"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CodingContest = () => {
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
                Coding Contest
              </span>
            </h1>
            <p
              className={cn(
                "text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 font-mono animate-fade-up",
                isVisible && "is-visible"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              The Coding Contest is designed to assess participants' problem-solving abilities, logical thinking, and coding efficiency under time constraints. Think logically. Code efficiently. Compete confidently. 🚀💻
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
                src="/coding-contest-poster.png"
                alt="Coding Contest Poster"
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
                📌 Event Structure
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The contest consists of <span className="font-bold">one round</span> with <span className="font-bold">5 problems:</span>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><span className="font-semibold">Easy</span> – 2</li>
                <li><span className="font-semibold">Medium</span> – 2</li>
                <li><span className="font-semibold">Hard</span> – 1</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                🖥 Platform
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The competition will be conducted on <span className="font-bold">HackerRank.</span>
              </p>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                ⏱ Duration & Timing
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Duration:</span> <span className="font-bold">1½ to 2 hours</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <span className="font-semibold">Timing:</span> <span className="font-bold">10:30 AM – 12:00 PM</span>
              </p>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                👥 Team Size
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <span className="font-semibold">Individual participation</span> or <span className="font-semibold">teams of up to 2 members</span> are allowed.
              </p>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                🏆 Scoring & Results
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The final <span className="font-bold">HackerRank leaderboard</span> will be considered for result declaration.
              </p>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                🚫 Rules & Fair Play
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Malpractice of any kind</span> is <span className="font-bold">strictly prohibited.</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Use of <span className="font-bold">AI tools</span> or any <span className="font-bold">unfair means</span> will lead to <span className="text-red-500 font-bold">immediate disqualification.</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The decision of the <span className="font-bold">organizers will be final and binding.</span>
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

export default CodingContest;
