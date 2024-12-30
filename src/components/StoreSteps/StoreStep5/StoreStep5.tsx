import "./StoreStep5.css"
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IoArrowForward } from "react-icons/io5";
import { useEffect, useState } from 'react';
import useMultiStepFormStore from "@/store/Zustand/Store";
import { useNavigate } from "react-router-dom";

// Schéma de validation avec Yup
const schema = yup.object().shape({
  fullname: yup.string().required("Le nom de l'employer est obligatoire"),
  phone: yup.string()
    .required('Le numéro de téléphone est obligatoire')
    .matches(
      /^[0-9]{10}$/,
      'Le numéro de téléphone doit contenir exactement 10 chiffres'
    ),
});

type FormInputs = {
  fullname: string;
  phone: string;
};

type Employee = {
  fullname: string;
  phone: string;
};

export default function StoreStep5() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [err, setErr] = useState<string>("");
  const navigat = useNavigate()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const { step, updateStepData, formData } = useMultiStepFormStore();
  // Fonction pour ajouter un employé
  const addEmployee = (data: FormInputs) => {
    setEmployees((prev) => [...prev, data]);  // Ajouter l'employé à la liste
    reset(); // Réinitialiser le formulaire après ajout
  };
  useEffect(() => {

    const savedData = formData[5];
    if (savedData) {
      setEmployees(savedData);

    }
  }, [step, formData]);

  // Fonction pour vérifier si des employés ont été ajoutés
  const checkEmployeesAndSubmit = () => {
    if (employees.length > 0) {

      updateStepData(step, employees)
      navigat("/CheckPoint/2")

    } else {

      setErr("Ajoutez au moins un employé avant de continuer.");
    }
  };
  const deleteEmployee = (indexToRemove: number) => {
    setEmployees((prev) => prev.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(() => { })}>
        <div className="Title-button">
          <h2>Add employees</h2>

          <button type="button" onClick={checkEmployeesAndSubmit}>
            <span>Continue</span>
            <IoArrowForward />
          </button>
        </div>
        {employees.length > 0 && (


          employees.map((employee, index) => (
            <>
              <div className="double-container" key={index}>
                {/* fullname */}
                <div>
                  <input disabled defaultValue={employee.fullname} />

                </div>

                {/* Phone */}
                <div>
                  <input disabled defaultValue={employee.phone} />

                </div>

              </div>
              <button type="button" className="delete-button" onClick={() => deleteEmployee(index)}>
                Delete this one
              </button></>
          ))


        )
        }
        <div className="double-container">
          {/* fullname */}
          <div>
            <input {...register('fullname')} placeholder="Full name :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.fullname?.message}</p>
          </div>

          {/* Phone */}
          <div>
            <input {...register('phone')} placeholder="Phone number :" />
            <p style={{ color: 'red', marginTop: '10px' }}>{errors.phone?.message}</p>
          </div>
        </div>
        {err != "" &&
          <p style={{ color: 'red', marginTop: '10px' }}>{errors.phone?.message}</p>
        }

        {/* Bouton pour ajouter un autre employé */}
        <button type="button" className="add-button" onClick={handleSubmit(addEmployee)}>
          Another one
        </button>
        {/* Liste des employés ajoutés */}


        <button type="submit" className="button-respo" >
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </form>



    </div>
  );
}
