import StoreStep1 from "@/components/StoreSteps/StoreStep1/StoreStep1";
import StoreStep2 from "@/components/StoreSteps/StoreStep2/StoreStep2";
import StoreStep3 from "@/components/StoreSteps/StoreStep3/StoreStep3";
import StoreStep4 from "@/components/StoreSteps/StoreStep4/StoreStep4";
import StoreStep5 from "@/components/StoreSteps/StoreStep5/StoreStep5";
import TopStep from "@/components/TopStep/TopStep";
import useMultiStepFormStore from "@/store/Zustand/Store";

export default function MultiStepForm() {
  const { step } = useMultiStepFormStore();

  return (
    <main className="multi-step-form">
      <TopStep prog={`${(100 / 5) * (step - 1)}%`} />
      {step == 1 && <StoreStep1 />}
      {step == 2 && <StoreStep2 />}
      {step == 3 && <StoreStep3 />}
      {step == 4 && <StoreStep4 />}
      {step == 5 && <StoreStep5 />}
    </main>
  );
}
