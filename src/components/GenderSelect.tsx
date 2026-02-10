import { Heart } from "lucide-react";

interface GenderSelectProps {
  onSelect: (gender: "male" | "female") => void;
}

const GenderSelect = ({ onSelect }: GenderSelectProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 py-8 relative z-10">
      <div className="text-center mb-8 sm:mb-12">
        <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4 animate-pulse-love" />
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-script text-primary mb-3">
          Happy Valentine's Day
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-body px-2">
          Someone special has a question for you... 💕
        </p>
      </div>

      <p className="text-lg sm:text-xl font-body text-foreground mb-6 sm:mb-8">Who's asking?</p>

      <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none sm:flex-row sm:justify-center">
        <button
          onClick={() => onSelect("male")}
          className="group relative px-8 sm:px-12 py-5 sm:py-6 rounded-2xl love-gradient text-primary-foreground font-body font-semibold text-lg sm:text-xl shadow-xl active:scale-95 transition-all duration-300 touch-manipulation"
        >
          <span className="relative z-10">👨 He's Asking</span>
          <div className="absolute inset-0 rounded-2xl bg-love-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
        <button
          onClick={() => onSelect("female")}
          className="group relative px-8 sm:px-12 py-5 sm:py-6 rounded-2xl love-gradient text-primary-foreground font-body font-semibold text-lg sm:text-xl shadow-xl active:scale-95 transition-all duration-300 touch-manipulation"
        >
          <span className="relative z-10">👩 She's Asking</span>
          <div className="absolute inset-0 rounded-2xl bg-love-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </div>
  );
};

export default GenderSelect;
