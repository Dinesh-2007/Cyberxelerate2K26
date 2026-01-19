"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PinContainer } from "@/components/ui/3d-pin";
import { useSectionObserver } from "@/hooks/intersection-observer";
import SectionHeading from "@/components/ui/section-heading";

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
      "Welcome to Tech Memeathon, where humor meets technology! Ever laughed at a tech meme and thought, “I could do better”? Now's your chance!",
    imageSrc: "/temp1.png",
    gradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500",
  },
  {
    id: "5",
    route: "/events/promptxtreme",
    title: "PromptXtreme",
    description:
      "Step into the Solo Leveling-themed AI battleground. Craft the most effective prompts, and rise as the S-Rank Prompter in this high-stakes AI showdown!",
    imageSrc: "/temp4.png",
    gradient: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500",
  },
];

// Non-Technical Events Data
const nonTechnicalEvents = [
  {
    id: "6",
    route: "/events/think-tank-tussle",
    title: "Think Tank Tussle",
    description:
      "Non-technical event packed with thrilling challenges and brain-teasing fun! Think Tank Tussle is designed to test you quick thinking through two engaging rounds",
    imageSrc: "/temp6.png",
    gradient: "bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500",
  },
  {
    id: "7",
    route: "/events/pencilvania",
    title: "Pencilvania",
    description:
      "Welcome to Pencilvania! A rapid-fire team game where drawing talent and rapid intellect meet!",
    imageSrc: "/temp7.jpg",
    gradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500",
  },
];

export default function Events() {
  const router = useRouter();
  useSectionObserver("events", "Events");

  const navigateToEvent = (eventId) => {
    router.push(`/events/${eventId}`);
  };

  return (
    <section className="relative h-full w-full py-32">
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#595584]"></div>
      <SectionHeading> Technical Events </SectionHeading>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-16 place-items-center py-12 mb-12">
          {technicalEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => navigateToEvent(event.id)}
              className="cursor-pointer hover-scale animate-fade-up is-visible"
            >
              <PinContainer title={event.route}>
                <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 font-serif">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400 font-serif">
                    {event.description}
                  </p>
                  <div
                    className={`flex-1 w-full rounded-lg overflow-hidden ${event.gradient}`}
                  >
                    <img
                      src={event.imageSrc}
                      alt="Event Banner"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>

        {/* Non-Technical Events */}
        <SectionHeading> Non-Technical Events </SectionHeading>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-16 place-items-center py-12">
            {nonTechnicalEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => navigateToEvent(event.id)}
                className="cursor-pointer hover-scale animate-fade-up is-visible"
              >
                <PinContainer title={event.route}>
                  <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 font-serif">
                      {event.title}
                    </h3>
                    <p className=" text-slate-500 dark:text-gray-400 font-serif text-sm">
                      {event.description}
                    </p>
                    <div
                      className={`flex-1 w-full rounded-lg overflow-hidden ${event.gradient}`}
                    >
                      <img
                        src={event.imageSrc}
                        alt="Event Banner"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
