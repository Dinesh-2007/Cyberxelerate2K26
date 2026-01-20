"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Event2 = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative w-full py-20 md:py-40 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br">
        {/* Background Glow */}
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#413e65]"></div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Top Section: Welcome & Description*/}
          <div className="text-center py-8">
            <h1
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-up",
                isVisible && "is-visible"
              )}
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
                HackOff{" "}
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-transparent bg-clip-text">
                  CTF
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
              Engage in thrilling cyber challenges at our College Symposium's
              Capture The Flag (CTF) event! Test your hacking skills, solve
              puzzles, and decode hidden messages to capture the hidden flag.
              Join fellow tech enthusiasts for an adrenaline-fueled competition
              where strategy and wit prevail.
            </p>
          </div>

          {/* Middle Section: Event Poster & Rules and Guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start py-8">
            {/* Event Poster */}
            <div
              className={cn(
                "flex justify-center animate-slide-left",
                isVisible && "is-visible"
              )}
            >
              <Image
                src="/ctf-poster.jpg"
                alt="HackOff CTF Poster"
                width={400}
                height={600}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md object-cover rounded-2xl shadow-lg dark:shadow-black/50"
                loading="lazy"
              />
            </div>

            {/* Rules and Guidelines */}
            <div
              className={cn(
                "p-5 md:p-10 rounded-2xl shadow-lg dark:shadow-black/50 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 font-mono animate-slide-right",
                isVisible && "is-visible"
              )}
            >
              <h2 className="text-2xl font-bold underline text-gray-800 dark:text-gray-200 mb-4">
                🖥 Event Format
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The competition consists of a <span className="font-semibold">single round</span> featuring a variety of <span className="font-bold">CTF challenges</span> across different difficulty levels.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Challenges may include domains such as <span className="font-semibold">web security, cryptography, forensics, reverse engineering,</span> and <span className="font-semibold">basic exploitation.</span>
              </p>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                🛠 Platform
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The event will be conducted on the <span className="font-bold">CTFd platform.</span>
              </p>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                ⏱ Duration & Timing
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Timing:</span> <span className="font-bold">10:00 AM – 12:30 PM</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Teams must submit flags within the allotted time to earn points.
              </p>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                👥 Team Structure
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Each team must consist of <span className="font-bold">exactly 3 members.</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cross-team collaboration is <span className="font-bold">not allowed.</span>
              </p>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                🏆 Scoring & Results
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Points are awarded for each <span className="font-semibold">correctly submitted flag.</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The <span className="font-bold">CTFd leaderboard</span> at the end of the event will be considered final for declaring winners.
              </p>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                🚫 Rules & Fair Play
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Flag sharing, collaboration</span> between teams, or any form of <span className="font-bold">malpractice</span> is strictly prohibited.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Use of <span className="font-bold">unauthorized tools, scripts,</span> or <span className="font-bold">unfair practices</span> will result in <span className="text-red-500 font-bold">immediate disqualification.</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The decision of the organizers and judges will be <span className="font-bold">final and binding.</span>
              </p>

              <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">
                🎯 Objective
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Demonstrate your cybersecurity skills, teamwork, and strategic thinking by solving challenges efficiently and ethically.
              </p>
              <p className="mt-4 font-bold text-purple-500">
                Think like a hacker. Act like a professional. Capture the flag. 🚩🔐
              </p>
            </div>
          </div>

          {/* Bottom Section: Register Now Button */}
          <div className="text-center py-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeeB8xfGUF1n6Wtu9m8CyYFCNduUaddHKwNVj4w2LyWZ8YlQw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all hover-scale animate-fade-up",
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

export default Event2;
