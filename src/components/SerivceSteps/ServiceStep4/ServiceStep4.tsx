import { IoArrowForward } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import useMultiStepFormStore from "@/store/Zustand/Store";

// Schéma de validation avec Yup
const schema = yup.object().shape({
  category: yup
    .array()
    .of(yup.string().required("Chaque catégorie doit être une chaîne valide."))
    .min(1, "Veuillez choisir au moins une catégorie.")
    .required(),
});

type FormInputs = {
  category: string[]; // Tableau de chaînes strictement
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

export default function ServiceStep4() {
  const { register, handleSubmit, formState: { errors }, setValue, watch } =
    useForm<FormInputs>({
      resolver: yupResolver(schema),
      defaultValues: {
        category: [], // Tableau vide par défaut
      },
    });

  const { step, nextStep, updateStepData, formData } = useMultiStepFormStore();

  useEffect(() => {
    if (formData && formData[4] && typeof formData[4] === "object") {
      Object.entries(formData[4] as FormInputs).forEach(([key, value]) => {
        setValue(key as keyof FormInputs, value as string[]);
      });
    } else {
      console.warn("formData[4] is undefined or not an object");
    }
  }, [formData, setValue]);

  const selectedCategories = watch("category") || []; // Récupérer les catégories sélectionnées

  const handleCategoryClick = (cat: string) => {
    let updatedCategories;

    if (selectedCategories.includes(cat)) {
      // Supprimer la catégorie si elle est déjà sélectionnée
      updatedCategories = selectedCategories.filter((c) => c !== cat);
    } else {
      // Ajouter la catégorie si elle n'est pas encore sélectionnée
      updatedCategories = [...selectedCategories, cat];
    }

    setValue("category", updatedCategories); // Mettre à jour le tableau
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Sauvegarder les données de cette étape dans Zustand
    updateStepData(step, data);
    // Passer à l'étape suivante
    nextStep();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Title-button">
          <div className="text">
            <h2>Select a subcategory</h2>
            <p>
              Check the subcategory or <span>contact support</span> to add one
            </p>
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
              className={`cat ${selectedCategories.includes(cat) ? "active-cat" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {errors.category && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {errors.category.message}
          </p>
        )}

        <button type="submit" className="button-respo">
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </form>
    </div>
  );
}
