import "./StoreStep2.css";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoArrowForward } from "react-icons/io5";
import useMultiStepFormStore from "@/store/Zustand/Store"; // Votre chemin vers le store Zustand

// Schéma de validation avec Yup
const schema = yup.object().shape({
  images: yup
    .array()
    .of(
      yup
        .mixed<File>()
        .required("A file is required")
        .test("fileType", "Only images are allowed", (file) =>
          file ? ["image/jpeg", "image/png", "image/jpg"].includes(file.type) : false
        )
    )
    .min(1, "You must upload at least 1 image")
    .max(3, "You can upload up to 3 images"),
});

type FormInputs = {
  images?: File[];
};

export default function StoreStep2() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { step, nextStep, updateStepData, formData } = useMultiStepFormStore();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      images: [], // Default values are empty on load
    },
  });

  // Charger les données sauvegardées du Zustand lorsque le composant se charge
  useEffect(() => {
    const savedData = formData[2]; // Assurez-vous que formData[2] contient les images
    if (savedData?.images) {
      setSelectedImages(savedData.images);
      setValue("images", savedData.images, { shouldValidate: true });
    }
  }, [step, formData, setValue]);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    updateStepData(step, { images: selectedImages }); // Sauvegarder les images dans le store
    nextStep();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      const totalFiles = selectedImages.length + newFiles.length;

      if (totalFiles > 3) {
        setError("You can upload up to 3 images.");
      } else {
        const updatedImages = [...selectedImages, ...newFiles];
        setSelectedImages(updatedImages);
        setValue("images", updatedImages, { shouldValidate: true });
        setError(null);
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
    setValue("images", updatedImages, { shouldValidate: true });
  };

  const handleDragStart = (index: number) => setDraggedIndex(index);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== index) {
      const updatedImages = [...selectedImages];
      const [draggedItem] = updatedImages.splice(draggedIndex, 1);
      updatedImages.splice(index, 0, draggedItem);

      setDraggedIndex(index);
      setSelectedImages(updatedImages);
      setValue("images", updatedImages, { shouldValidate: true });
    }
  };

  const handleDragEnd = () => setDraggedIndex(null);

  // Fonction pour créer une URL valide pour les images
  const createImageURL = (file: File) => {
    if (file && file instanceof Blob) {
      return URL.createObjectURL(file);
    }
    return "";
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Title-button">
          <div className="text">
            <h2>Add photos to your store</h2>
            <p>Select the best-looking photos that describe your service</p>
          </div>
          <button type="submit">
            <span>Continue</span>
            <IoArrowForward />
          </button>
        </div>
        <div className="images-container">
          <div>
            <div className="file-input">
              <p>You can upload up to 3 images</p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
              <p>Upload files</p>
            </div>
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
            {errors.images && (
              <p style={{ color: "red", marginTop: "10px" }}>
                {(errors.images.message as string) || ""}
              </p>
            )}
          </div>
          <div className="preview-container">
            {selectedImages.map((image, index) => (
              <div
                key={index}
                className="image-preview"
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
              >
                <div className="img-text">
                  <img
                    src={createImageURL(image)} // Utilisation de la fonction pour créer une URL valide
                    alt={`preview-${index}`}
                    className="preview-img"
                  />
                  <div className="text-drag-cart">
                    <div className="text">
                      <h2>{image?.name}</h2>
                      <p>{(image?.size / 1000).toFixed(2)} KB</p>
                    </div>
                    {index === 0 && <div className="cover-label">Cover image</div>}
                  </div>
                </div>
                <div className="drag-effect">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => handleRemoveImage(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="button-respo">
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </form>
    </div>
  );
}
