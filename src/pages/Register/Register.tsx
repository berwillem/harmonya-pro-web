import "./Register.css";
import login from "../../assets/login.jpeg";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { RegisterPro } from "@/services/AuthServices";

type FormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  // Schéma de validation avec Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),
    password: Yup.string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères")
      .required("Le mot de passe est obligatoire"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Les mots de passe doivent correspondre")
      .required("La confirmation du mot de passe est obligatoire"),
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
    const data2 = {
      email: data.email,
      password: data.password
    }
    RegisterPro(data2).then(() => {

    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <main className="login">
      <div className="form-login">
        <div className="text">
          <h1>
            Harmonya<sup> Pro</sup>
          </h1>
          <h2>Register</h2>
          <p>Inter your information to start</p>
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
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirme password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button type="submit">Register</button>
          <p>
            Already have an account?
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
