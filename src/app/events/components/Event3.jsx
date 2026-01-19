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
                CodeSprint{" "}
                <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
                  Odyssey
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
              Test Your Speed &amp; Teamwork! Experience the thrill of coding in
              a high-stakes relay. In this fast-paced event, teams of three will
              take turns at the keyboard—switching every 5 minutes—to tackle
              coding challenges as quickly as possible. Get ready for the
              ultimate test of speed, skill, and collaboration—because every
              second counts!
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
                alt="CodeSprint Odyssey Poster"
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
                Rules &amp; Guidelines
              </h2>
              <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-semibold">Team Size:</span> Compulsory 3
                  members per team.
                </li>
                <li>
                  <span className="font-semibold">Duration:</span> 1 hour 30
                  minutes (approx).
                </li>
                <li>
                  <span className="font-semibold">Timing:</span> 10:30 AM –
                  12:00 PM (approx).
                </li>
                <li>
                  <span className="font-semibold">No Backseat Coding:</span>{" "}
                  Teams discussing code with an external party will be
                  disqualified.
                </li>
                <li>
                  <span className="font-semibold">Punctuality:</span> Arrive at
                  the venue on time.
                </li>
                <li>
                  <span className="font-semibold">Platform:</span> Hackerrank.
                </li>
                <li>
                  <span className="font-semibold">Mode:</span> Offline (
                  <span className="font-bold">Venue:</span> To be decided).
                </li>
                <li>
                  <span className="font-semibold">Round:</span> Single round to
                  decide the top 3 teams based on leaderboard position.
                </li>
                <li className="text-red-500 dark:text-red-400 pt-8">
                  <span className="font-semibold">Prizes:</span> Exciting cash
                  prizes for winners and participation certificates for all.
                </li>
              </ul>
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
