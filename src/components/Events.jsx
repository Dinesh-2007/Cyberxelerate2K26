import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSectionObserver } from "@/hooks/intersection-observer";
import SectionHeading from "./ui/section-heading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Technical Events Data
const technicalEvents = [
  {
    id: "1",
    route: "/events/projectxplosion",
    title: "ProjectXplosion",
    description:
      "Showcase your innovative ideas where creativity meets technology. Present your projects across various domains, compete with the best, and win exciting cash prizes!",
    imageSrc: "/temp3.png",
    gradient: "bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500",
  },
  {
    id: "2",
    route: "/events/hackoff-ctf",
    title: "HACKOFF CTF",
    description:
      "Engage in thrilling cyber challenges at Capture The Flag (CTF) event! Test your hacking skills, solve puzzles, and decode hidden messages to capture the hidden flag.",
    imageSrc: "/temp2.png",
    gradient: "bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500",
  },
  {
    id: "3",
    route: "/events/code-sprint-odyssey",
    title: "CodeSprint Odyssey",
    description:
      "In this fast-paced event, teams of three will take turns at the keyboard—switching every 5 minutes—to tackle coding challenges.",
    imageSrc: "/temp5.png",
    gradient: "bg-gradient-to-br from-red-500 via-pink-500 to-purple-500",
  },
  {
    id: "4",
    route: "/events/tech-meme-a-thon",
    title: "Tech Meme-A-Thon",
    description:
      "Welcome to Tech Memeathon, where humor meets technology! Ever laughed at a tech meme and thought, 'I could do better'? Now's your chance!",
    imageSrc: "/temp1.png",
    gradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500",
  },
];

// Non-Technical Events Data
const nonTechnicalEvents = [
  {
    id: "5",
    route: "/events/promptxtreme",
    title: "PromptXtreme",
    description:
      "Step into the Solo Leveling-themed AI battleground. Craft the most effective prompts, and rise as the S-Rank Prompter in this high-stakes AI showdown!",
    imageSrc: "/temp4.png",
    gradient: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    id: "6",
    route: "/events/think-tank-tussle",
    title: "Think Tank Tussle",
    description:
      "Non-technical event packed with thrilling challenges and brain-teasing fun! Think Tank Tussle is designed to test your quick thinking through two engaging rounds",
    imageSrc: "/temp6.png",
    gradient: "bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500",
  },
];

export default function Events() {
  const router = useRouter();
  const [selectedEventId, setSelectedEventId] = useState(null);
  useSectionObserver("events", "Events");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const navigateToEvent = (eventId) => {
    setSelectedEventId(eventId);
  };

  const closeModal = () => {
    setSelectedEventId(null);
  };

  const allEvents = [...technicalEvents, ...nonTechnicalEvents];
  const selectedEvent = allEvents.find((event) => event.id === selectedEventId);

  return (
    <section id="events" className="relative h-full w-full py-20 md:py-24">
      <SectionHeading> Events </SectionHeading>

      {/* Modal Overlay */}
      {selectedEventId && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {selectedEvent && (
            <div
              className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-2xl border-[5px] border-gray-300 dark:border-gray-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto transform scale-100 transition-transform duration-300 ease-out"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-2xl z-50 bg-white dark:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  ×
                </button>

                <div className="p-8 font-serif">
                  <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {selectedEvent.title}
                  </h2>
                  
                  <div className={`w-full h-64 rounded-lg overflow-hidden mb-6 ${selectedEvent.gradient}`}>
                    <Image
                      src={selectedEvent.imageSrc}
                      alt={`${selectedEvent.title} Banner`}
                      width={600}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                    {selectedEvent.description}
                  </p>

                  <button
                    onClick={() => {
                      router.push(`/events/${selectedEvent.id}`);
                      closeModal();
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold rounded-full hover:from-teal-400 hover:to-blue-500 transition-all"
                  >
                    View Full Details →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Technical Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white font-serif">Technical Events</h2>
        <div 
          ref={ref}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-24 lg:gap-x-10 lg:gap-y-20 place-items-center stagger-children"
          )}
        >
          {technicalEvents.map((item, index) => (
            <div
              key={item.id}
              onClick={() => navigateToEvent(item.id)}
              className={cn(
                "cursor-pointer hover-scale animate-fade-up",
                isVisible && "is-visible"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 rounded-lg transition-all w-[21rem] h-[21rem] space-y-4 font-serif border-[5px] border-gray-300 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
                <div
                  className={`flex-1 w-full rounded-lg overflow-hidden ${item.gradient}`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={`${item.title} Banner`}
                    width={336}
                    height={200}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Non-Technical Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white font-serif">Non-Technical Events</h2>
        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-24 lg:gap-x-10 lg:gap-y-20 place-items-center stagger-children"
          )}
        >
          {nonTechnicalEvents.map((item, index) => (
            <div
              key={item.id}
              onClick={() => navigateToEvent(item.id)}
              className={cn(
                "cursor-pointer hover-scale animate-fade-up",
                isVisible && "is-visible"
              )}
              style={{ transitionDelay: `${(technicalEvents.length + index) * 100}ms` }}
            >
              <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 rounded-lg transition-all w-[21rem] h-[21rem] space-y-4 font-serif border-[5px] border-gray-300 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
                <div
                  className={`flex-1 w-full rounded-lg overflow-hidden ${item.gradient}`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={`${item.title} Banner`}
                    width={336}
                    height={200}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
