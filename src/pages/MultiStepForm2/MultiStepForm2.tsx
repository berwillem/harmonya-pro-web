import ServiceStep1 from "@/components/SerivceSteps/ServiceStep1/ServiceStep1";
import ServiceStep2 from "@/components/SerivceSteps/ServiceStep2/ServiceStep2";
import ServiceStep3 from "@/components/SerivceSteps/ServiceStep3/ServiceStep3";
import ServiceStep4 from "@/components/SerivceSteps/ServiceStep4/ServiceStep4";
import ServiceStep5 from "@/components/SerivceSteps/ServiceStep5/ServiceStep5";
import ServiceStep6 from "@/components/SerivceSteps/ServiceStep6/ServiceStep6";
import TopStep from "@/components/TopStep/TopStep";
import useMultiStepFormStore from "@/store/Zustand/Store";

export default function MultiStepForm2() {
  const { step } = useMultiStepFormStore();
  return (
    <main className="multi-step-form">
      <TopStep prog={`${(100 / 5) * (step - 1)}%`} />
      {step == 1 && <ServiceStep1 />}
      {step == 2 && <ServiceStep2 />}
      {step == 3 && <ServiceStep3 />}
      {step == 4 && <ServiceStep4 />}
      {step == 5 && <ServiceStep5 />}
      {step == 6 && <ServiceStep6 />}
    </main>
  );
}
