import { useEffect, useRef } from "react";

const FloatingHearts = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const hearts = ["❤️", "💕", "💗", "💖", "💘", "💝", "🌹", "✨"];
    const interval = setInterval(() => {
      const heart = document.createElement("span");
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.className = "animate-float-heart fixed pointer-events-none z-0";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 14 + "px";
      heart.style.animationDuration = Math.random() * 5 + 6 + "s";
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 11000);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />;
};

export default FloatingHearts;
