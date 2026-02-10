import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

interface BackgroundMusicProps {
  onFirstPlay?: () => void;
}

const BackgroundMusic = ({ onFirstPlay }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      if (!hasStarted) {
        setHasStarted(true);
        onFirstPlay?.();
      }
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/music/background.mp3" />

      {/* Initial play prompt */}
      {!hasStarted && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm">
          <p className="text-2xl md:text-3xl font-script text-primary mb-8">
            Tap to feel the love 💕
          </p>
          <button
            onClick={toggleMusic}
            className="group relative w-24 h-24 rounded-full love-gradient flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-love"
            aria-label="Play music"
          >
            <Play className="w-10 h-10 text-primary-foreground ml-1" />
          </button>
          <p className="mt-6 text-muted-foreground font-body text-sm">
            🎵 Press play to begin 🎵
          </p>
        </div>
      )}

      {/* Persistent toggle after started */}
      {hasStarted && (
        <button
          onClick={toggleMusic}
          className="fixed top-4 right-4 z-50 p-3 rounded-full glass-card shadow-lg hover:scale-110 transition-transform duration-200"
          aria-label={playing ? "Mute music" : "Play music"}
        >
          {playing ? (
            <Volume2 className="w-5 h-5 text-primary" />
          ) : (
            <VolumeX className="w-5 h-5 text-muted-foreground" />
          )}
        </button>
      )}
    </>
  );
};

export default BackgroundMusic;
