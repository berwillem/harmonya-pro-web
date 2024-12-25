
import "./StoreStep1.css";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IoArrowForward } from "react-icons/io5";
import useMultiStepFormStore from "@/store/Zustand/Store";
import { useEffect } from "react";

// Schéma de validation avec Yup
const schema = yup.object().shape({
  storeName: yup.string().required('Le nom du magasin est obligatoire'),
  storeEmail: yup
    .string()
    .email('L\'email doit être valide')
    .required('L\'email est obligatoire'),
  storePhone: yup.string()
    .required('Le numéro de téléphone est obligatoire')
    .matches(
      /^[0-9]{10}$/,
      'Le numéro de téléphone doit contenir exactement 10 chiffres'
    ),
  managerName: yup.string().required('Le nom est obligatoire'),
  descriptionStore: yup.string().required('La description est obligatoire'),
  managerEmail: yup
    .string()
    .email('L\'email doit être valide')
    .required('L\'email est obligatoire'),
  managerPhone: yup.string()
    .required('Le numéro de téléphone est obligatoire')
    .matches(
      /^[0-9]{10}$/,
      'Le numéro de téléphone doit contenir exactement 10 chiffres'
    ),
});

type FormInputs = {
  storeName: string;
  storeEmail: string;
  storePhone: string;
  managerName: string;
  managerEmail: string;
  managerPhone: string;
  descriptionStore: string;
};

export default function StoreStep1() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const { step, nextStep, updateStepData, formData } = useMultiStepFormStore();


  // Charger les données existantes si elles sont disponibles

  useEffect(() => {

    if (formData && formData[1] && typeof formData[1] === 'object') {
      Object.entries(formData[1] as FormInputs).forEach(([key, value]) => {
        setValue(key as keyof FormInputs, value as string);
      });
    } else {
      console.warn('formData[1] is undefined or not an object');
    }
  }, [formData, setValue]);


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
          <h2>Create a store</h2>
          <button type="submit">
            <span>Continue</span>
            <IoArrowForward />
          </button>
        </div>

        <div className="three-container">
          <div>
            <input {...register('storeName')} placeholder="Name of the store :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.storeName?.message}</p>
          </div>
          <div>
            <input {...register('storeEmail')} placeholder="Email of the store :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.storeEmail?.message}</p>
          </div>
          <div>
            <input {...register('storePhone')} placeholder="Store phone number :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.storePhone?.message}</p>
          </div>
        </div>

        <div className="three-container">
          <div>
            <input {...register('managerName')} placeholder="Name of the manager :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.managerName?.message}</p>
          </div>
          <div>
            <input {...register('managerEmail')} placeholder="Manager email :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.managerEmail?.message}</p>
          </div>
          <div>
            <input {...register('managerPhone')} placeholder="Manager phone :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.managerPhone?.message}</p>
          </div>
        </div>

        <div className="text-area">
          <textarea {...register('descriptionStore')} placeholder="Store description :" />
          <p style={{ color: 'red', marginTop: '10px' }}>{errors.descriptionStore?.message}</p>
        </div>

        <button type="submit" className="button-respo">
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </form>
    </div>
  );
}
