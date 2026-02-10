import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import BackgroundMusic from "@/components/BackgroundMusic";
import GenderSelect from "@/components/GenderSelect";
import ProposalScreen from "@/components/ProposalScreen";
import HeartbreakScreen from "@/components/HeartbreakScreen";
import AcceptanceScreen from "@/components/AcceptanceScreen";

type Screen = "gender" | "proposal" | "heartbreak" | "accepted";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("gender");
  const [gender, setGender] = useState<"male" | "female">("male");

  const handleGenderSelect = (g: "male" | "female") => {
    setGender(g);
    setScreen("proposal");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      <BackgroundMusic />

      {screen === "gender" && <GenderSelect onSelect={handleGenderSelect} />}
      {screen === "proposal" && (
        <ProposalScreen
          gender={gender}
          onYes={() => setScreen("accepted")}
          onHeartbreak={() => setScreen("heartbreak")}
        />
      )}
      {screen === "heartbreak" && (
        <HeartbreakScreen
          gender={gender}
          onTryAgain={() => setScreen("proposal")}
        />
      )}
      {screen === "accepted" && <AcceptanceScreen gender={gender} />}
    </div>
  );
};

export default Index;
