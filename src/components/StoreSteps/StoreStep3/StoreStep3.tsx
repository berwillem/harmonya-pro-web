import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IoArrowForward } from "react-icons/io5";
import "./StoreStep3.css"; // Assurez-vous d'inclure un fichier CSS pour le style
import useMultiStepFormStore from '@/store/Zustand/Store';
import { useEffect } from 'react';

// Schéma de validation avec Yup
const schema = yup.object().shape({
  location: yup
    .string()
    .required('Le lien Google Maps est obligatoire')
    .url('Veuillez entrer une URL valide')
    .test(
      'is-google-maps',
      'Veuillez entrer un lien Google Maps valide',
      (value) =>
        !!value &&
        (value.startsWith('https://www.google.com/maps') || value.startsWith('https://maps.google.com'))
    ),
});

type FormInputs = {
  location: string;
};

export default function StoreStep3() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const { step, nextStep, updateStepData, formData } = useMultiStepFormStore();
  useEffect(() => {
    if (formData && formData[3] && typeof formData[3] === 'object') {
      Object.entries(formData[3] as FormInputs).forEach(([key, value]) => {
        setValue(key as keyof FormInputs, value as string); // Conversion explicite
      });
    }
  }, [formData, setValue]);
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    updateStepData(step, data);
    nextStep();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-step3">
        <div className="Title-button">
          <h2>Where is your store located?</h2>
          <button type="submit" className="continue-button">
            <span>Continue</span>
            <IoArrowForward />
          </button>
        </div>

        {/* Input pour la localisation */}
        <div className="input-container">
          <input
            {...register('location')}
            placeholder="Entrez le lien Google Maps"
            className={`input ${errors.location ? 'input-error' : ''}`}
          />
          {errors.location && (
            <p className="error-message">{errors.location.message}</p>
          )}
        </div>

        {/* Bouton supplémentaire pour mobile */}
        <button type="submit" className="button-respo">
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </form>
    </div>
  );
}
