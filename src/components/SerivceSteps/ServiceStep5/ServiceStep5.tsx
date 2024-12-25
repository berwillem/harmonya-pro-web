import { IoArrowForward } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./ServiceStep5.css";
import { useEffect } from "react";
import useMultiStepFormStore from "@/store/Zustand/Store";

// Schéma de validation avec Yup
const schema = yup.object().shape({
  color: yup.string().required("Veuillez choisir une Couleur."),
});

type FormInputs = {
  color: string;
};




const colors = [
  { text: "Blue", color: "linear-gradient(90deg, #008CFF 0%, #003BFF 100%)" },
  { text: "Purpel", color: "linear-gradient(90deg, #BF00FF 0%, #8200B9 100%)" },
  { text: "Pink", color: "linear-gradient(90deg, #FF00C8 0%, #FF006A 100%)" },
  { text: "Red", color: "linear-gradient(90deg, #FF0004 0%, #FF3D40 100%)" },
  { text: "Orange", color: "linear-gradient(90deg, #FF9500 0%, #FF3700 100%)" },
  { text: "Yellow", color: "linear-gradient(90deg, #FFBE31 0%, #FF9900 100%)" },
  { text: "Green", color: "linear-gradient(90deg, #58CC00 0%, #51C100 100%)" },
  { text: "Teal", color: "linear-gradient(90deg, #00FFC8 0%, #00BFFF 100%)" }


];

export default function ServiceStep5() {
  const { register, handleSubmit, formState: { errors }, setValue, watch } =
    useForm<FormInputs>({
      resolver: yupResolver(schema),
    });

  const { step, nextStep, updateStepData, formData } = useMultiStepFormStore();
  useEffect(() => {

    if (formData && formData[5] && typeof formData[5] === 'object') {
      Object.entries(formData[5] as FormInputs).forEach(([key, value]) => {
        setValue(key as keyof FormInputs, value as string);
      });
    } else {
      console.warn('formData[1] is undefined or not an object');
    }
  }, [formData, setValue]);
  const selectedColor = watch("color"); // Récupérer la catégorie sélectionnée

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Sauvegarder les données de cette étape dans Zustand
    updateStepData(step, data);
    // Passer à l'étape suivante
    nextStep();
  };



  const handleCategoryClick = (color: string) => {
    setValue("color", color); // Définir la catégorie sélectionnée
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Title-button">
          <div className="text">
            <h2>Select a color</h2>
            <p>check the colors or <span>contact support</span> to add one</p>
          </div>
          <button type="submit">
            <span>Continue</span>
            <IoArrowForward />
          </button>
        </div>

        <div className="color-container">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`color ${selectedColor === color.text ? "active-color" : ""}`}
              style={{ background: color.color }}
              onClick={() => handleCategoryClick(color.text)}
            >
              {color.text}
            </div>
          ))}
          <div

            className={`color ${selectedColor === "custom" ? "active-color" : ""}`}
            style={{ background: "black" }}
            onClick={() => handleCategoryClick("custom")}
          >
            Custom
          </div>
        </div>

        {errors.color && (
          <p style={{ color: "red", marginTop: "10px" }}>{errors.color.message}</p>
        )}

        <button type="submit" className="button-respo">
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </form>
    </div>
  );
}
