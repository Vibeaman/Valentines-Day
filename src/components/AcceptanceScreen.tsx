import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import loveYesImg from "@/assets/love-yes.jpg";

interface AcceptanceScreenProps {
  gender: "male" | "female";
}

const loveQuotes = [
  "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine. — Maya Angelou",
  "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love. — Gabriel García Márquez",
  "You are my today and all of my tomorrows. — Leo Christopher",
  "I love you not because of who you are, but because of who I am when I am with you. — Roy Croft",
  "Whatever our souls are made of, his and mine are the same. — Emily Brontë",
  "I would rather spend one lifetime with you, than face all the ages of this world alone. — J.R.R. Tolkien",
  "To love and be loved is to feel the sun from both sides. — David Viscott",
  "You are the finest, loveliest, tenderest, and most beautiful person I have ever known — and even that is an understatement. — F. Scott Fitzgerald",
];

const AcceptanceScreen = ({ gender }: AcceptanceScreenProps) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; color: string; delay: number }>>([]);

  const pronoun = gender === "male" ? "his" : "her";
  const possessive = gender === "male" ? "He" : "She";

  useEffect(() => {
    const pieces = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: ["hsl(346,77%,50%)", "hsl(340,80%,70%)", "hsl(38,90%,55%)", "hsl(0,0%,100%)"][
        Math.floor(Math.random() * 4)
      ],
      delay: Math.random() * 2,
    }));
    setConfetti(pieces);

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-[100dvh] px-4 py-8 relative z-10 overflow-x-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="fixed animate-confetti pointer-events-none z-0"
          style={{
            left: piece.left + "%",
            top: "-20px",
            width: "8px",
            height: "8px",
            backgroundColor: piece.color,
            borderRadius: piece.id % 2 === 0 ? "50%" : "2px",
            animationDelay: piece.delay + "s",
          }}
        />
      ))}

      <div className="text-center w-full max-w-xl mx-auto relative z-10 pt-8">
        {/* Celebration gif */}
        <div className="mb-4">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWdwcjVhMDBvaXE3OTV5emZuZ25jd3d0dzR4eGQ5dG5xdHVoYmlhZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRv0ThflsHCqDrG/giphy.gif"
            alt="Celebration"
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mx-auto border-4 border-love-gold shadow-2xl"
          />
        </div>

        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-love-gold" />
          <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-pulse-love" />
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-love-gold" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-script text-primary mb-4">
          You Said Yes! 🎉💖
        </h1>

        {/* Love image */}
        <img
          src={loveYesImg}
          alt="Love celebration"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-3xl mx-auto mb-6 shadow-2xl border-4 border-secondary"
        />

        {/* Thank you message */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 mb-6 shadow-xl mx-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-script text-primary mb-3">
            Thank You For Being In {possessive === "He" ? "His" : "Her"} Life 💝
          </h2>
          <p className="text-foreground font-body text-base sm:text-lg leading-relaxed mb-3">
            You are the reason {pronoun} heart beats with joy every single day.
            Every moment spent with you is a treasure, and {possessive.toLowerCase()} is so grateful
            to have you by {pronoun} side. You make {pronoun} world brighter, warmer, and
            infinitely more beautiful just by being in it.
          </p>
          <p className="text-foreground font-body text-base sm:text-lg leading-relaxed">
            Thank you for choosing to be {pronoun} Valentine. Thank you for your love,
            your smile, your everything. {possessive} promises to cherish you today, tomorrow,
            and for all the days to come. You are {pronoun} greatest love story. 💕
          </p>
        </div>

        {/* Rotating love quotes */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 shadow-lg mb-6 min-h-[100px] sm:min-h-[120px] flex items-center justify-center mx-1">
          <p className="text-primary font-script text-lg sm:text-xl md:text-2xl italic transition-opacity duration-500">
            "{loveQuotes[currentQuote]}"
          </p>
        </div>

        {/* Love gif */}
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjBzc2V2ZXgzaGE4OW5hZXdkMmx3dmluM2g3aWRlcWNnaDhoYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M90mJvfWfd5mbUuULX/giphy.gif"
          alt="Love"
          className="w-48 h-36 sm:w-64 sm:h-48 object-cover rounded-2xl mx-auto shadow-lg border-2 border-secondary"
        />

        <p className="mt-6 mb-4 text-muted-foreground font-body text-xs sm:text-sm">
          Made with ❤️ for the most special person in the world
        </p>
      </div>
    </div>
  );
};

export default AcceptanceScreen;
