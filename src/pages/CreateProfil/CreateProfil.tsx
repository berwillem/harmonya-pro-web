import TopStep from "@/components/TopStep/TopStep"
import "./CreateProfil.css"
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IoArrowForward } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

// Schéma de validation avec Yup
const schema = yup.object().shape({
  firstName: yup.string().required('Le prénom est obligatoire'),
  lastName: yup.string().required('Le nom est obligatoire'),
  email: yup
    .string()
    .email('L\'email doit être valide')
    .required('L\'email est obligatoire'),
  password: yup
    .string()
    .required('Le mot de passe est obligatoire')
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;


};

export default function CreateProfil() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const navigat = useNavigate()


  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log('Données soumises:', data);
    navigat("/subscriptionChoise")
  };
  return (
    <main>

      <TopStep prog="0%" />
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Title-button">
            <h2>Create your profile</h2>
            <button type="submit" >
              <span>Continue</span>
              <IoArrowForward />
            </button>

          </div>
          {/* Nom */}
          <div className="name-container">
            <div>
              <input {...register('lastName')} placeholder="Nom:" />
              <p style={{ color: 'red', marginTop: '10px' }}>{errors.lastName?.message}</p>
            </div>

            {/* Prénom */}
            <div>
              <input {...register('firstName')} placeholder="Prénom :" />
              <p style={{ color: 'red', marginTop: '10px' }}>{errors.firstName?.message}</p>
            </div>

          </div>
          {/* Email */}
          <div>
            <input type="email" {...register('email')} placeholder="Email :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.email?.message}</p>
          </div>

          {/* Mot de passe */}
          <div className="last">
            <input type="password" {...register('password')} placeholder="Mot de passe :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.password?.message}</p>
          </div>
          {/* check box*/}
          <div className="check-box">
            <div className="checkbox">
              <input type="checkbox" id="isActive" className="custom-checkbox" />
              <label htmlFor="">Accepter les condition de confidentialité <Link to="/login"> <span>Connectez vous </span></Link></label>
            </div>

          </div>
          <button type="submit" className="button-respo" >
            <span>Continue</span>
            <IoArrowForward />
          </button>
        </form>

      </div>
    </main>
  )
}