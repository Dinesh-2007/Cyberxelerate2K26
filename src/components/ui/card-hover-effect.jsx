"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="card-hover-item relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Hover background - CSS only */}
          <span
            className={cn(
              "card-hover-bg",
              hoveredIndex === idx && "opacity-100"
            )}
          />
          
          {item.link ? (
            <Link href={item.link} target="_blank" className="block h-full w-full">
              <HoverCard item={item} />
            </Link>
          ) : (
            <HoverCard item={item} />
          )}
        </div>
      ))}
    </div>
  );
};

const HoverCard = ({ item }) => (
  <Card>
    <CardTitle>{item.title}</CardTitle>
    {item.description && <CardDescription>{item.description}</CardDescription>}
    {item.details && (
      <div className="mt-2 space-y-2">
        {item.details.map((detail, index) => (
          <p
            key={index}
            className="text-zinc-800 dark:text-zinc-400 text-sm flex flex-col"
          >
            <strong>{detail.name}</strong> {detail.phone}
          </p>
        ))}
      </div>
    )}
  </Card>
);

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "dark:bg-gray-900 bg-gray-50 rounded-2xl h-full w-full p-4 overflow-hidden border dark:border-white/[0.2] border-black/[0.1] group-hover:border-slate-700 relative z-10 transition-colors duration-200",
        className
      )}
    >
      <div className="relative">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-zinc-900 dark:text-zinc-100 font-bold tracking-wide mt-2",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-600 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
