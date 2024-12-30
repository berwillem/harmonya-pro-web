import { IoArrowBack } from "react-icons/io5";
import "./TopStep.css";
import useMultiStepFormStore from "@/store/Zustand/Store";

// TODO : move this to a separate file in data
const colors = [
  { text: "Blue", color: "linear-gradient(90deg, #008CFF 0%, #003BFF 100%)" },
  { text: "Purpel", color: "linear-gradient(90deg, #BF00FF 0%, #8200B9 100%)" },
  { text: "Pink", color: "linear-gradient(90deg, #FF00C8 0%, #FF006A 100%)" },
  { text: "Red", color: "linear-gradient(90deg, #FF0004 0%, #FF3D40 100%)" },
  { text: "Orange", color: "linear-gradient(90deg, #FF9500 0%, #FF3700 100%)" },
  { text: "Yellow", color: "linear-gradient(90deg, #FFBE31 0%, #FF9900 100%)" },
  { text: "Green", color: "linear-gradient(90deg, #58CC00 0%, #51C100 100%)" },
  { text: "Teal", color: "linear-gradient(90deg, #00FFC8 0%, #00BFFF 100%)" },
];
const categories = [
  "Coiffure homme",
  "Coiffure femme",
  "Coiffure enfant",
  "Manucure classique",
  "Manucure express",
  "Manucure semi-permanente",
  "Extensions d’ongles",
  "Maquillage de jour",
  "Maquillage de soirée",
];

export default function TopStep({ prog }: { prog: string }) {
  const { previousStep, step, formData, updateStepData } = useMultiStepFormStore();

  const handleClick = () => {
    previousStep();
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    updateStepData(3, { category: newCategory });
  };

  return (
    <div className="top-step">
      <div className="content-top-step">
        <div className="back" onClick={handleClick}>
          <IoArrowBack />
        </div>
        <div className="text-logo">Harmonya</div>
        <span></span>
      </div>
      {step === 6 && (
        <ul className="infos-confimation">
          <li>{formData[1] && formData[1].serviceName}</li>
          <li>{formData[1] && formData[1].servicePrice} DZD</li>
          <li>
            <span
              style={{
                background: colors.find(
                  (item) => item.text === formData[5]?.color
                )?.color,
              }}
            ></span>
          </li>
          <li>
            <select
              value={formData[3]?.category || ""}
              onChange={handleCategoryChange}
            >
              <option value="" disabled>
                Sélectionner une catégorie
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </li>
        </ul>
      )}

      <div className="step">
        <div className="progresse" style={{ width: prog }}></div>
      </div>
    </div>
  );
}
