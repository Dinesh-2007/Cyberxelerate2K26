"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const AnimatedIntro = ({ onComplete }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [ballKicked, setBallKicked] = useState(false);
  const [screenBreaking, setScreenBreaking] = useState(false);
  const [breakPieces, setBreakPieces] = useState([]);

  useEffect(() => {
    // Start ball animation after 1 second
    const kickTimer = setTimeout(() => {
      setBallKicked(true);
    }, 1000);

    // Screen starts breaking after ball reaches middle (around 2.2s)
    const breakTimer = setTimeout(() => {
      setScreenBreaking(true);
      // Generate random break pieces
      const pieces = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        delay: Math.random() * 0.3,
        duration: 1.2 + Math.random() * 0.4,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        rotate: Math.random() * 360,
      }));
      setBreakPieces(pieces);
    }, 3200);

    // Hide intro after animation completes (4.5 seconds total)
    const hideTimer = setTimeout(() => {
      setShowIntro(false);
      onComplete?.();
    }, 4800);

    return () => {
      clearTimeout(kickTimer);
      clearTimeout(breakTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white/10 animate-bounce" style={{ animationDuration: "3s" }}></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Breaking Glass Pieces */}
        {screenBreaking &&
          breakPieces.map((piece) => (
            <div
              key={piece.id}
              className="absolute pointer-events-none"
              style={{
                width: "120px",
                height: "80px",
                background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                border: "2px solid #00ffff",
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
                animation: `shatterPiece ${piece.duration}s ease-out forwards`,
                animationDelay: `${piece.delay}s`,
                opacity: 0.9,
                left: "50%",
                top: "50%",
                transformOrigin: "center center",
                transform: `translate(-50%, -50%) rotateX(${piece.rotate}deg)`,
              }}
            />
          ))}

        {/* Impact Flash */}
        {screenBreaking && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, transparent 70%)",
              animation: "impactFlash 0.6s ease-out forwards",
              zIndex: 35,
            }}
          />
        )}
        {/* Football Field */}
        <svg width="100%" height="100%" viewBox="0 0 1000 600" className="absolute inset-0">
          {/* Sky */}
          <rect width="1000" height="600" fill="none" />

          {/* Field */}
          <rect y="350" width="1000" height="250" fill="#2d5016" />

          {/* Field Lines */}
          <line x1="0" y1="350" x2="1000" y2="350" stroke="white" strokeWidth="2" />
          <circle cx="500" cy="450" r="80" fill="none" stroke="white" strokeWidth="2" />
          <line x1="500" y1="350" x2="500" y2="550" stroke="white" strokeWidth="2" />
          <rect x="50" y="400" width="80" height="100" fill="none" stroke="white" strokeWidth="2" />
          <rect x="870" y="400" width="80" height="100" fill="none" stroke="white" strokeWidth="2" />

          {/* Goal Posts */}
          {/* Left Goal */}
          <g>
            <line x1="50" y1="380" x2="50" y2="420" stroke="#FFD700" strokeWidth="8" />
            <line x1="30" y1="380" x2="70" y2="380" stroke="#FFD700" strokeWidth="8" />
            <line x1="30" y1="380" x2="30" y2="420" stroke="#FFD700" strokeWidth="6" />
            <line x1="70" y1="380" x2="70" y2="420" stroke="#FFD700" strokeWidth="6" />
          </g>

          {/* Right Goal */}
          <g>
            <line x1="950" y1="380" x2="950" y2="420" stroke="#FFD700" strokeWidth="8" />
            <line x1="930" y1="380" x2="970" y2="380" stroke="#FFD700" strokeWidth="8" />
            <line x1="930" y1="380" x2="930" y2="420" stroke="#FFD700" strokeWidth="6" />
            <line x1="970" y1="380" x2="970" y2="420" stroke="#FFD700" strokeWidth="6" />
          </g>
        </svg>

        {/* Cute Animated Boy */}
        <div
          className={cn(
            "absolute transition-all duration-1000",
            ballKicked ? "translate-x-0" : "translate-x-0"
          )}
          style={{
            left: "180px",
            top: "240px",
          }}
        >
          <svg width="160" height="220" viewBox="0 0 160 220" className={ballKicked ? "animate-spin-once" : ""}>
            {/* Head - cute and round */}
            <circle cx="80" cy="45" r="32" fill="#f5a962" stroke="#d4915f" strokeWidth="2" />

            {/* Hair - cute and fluffy */}
            <ellipse cx="80" cy="20" rx="35" ry="28" fill="#8B4513" />
            <ellipse cx="55" cy="28" rx="15" ry="20" fill="#8B4513" />
            <ellipse cx="105" cy="28" rx="15" ry="20" fill="#8B4513" />
            <path d="M 60 25 Q 65 12 80 10 Q 95 12 100 25" fill="#A0522D" />

            {/* Eyes - big and cute */}
            <ellipse cx="65" cy="40" rx="7" ry="10" fill="white" />
            <ellipse cx="95" cy="40" rx="7" ry="10" fill="white" />
            <circle cx="65" cy="42" r="5" fill="#4A90E2" />
            <circle cx="95" cy="42" r="5" fill="#4A90E2" />
            <circle cx="66" cy="40" r="2.5" fill="white" />
            <circle cx="96" cy="40" r="2.5" fill="white" />

            {/* Eyebrows */}
            <path d="M 58 34 Q 65 31 72 34" stroke="#2c3e50" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 88 34 Q 95 31 102 34" stroke="#2c3e50" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Cute nose */}
            <path d="M 80 50 L 76 60 L 80 58 L 84 60 Z" fill="#e89a5c" />

            {/* Big cute smile */}
            <path d="M 65 68 Q 80 78 95 68" stroke="#e56573" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 65 68 Q 80 74 95 68" fill="#ffccdd" opacity="0.5" />

            {/* Ears */}
            <circle cx="48" cy="50" r="8" fill="#f5a962" stroke="#d4915f" strokeWidth="1" />
            <circle cx="112" cy="50" r="8" fill="#f5a962" stroke="#d4915f" strokeWidth="1" />
            <circle cx="48" cy="50" r="4" fill="#e89a5c" />
            <circle cx="112" cy="50" r="4" fill="#e89a5c" />

            {/* Neck */}
            <rect x="72" y="72" width="16" height="10" fill="#f5a962" />

            {/* Shirt - cute and colorful */}
            <path d="M 50 82 L 45 160 Q 45 170 55 170 L 105 170 Q 115 170 115 160 L 110 82 Z" fill="#FF6B6B" />

            {/* Shirt pattern - stripes */}
            <line x1="60" y1="82" x2="58" y2="165" stroke="#FF5252" strokeWidth="2" opacity="0.5" />
            <line x1="100" y1="82" x2="102" y2="165" stroke="#FF5252" strokeWidth="2" opacity="0.5" />

            {/* Arms - cute and chubby */}
            <ellipse cx="45" cy="95" rx="12" ry="28" fill="#f5a962" transform="rotate(-25 45 95)" />
            <ellipse cx="115" cy="100" rx="12" ry="28" fill="#f5a962" transform="rotate(35 115 100)" />

            {/* Hands */}
            <circle cx="30" cy="75" r="10" fill="#f5a962" stroke="#d4915f" strokeWidth="1" />
            <circle cx="130" cy="85" r="10" fill="#f5a962" stroke="#d4915f" strokeWidth="1" />

            {/* Fingers */}
            <line x1="25" y1="70" x2="22" y2="65" stroke="#d4915f" strokeWidth="2" strokeLinecap="round" />
            <line x1="30" y1="68" x2="30" y2="62" stroke="#d4915f" strokeWidth="2" strokeLinecap="round" />
            <line x1="35" y1="70" x2="38" y2="65" stroke="#d4915f" strokeWidth="2" strokeLinecap="round" />

            {/* Pants - blue jeans style */}
            <path d="M 55 170 L 60 215 L 68 215 L 65 170 Z" fill="#4A5F8F" />
            <path d="M 95 170 L 100 215 L 108 215 L 105 170 Z" fill="#4A5F8F" />

            {/* Pants details */}
            <line x1="65" y1="170" x2="65" y2="215" stroke="#3A4F7F" strokeWidth="1" opacity="0.5" />
            <line x1="100" y1="170" x2="100" y2="215" stroke="#3A4F7F" strokeWidth="1" opacity="0.5" />

            {/* Shoes - cute orange shoes */}
            <ellipse cx="62" cy="220" rx="12" ry="8" fill="#FF8C42" />
            <ellipse cx="102" cy="220" rx="12" ry="8" fill="#FF8C42" />
            <ellipse cx="62" cy="215" rx="10" ry="4" fill="#FFB380" />
            <ellipse cx="102" cy="215" rx="10" ry="4" fill="#FFB380" />
          </svg>
        </div>

        {/* Soccer Ball */}
        <div
          className="absolute transition-all z-20"
          style={{
            left: ballKicked ? "calc(50% + 200px)" : "calc(50% - 100px)",
            top: "280px",
            animation: ballKicked ? "ballFly 2.2s ease-in forwards" : "none",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Main sphere with gradient effect */}
            <defs>
              <radialGradient id="ballGradient" cx="35%" cy="35%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e0e0e0" />
              </radialGradient>
            </defs>

            {/* Ball base - white with shadow */}
            <circle cx="30" cy="30" r="28" fill="url(#ballGradient)" stroke="#999" strokeWidth="1" />

            {/* Pentagon pentagons - top pattern */}
            <polygon points="30,8 38,16 34,28 26,28 22,16" fill="black" />

            {/* Top row - 5 hexagons around pentagon */}
            <polygon points="50,20 56,24 56,34 50,38 44,34 44,24" fill="white" stroke="black" strokeWidth="1.2" />
            <polygon points="48,12 54,8 60,12 58,22 50,20 48,16" fill="black" />
            <polygon points="12,20 18,16 24,12 20,22 14,24 10,22" fill="black" />
            <polygon points="10,20 16,24 16,34 10,38 4,34 4,24" fill="white" stroke="black" strokeWidth="1.2" />

            {/* Middle row - 10 hexagons */}
            <polygon points="38,38 44,42 44,52 38,56 32,52 32,42" fill="white" stroke="black" strokeWidth="1.2" />
            <polygon points="22,38 28,42 28,52 22,56 16,52 16,42" fill="white" stroke="black" strokeWidth="1.2" />
            <polygon points="55,30 58,40 54,48 44,48 42,40 46,32" fill="black" />
            <polygon points="5,30 8,40 14,48 24,48 26,40 22,32" fill="black" />

            {/* Bottom pentagons */}
            <polygon points="30,52 38,44 44,52 34,58 26,58" fill="black" />
            <polygon points="30,52 22,44 16,52 26,58 34,58" fill="black" />

            {/* Additional white hexagons for classic pattern */}
            <polygon points="30,22 36,26 36,34 30,38 24,34 24,26" fill="white" stroke="black" strokeWidth="1.2" />

            {/* Shine effect - gloss */}
            <ellipse cx="20" cy="18" rx="8" ry="6" fill="white" opacity="0.4" />
          </svg>
        </div>

        {/* Goal Light Effect - appears when ball reaches goal */}
        <div
          className={cn(
            "absolute transition-all duration-500",
            ballKicked ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}
          style={{
            left: "930px",
            top: "300px",
            transitionDelay: ballKicked ? "2s" : "0s",
          }}
        >
          <div className="w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        </div>


      </div>

      {/* Styles */}
      <style>{`
        @keyframes ballBounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes ballFly {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 1;
          }
          60% {
            transform: translateX(200px) translateY(-150px) rotate(720deg);
            opacity: 1;
          }
          90% {
            transform: translateX(280px) translateY(-50px) rotate(1080deg);
            opacity: 1;
          }
          100% {
            transform: translateX(280px) translateY(20px) rotate(1080deg);
            opacity: 1;
          }
        }

        @keyframes spin-once {
          0% {
            transform: rotateY(0deg) scaleX(1);
          }
          50% {
            transform: rotateY(180deg) scaleX(-1);
          }
          100% {
            transform: rotateY(0deg) scaleX(1);
          }
        }

        @keyframes shatterPiece {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) rotateX(var(--rx)) rotateY(var(--ry)) rotateZ(var(--rz));
            opacity: 0;
          }
        }

        @keyframes shatterPiece0 {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + 200px), calc(-50% - 150px)) rotateX(45deg) rotateY(60deg) rotateZ(30deg);
            opacity: 0;
          }
        }

        @keyframes shatterPiece1 {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% - 180px), calc(-50% - 200px)) rotateX(-40deg) rotateY(-70deg) rotateZ(-20deg);
            opacity: 0;
          }
        }

        @keyframes shatterPiece2 {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + 220px), calc(-50% + 180px)) rotateX(60deg) rotateY(30deg) rotateZ(50deg);
            opacity: 0;
          }
        }

        @keyframes shatterPiece3 {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% - 210px), calc(-50% + 160px)) rotateX(-50deg) rotateY(40deg) rotateZ(-60deg);
            opacity: 0;
          }
        }

        @keyframes shatterPiece4 {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + 150px), calc(-50% - 180px)) rotateX(70deg) rotateY(-50deg) rotateZ(25deg);
            opacity: 0;
          }
        }

        @keyframes shatterPiece5 {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% - 190px), calc(-50% - 150px)) rotateX(-60deg) rotateY(-30deg) rotateZ(-45deg);
            opacity: 0;
          }
        }

        @keyframes shatterPiece6 {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + 240px), calc(-50% + 120px)) rotateX(35deg) rotateY(70deg) rotateZ(55deg);
            opacity: 0;
          }
        }

        @keyframes shatterPiece7 {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% - 220px), calc(-50% + 140px)) rotateX(-70deg) rotateY(60deg) rotateZ(-35deg);
            opacity: 0;
          }
        }

        @keyframes shatterPiece8 {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + 180px), calc(-50% - 120px)) rotateX(55deg) rotateY(-40deg) rotateZ(70deg);
            opacity: 0;
          }
        }

        @keyframes shatterPiece9 {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% - 160px), calc(-50% + 170px)) rotateX(-45deg) rotateY(-60deg) rotateZ(-50deg);
            opacity: 0;
          }
        }

        @keyframes shatterPiece10 {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + 200px), calc(-50% + 160px)) rotateX(40deg) rotateY(50deg) rotateZ(45deg);
            opacity: 0;
          }
        }

        @keyframes shatterPiece11 {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% - 200px), calc(-50% - 140px)) rotateX(-65deg) rotateY(35deg) rotateZ(-55deg);
            opacity: 0;
          }
        }

        @keyframes impactFlash {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-spin-once {
          animation: spin-once 0.8s ease-in-out;
        }

        .animate-ball-kick {
          animation: ballFly 2.2s ease-out forwards;
        }

        .animate-ball-bounce {
          animation: ballBounce 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedIntro;
