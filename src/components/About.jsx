import { useSectionObserver } from "@/hooks/intersection-observer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
//import { LampContainer } from "@/components/ui/lamp";
import { cn } from "@/lib/utils";

export default function About() {
  useSectionObserver("about", "CyberXelerate-2k25");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const features = [
    {
      text: "No Registration Fees",
      description: "Participate at absolutely no cost.",
    },
    {
      text: "Exciting Cash Prizes",
      description: "Showcase your cybersecurity expertise and win big.",
    },
    {
      text: "Complimentary Food",
      description: "Enjoy free meals while you dive into the challenges.",
    },
    {
      text: "Professional Atmosphere",
      description: "Dress formally and connect with industry experts.",
    },
    {
      text: "Transport Facilities",
      description: "Convenient transport provided (will be updated soon).",
    },
  ];

  return (
    <section id="about" className="relative py-8 bg-transparent mt-40 sm:mt-0">
      {/* <LampContainer> */}
        <div
          ref={ref}
          className={cn(
            "text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8",
            "animate-fade-up",
            isVisible && "is-visible"
          )}
        >
          {/* Main Heading */}
          <h1
            className={cn(
              "text-3xl sm:text-4xl md:text-6xl tracking-tight text-gray-800 dark:text-gray-100 font-medium font-fullback",
              "animate-fade-up",
              isVisible && "is-visible"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            Ignite Your Cybersecurity Passion
          </h1>

          {/* Intro Paragraph */}
          <p
            className={cn(
              "text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-serif",
              "animate-scale-in",
              isVisible && "is-visible"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            Join us for the{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              CyberXelerate' 2k25 Symposium
            </span>
            , organized by the{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              Department of CSE (Cyber Security)
            </span>{" "}
            at{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              R.M.K. College of Engineering and Technology
            </span>
            . This thrilling event is packed with exciting competitions designed
            to challenge your skills and knowledge in the dynamic world of{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              cybersecurity
            </span>
            .
          </p>

          {/* Features */}
          <div
            className={cn(
              "mt-8 animate-slide-left",
              isVisible && "is-visible"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <ul className="space-y-4 md:space-y-3 stagger-children">
              {features.map((item, index) => (
                <li 
                  key={index} 
                  className={cn(
                    "flex items-start gap-2 sm:gap-4 animate-fade-up",
                    isVisible && "is-visible"
                  )}
                >
                  <span
                    className="text-blue-500 dark:text-teal-300 font-semibold"
                    aria-hidden="true"
                  >
                    ➤
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 text-base md:text-xl">
                    <span className="font-bold text-gray-900 dark:text-white font-serif">
                      {item.text}
                    </span>{" "}
                    <span className="font-serif">: {item.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Details */}
          <div
            className={cn(
              "mt-12 font-serif animate-scale-in",
              isVisible && "is-visible"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-500 dark:text-teal-300">
              Event Details
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-base md:text-lg">
              📅{" "}
              <span className="font-bold text-gray-900 dark:text-white font-serif">
                Date
              </span>
              : February 9, 2026 <br />
              📍{" "}
              <span className="font-bold text-gray-900 dark:text-white font-serif">
                Location
              </span>
              : R.M.K College of Engineering and Technology, Tamil Nadu
            </p>
          </div>

          {/* Register Button */}
          <div
            className={cn(
              "mt-8 animate-fade-up",
              isVisible && "is-visible"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <a
              href="/transport-details.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-md font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all hover-scale dark:from-teal-400 dark:to-blue-500 dark:hover:from-blue-500 dark:hover:to-teal-400 font-serif"
            >
              Transport Details
            </a>
          </div>
        </div>
      {/* </LampContainer> */}
    </section>
  );
}
