"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CodeSprintOdyssey = () => {
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
              <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                Vibe{" "}
                <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
                  Coding
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
              Vibe Coding is a creative coding challenge where collaboration, innovation, and coding flow take center stage. Participants will work together to build solutions in a relaxed yet competitive environment.
            </p>
          </div>

          {/* Middle Section: Poster & Rules & Guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start py-8">
            {/* Event Poster */}
            <div
              className={cn(
                "flex justify-center animate-slide-left",
                isVisible && "is-visible"
              )}
            >
              <Image
                src="/codesprint-poster.jpg"
                alt="Vibe Coding Poster"
                width={400}
                height={600}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md object-cover rounded-2xl shadow-lg dark:shadow-black/50"
                loading="lazy"
              />
            </div>

            {/* Rules & Guidelines */}
            <div
              className={cn(
                "p-5 md:p-10 rounded-2xl shadow-lg dark:shadow-black/50 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 font-mono animate-slide-right",
                isVisible && "is-visible"
              )}
            >
              <h2 className="text-2xl font-bold underline text-gray-800 dark:text-gray-200 mb-4">
                📌 Event Structure
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <p>
                  <span className="font-semibold">Team Size:</span> <span className="font-bold">2–3 members</span> per team
                </p>
                <p>
                  <span className="font-semibold">Round Format:</span> <span className="font-bold">One round</span> consisting of <span className="font-bold">4 problem statements</span>
                </p>
                <p>
                  <span className="font-semibold">Duration:</span> <span className="font-bold">3 hours</span> of continuous coding
                </p>
              </div>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                🎯 Focus Areas
              </h3>
              <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 mb-6 ml-4">
                <li>• Creativity and originality</li>
                <li>• Logical thinking and implementation</li>
                <li>• Team collaboration and coding style</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                🏆 Evaluation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Solutions will be evaluated based on <span className="font-semibold">functionality, creativity, and overall execution.</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The <span className="font-bold">judges' decision will be final.</span>
              </p>

              <p className="mt-6 font-bold text-green-500">
                Code freely. Create boldly. Stay in the vibe. ✨💻🎶
              </p>
              <p className="mt-4 font-bold text-red-500">
                Exciting cash prizes for winners!
              </p>
            </div>
          </div>

          {/* Register Now Button */}
          <div className="flex justify-center py-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdJ4E6J_q49CSi5ahsx_a1JfN8KKFTq_52basjkKJ8D59Rchg/viewform"
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

export default CodeSprintOdyssey;
