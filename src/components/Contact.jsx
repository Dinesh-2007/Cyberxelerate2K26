import { HoverEffect } from "@/components/ui/card-hover-effect";
import SectionHeading from "./ui/section-heading";
import { useSectionObserver } from "@/hooks/intersection-observer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export default function Contact() {
  useSectionObserver("contact", "Contact");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <section
      id="contact"
      ref={ref}
      className={cn(
        "relative max-w-5xl mx-auto px-8 mb-12 backdrop-blur-sm animate-fade-up",
        isVisible && "is-visible"
      )}
    >
      <SectionHeading>Contact</SectionHeading>
      <div className="font-serif text-gray-600 dark:text-gray-400 text-md">
        <HoverEffect items={contacts} className="gap-6" />
      </div>
    </section>
  );
}

export const contacts = [
  {
    title: "Head Of Department CSE (Cyber Security)",
    details: [{ name: "Dr. Udhaya Sankar S M", phone: "" }],
    link: "https://www.linkedin.com/in/udhaya-sankar-s-m-00799021/",
  },
  {
    title: "Faculty Coordinator - Associate Professor",
    details: [{ name: "Dr. Dharini N", phone: "" }],
    link: "https://www.linkedin.com/in/dr-dharini-n-80854b136/",
  },
  {
    title: "Student Coordinator",
    details: [{ name: "Mr. Aswanth Babu", phone: "+91 91509 08828" }],
    link: "https://www.linkedin.com/in/aswanthbabu2004/",
  },
];
