"use client";

import React, { useRef, useState, useEffect } from "react";

const AudioToggle = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const handleUserInteraction = () => {
    setHasUserInteracted(true);
    const audio = audioRef.current;
    if (!isPlaying) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
  };

  useEffect(() => {
    if (hasUserInteracted) {
      const audio = audioRef.current;
      audio.play().catch(console.error); // Autoplay after interaction
    }
  }, [hasUserInteracted]);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      onClick={handleUserInteraction}
    >
      {/* Audio element */}
      <audio ref={audioRef} src={src} />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className={`relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg bg-gradient-to-br from-blue-500 via-green-500 to-indigo-400  text-white focus:outline-none focus:ring-4 focus:ring-pink-300 transition-transform transform duration-300 ease-out ${
          isPlaying ? "scale-95" : "hover:scale-105"
        }`}
        aria-label={isPlaying ? "Pause music" : "Play magic music"}
      >
        <span
          className={`text-sm sm:text-lg font-bold transition-opacity duration-200 ${
            isPlaying ? "opacity-70" : "opacity-100"
          }`}
        >
          {isPlaying ? "Pause" : "Magic"}
        </span>
        <span
          className={`absolute w-3 h-3 rounded-full bg-white ${
            isPlaying ? "animate-ping opacity-50" : "animate-none opacity-0"
          }`}
          style={{ top: "10%", left: "10%" }}
        />
      </button>
    </div>
  );
};

export default AudioToggle;
