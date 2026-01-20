import Countdown from "./ui/Timer";
import { useSectionObserver } from "@/hooks/intersection-observer";
import { useTypewriter } from "@/hooks/useTypewriter";

export function ContainerScrollAnimation() {
  useSectionObserver("home", "Home");
  const { displayedText, isComplete } = useTypewriter(
    "Welcome to CyberXelerate 3.0",
    80,
    300
  );

  return (
    // <section
    //   id="home"
    //   className="flex flex-col items-center justify-center py-20 md:py-32 text-gray-950 dark:text-gray-50 dark:text-opacity-90 bg-gradient-to-b from-sky-200 to-blue-900"
    // >
    <>
      {/* Text Content */}
      <div className="flex flex-col items-center min-h-16 mb-12">
        <h1 className="text-4xl md:text-6xl text-gray-700 dark:text-gray-50 leading-tight font-medium font-mono" style={{ WebkitTextStroke: '2px currentColor', paintOrder: 'stroke fill' }}>
          {displayedText}
          <span className={`${isComplete ? "animate-pulse" : ""}`}>|</span>
        </h1>

        <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 mt-12 font-serif">
              Empowering the next generation of cybersecurity enthusiasts
              through{" "}
              <span className="text-blue-500 dark:text-green-400 font-bold">
                cutting-edge competitions
              </span>{" "}
              and{" "}
              <span className="text-indigo-500 dark:text-indigo-400 font-bold">
                unparalleled opportunities.
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 sm:mb-8 font-serif">
              Join us in a journey to explore, compete, and excel in the
              ever-evolving world of{" "}
              <span className="bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 inline-block sm:mb-8 text-transparent bg-clip-text">
                Cybersecurity Excellence.
              </span>
            </p>
      </div> 

      {/* Countdown Timer */}
      <Countdown eventDate="Feburary 9, 2026 08:30:00" />
    {/* </section> */}
    </>
  );
}
