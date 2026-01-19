"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TechMemeAThon = () => {
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
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Tech Meme-A-Thon
              </span>
            </h1>
            <p
              className={cn(
                "text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 font-mono animate-fade-up",
                isVisible && "is-visible"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              Welcome to Tech Meme-A-Thon, where humor meets technology! Ever
              laughed at a tech meme and thought, "I could do better"? Now's
              your chance! Participants will be given technical topics on the
              spot and must create memes that simplify them in a relatable way.
              Once done, you'll explain your meme and show how it turns a tricky
              concept into something anyone can grasp.
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
                src="/memeathon-poster.png"
                alt="Tech Meme-A-Thon Poster"
                width={400}
                height={500}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md object-cover rounded-2xl shadow-lg dark:shadow-black/50"
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
                  <span className="font-semibold">Participation:</span>{" "}
                  Individual only - no teams allowed.
                </li>
                <li>
                  <span className="font-semibold">Content:</span> Memes must be
                  original and non-offensive.
                </li>
                <li>
                  <span className="font-semibold">Creation:</span> Create two
                  memes on different assigned topics.
                </li>
                <li>
                  <span className="font-semibold">Time Limit:</span> 50 minutes
                  to complete your memes.
                </li>
                <li>
                  <span className="font-semibold">Pitch:</span> 3 minutes to
                  explain your memes after submission.
                </li>
                <li>
                  <span className="font-semibold">Dress Code:</span> Formal
                  attire is mandatory.
                </li>
                <li>
                  <span className="font-semibold">Equipment:</span> Bring your
                  own laptop.
                </li>
                <li>
                  <span className="font-semibold">Judging:</span> Based on
                  clarity, originality, creativity, and relevance.
                </li>
                <li>
                  <span className="font-semibold">Tools:</span> Use any meme
                  creation platform (e.g., Canva, Photoshop).
                </li>
                <li>
                  <span className="font-semibold">Event Timing:</span> 10:00 am
                  - 12:15 am.
                </li>
                <li className="text-red-500 dark:text-red-400 font-semibold pt-8">
                  <span className="font-semibold">Exiting Cash Prices:</span>{" "}
                  This unique event challenges you to break down complex tech
                  concepts into fun, easy-to-understand memes and win exciting
                  cash prizes!
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details
          <div className="text-center py-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-gray-100"
            >
              Contact for Queries
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300"
            >
              📞 <span className="font-bold">Name</span> - 0987678902
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300"
            >
              📞 <span className="font-bold">Babika P R</span> - 8767898765
            </motion.p>
          </div> */}

          {/* Register Now Button */}
          <div className="flex justify-center py-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe-b8qsN3wjS3iXM4QUme-iqMF4mjcJhnTO-aedSSKZ2_CcRg/viewform"
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                "px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg hover-scale animate-fade-up",
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

export default TechMemeAThon;
