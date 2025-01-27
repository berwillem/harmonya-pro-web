import BoostStep1 from "@/components/BoostSteps/BoostStep1/BoostStep1";
import TopStep from "@/components/TopStep/TopStep";
import "./BoostStep.css"
import BoostStep2 from "@/components/BoostSteps/BoostStep2/BoostStep2";

export default function BoostStep() {
  return (
<main className="multi-step-form boost-active">
      <TopStep prog={`${(100 / 5) * (2 - 1)}%`} />
       <BoostStep2/>
    </main>
  )
}