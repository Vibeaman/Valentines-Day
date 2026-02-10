import heartbreakImg from "@/assets/heartbreak.jpg";

interface HeartbreakScreenProps {
  gender: "male" | "female";
  onTryAgain: () => void;
}

const HeartbreakScreen = ({ gender, onTryAgain }: HeartbreakScreenProps) => {
  const pronoun = gender === "male" ? "He" : "She";

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 py-8 relative z-10">
      <div className="text-center w-full max-w-lg mx-auto">
        <img
          src={heartbreakImg}
          alt="Heartbreak"
          className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full mx-auto mb-6 shadow-2xl animate-crack border-4 border-destructive/30"
        />

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-script text-destructive mb-3">
          💔 Heartbroken 💔
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground font-body mb-2">
          {pronoun} really hoped you'd say yes...
        </p>
        <p className="text-sm sm:text-base text-muted-foreground font-body mb-6">
          Sometimes the heart wants what it can't have. 😢
        </p>

        <img
          src="https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif"
          alt="Crying"
          className="w-36 h-36 sm:w-48 sm:h-48 object-cover rounded-2xl mx-auto mb-6 shadow-lg"
        />

        <button
          onClick={onTryAgain}
          className="px-8 sm:px-10 py-3 sm:py-4 rounded-2xl love-gradient text-primary-foreground font-body font-bold text-lg sm:text-xl shadow-xl active:scale-95 transition-all duration-300 touch-manipulation"
        >
          Give {pronoun === "He" ? "Him" : "Her"} Another Chance? 🥺
        </button>
      </div>
    </div>
  );
};

export default HeartbreakScreen;
