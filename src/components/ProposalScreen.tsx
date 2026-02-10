import { useState, useCallback, useRef } from "react";
import { Heart } from "lucide-react";
import loveHero from "@/assets/love-hero.jpg";

interface ProposalScreenProps {
  gender: "male" | "female";
  onYes: () => void;
  onHeartbreak: () => void;
}

const noMessages = [
  "Are you sure? 🥺",
  "Really? Think again... 💔",
  "Please don't break my heart 😢",
  "I'll be so sad... 😭",
  "You're breaking my heart! 💔",
  "Last chance... please? 🙏",
  "I can't believe this... 😞",
  "Fine... 💔💔💔",
];

const ProposalScreen = ({ gender, onYes, onHeartbreak }: ProposalScreenProps) => {
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [shaking, setShaking] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const buttonAreaRef = useRef<HTMLDivElement>(null);

  const pronoun = gender === "male" ? "his" : "her";
  const title = gender === "male" ? "He" : "She";

  const moveNoButton = useCallback(() => {
    // Keep within viewport-safe bounds for mobile
    const maxX = Math.min(window.innerWidth * 0.3, 120);
    const maxY = Math.min(window.innerHeight * 0.25, 100);
    const x = (Math.random() - 0.5) * maxX * 2;
    const y = (Math.random() - 0.5) * maxY * 2;
    setNoPosition({ x, y });
  }, []);

  const handleNo = () => {
    const newCount = noCount + 1;
    setNoCount(newCount);
    setShaking(true);
    setYesSize((prev) => Math.min(prev + 0.15, 2));
    setTimeout(() => setShaking(false), 500);

    if (newCount >= 8) {
      onHeartbreak();
    } else {
      moveNoButton();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 py-8 relative z-10 overflow-x-hidden">
      <div className={`text-center w-full max-w-lg mx-auto ${shaking ? "animate-shake" : ""}`}>
        <div className="mb-4 relative">
          <img
            src={loveHero}
            alt="Love"
            className="w-48 h-32 sm:w-64 sm:h-40 md:w-80 md:h-48 object-cover rounded-2xl mx-auto shadow-xl"
          />
          <Heart className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 text-primary animate-pulse-love" />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-script text-primary mb-3">
          Will You Be My Valentine? 💝
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-2 font-body px-2">
          {title} wants you to know that you mean the world to {pronoun} heart...
        </p>

        {noCount > 0 && (
          <p className="text-primary font-body font-semibold text-base sm:text-lg mb-4 animate-pulse">
            {noMessages[noCount - 1]}
          </p>
        )}

        <div className="mb-6">
          <img
            src={
              noCount >= 5
                ? "https://media.giphy.com/media/3oEjHB1EKuujDjYFWw/giphy.gif"
                : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTR5OWVlbWN1ZGVqNGxoZnRhcHo3OWdoMXlsbDJtNzFtM2swYzJhMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif"
            }
            alt="Love gif"
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mx-auto border-4 border-secondary shadow-lg"
          />
        </div>

        {/* Buttons */}
        <div ref={buttonAreaRef} className="relative min-h-[160px] sm:min-h-[140px] flex items-center justify-center overflow-hidden">
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            <button
              onClick={onYes}
              style={{ transform: `scale(${yesSize})` }}
              className="px-6 sm:px-10 py-3 sm:py-4 rounded-2xl love-gradient text-primary-foreground font-body font-bold text-lg sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 active:brightness-110 z-10 touch-manipulation"
            >
              Yes! 💖
            </button>

            <button
              onClick={handleNo}
              onMouseEnter={moveNoButton}
              onTouchStart={(e) => {
                e.preventDefault();
                moveNoButton();
                handleNo();
              }}
              style={{
                transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                transition: "transform 0.3s ease-out",
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-muted text-muted-foreground font-body font-semibold text-base sm:text-lg active:bg-muted/80 transition-colors duration-200 z-10 touch-manipulation"
            >
              No 😢
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalScreen;
