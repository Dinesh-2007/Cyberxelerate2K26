"use client";

import { useState, useEffect } from "react";
import About from "@/components/About";
import { ContainerScrollAnimation } from "@/components/ContainerScrollAnimation";
import Events from "@/components/Events";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/ui/section-divider";
import GeneralRules from "@/components/Rules";

const greetings = [
  { language: "Hello", color: "text-red-500" },
  { language: "Hola", color: "text-yellow-500" },
  { language: "Bonjour", color: "text-blue-500" },
  { language: "Ciao", color: "text-green-500" },
  { language: "こんにちは", color: "text-purple-500" },
  { language: "안녕하세요", color: "text-pink-500" },
  { language: "你好", color: "text-teal-500" },
  { language: "Здравствуйте", color: "text-orange-500" },
  { language: "Olá", color: "text-indigo-500" },
  { language: "Hallo", color: "text-gray-500" },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit || now - parseInt(lastVisit, 10) > 3 * 60 * 60 * 1000) {
      setIsLoading(true);
      setShowContent(false);
      localStorage.setItem("lastVisit", now.toString());
    }
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 400);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isLoading]);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div
          className="loading-screen fixed inset-0 flex items-center justify-center z-50 bg-gray-700 bg-opacity-50 backdrop-blur-lg"
          aria-hidden="true"
        >
          <div
            key={greetings[currentGreeting].language}
            className={`loading-text text-3xl font-bold ${greetings[currentGreeting].color}`}
          >
            {greetings[currentGreeting].language}
          </div>
        </div>
      )}

      {/* Main Content */}
      {showContent && (
        <main className="flex flex-col items-center px-4 overflow-hidden pt-24">
          <Header />
          <ContainerScrollAnimation />
          <SectionDivider />
          <About />
          <Events />
          <GeneralRules />
          <SectionDivider />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
