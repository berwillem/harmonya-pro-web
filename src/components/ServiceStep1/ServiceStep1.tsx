
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IoArrowForward } from "react-icons/io5";
import useMultiStepFormStore from '@/store/Zustand/Store';
import { useEffect } from 'react';
// Schéma de validation avec Yup
const schema = yup.object().shape({
  serviceName: yup.string().required('Le nom du service est obligatoire'),
  serviceDuration: yup.string().required('La duree du service est obligatoire'),
  servicePrice: yup.string().required('Le prix du service est obligatoire'),
  descriptionService: yup.string().required('la description est obligatoire'),


});

type FormInputs = {
  serviceName: string;
  serviceDuration: string;
  servicePrice: string;
  descriptionService: string;



};
export default function ServiceStep1() {
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
          <div className="text">
            <h2>Name & describe your service</h2>
            <p>Hair cut, nails, masks ...</p>
          </div>
          <button type="submit" >
            <span>Continue</span>
            <IoArrowForward />
          </button>

        </div>

        <div className="three-container">
          {/* serviceName */}
          <div>
            <input {...register('serviceName')} placeholder="Hair cuts, nails, masks ... :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.serviceName?.message}</p>
          </div>

          {/* serviceDuration */}
          <div>
            <input {...register('serviceDuration')} placeholder="Duration :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.serviceDuration?.message}</p>
          </div>
          {/* servicePrice */}
          <div>
            <input {...register('servicePrice')} placeholder="Price :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.servicePrice?.message}</p>
          </div>

        </div>

        {/* Email */}
        <div className="text-area">
          <textarea  {...register('descriptionService')} placeholder="Describe your service here ... " />
          <p style={{ color: 'red', marginTop: '10px' }}>{errors.descriptionService?.message}</p>
        </div>




        <button type="submit" className="button-respo" >
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </form>

    </div>
  )
}