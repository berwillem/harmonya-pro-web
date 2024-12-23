import login from "../../assets/login.jpeg";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type FormInputs = {
  email: string;
};

export default function ForgetPassword() {
  // Schéma de validation avec Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),
  });

  // Configuration React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });

  // Gestion de soumission du formulaire
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Données du formulaire :", data);
    // Envoyer les données à l'API ou gérer la logique de réinitialisation ici
  };

  return (
    <main className="login">
      <div className="form-login">
        <div className="text">
          <h1>
            Harmonya<sup> Pro</sup>
          </h1>
          <h2>Forget Password</h2>
          <p>Enter the email address associated with your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <button type="submit">Reinitialiser</button>
          <p>
            Do you remember your password?
            <Link to="/login">
              <span> Sign In</span>
            </Link>
          </p>
        </form>
      </div>
      <div className="image-login">
        <img src={login} alt="login" />
        <div className="overlay"></div>
      </div>
    </main>
  );
}
