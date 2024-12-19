import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMultiStepFormStore = create(
  persist<{
    step: number;
    totalSteps: number;
    formData: Record<number, any>;
    nextStep: () => void;
    previousStep: () => void;
    resetStore: () => void;
    goToStep: (targetStep: number) => void;
    updateStepData: (step: number, data: any) => void;
    getStepData: (step: number) => any;
  }>(
    (set) => ({
      step: 1,
      totalSteps: 6,
      formData: {},
      nextStep: () =>
        set((state) => ({
          step: state.step < state.totalSteps ? state.step + 1 : state.step,
        })),
      previousStep: () =>
        set((state) => ({
          step: state.step > 1 ? state.step - 1 : state.step,
        })),
      goToStep: (targetStep) =>
        set((state) => ({
          step: targetStep >= 1 && targetStep <= state.totalSteps ? targetStep : state.step,
        })),
      updateStepData: (step, data) =>
        set((state) => ({
          formData: { ...state.formData, [step]: data },
        })),
      resetStore: () => set(() => ({
        step: 1,
        formData: {},
      })),
      getStepData: (step) => (state: { formData: any[]; }) => state.formData[step] || {},
    }),
    {
      name: "multi-step-form-store", // Nom pour le localStorage
      partialize: (state) => ({
        step: state.step,
        formData: state.formData,
      }), // Sauvegarde uniquement les données nécessaires
    }
  )
);

export default useMultiStepFormStore;
