import { SubmitHandler, useForm } from "react-hook-form";
import { IoArrowForward } from "react-icons/io5";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  store: yup.string().required("Veuillez choisir une Boutique."),
});
type FormInputs = {
  store: string;
};

export default function BoostStep1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormInputs> = (data) => {

  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Title-button">
            <div className="text">
              <h2>Activer un boost</h2>
              <p>Sélectionnez votre magasin</p>
            </div>
            <button type="submit">
              <span>Continue</span>
              <IoArrowForward />
            </button>
          </div>
        </form>
      </div>


    </div>
  )
}