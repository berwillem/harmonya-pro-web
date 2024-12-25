import { IoArrowForward } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./ServiceStep3.css";
import useMultiStepFormStore from "@/store/Zustand/Store";
import { useEffect } from "react";

// Schéma de validation avec Yup
const schema = yup.object().shape({
  category: yup.string().required("Veuillez choisir une catégorie."),
});

type FormInputs = {
  category: string;
};

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

export default function ServiceStep3() {
  const { register, handleSubmit, formState: { errors }, setValue, watch } =
    useForm<FormInputs>({
      resolver: yupResolver(schema),
    });
  const { step, nextStep, updateStepData, formData } = useMultiStepFormStore();
  useEffect(() => {

    if (formData && formData[3] && typeof formData[3] === 'object') {
      Object.entries(formData[3] as FormInputs).forEach(([key, value]) => {
        setValue(key as keyof FormInputs, value as string);
      });
    } else {
      console.warn('formData[1] is undefined or not an object');
    }
  }, [formData, setValue]);
  const selectedCategory = watch("category"); // Récupérer la catégorie sélectionnée

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Sauvegarder les données de cette étape dans Zustand
    updateStepData(step, data);
    // Passer à l'étape suivante
    nextStep();
  };

  const handleCategoryClick = (cat: string) => {
    setValue("category", cat); // Définir la catégorie sélectionnée
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Title-button">
          <div className="text">
            <h2>Select a category</h2>
            <p>check the categories or <span>contact support</span> to add one</p>
          </div>
          <button type="submit">
            <span>Continue</span>
            <IoArrowForward />
          </button>
        </div>

        <div className="category-container">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`cat ${selectedCategory === cat ? "active-cat" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {errors.category && (
          <p style={{ color: "red", marginTop: "10px" }}>{errors.category.message}</p>
        )}

        <button type="submit" className="button-respo">
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </form>
    </div>
  );
}
