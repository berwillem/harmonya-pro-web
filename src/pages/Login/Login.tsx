import "./Login.css";
import login from "../../assets/login.jpeg";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { LoginPro } from "@/services/AuthServices";
type FormInputs = {
  email: string;
  password: string;

};
export default function Login() {
  // Schéma de validation avec Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),
    password: Yup.string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères")
      .required("Le mot de passe est obligatoire"),
  });

  // Configuration React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Gestion de soumission du formulaire
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    LoginPro(data).then(() => {

    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <main className="login">
      <div className="form-login">
        <div className="text">
          <h1>Harmonya<sup> Pro</sup></h1>
          <h2>Login</h2>
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
          <p>
            <Link to="/ForgetPassword">
              <span>Forgot your password?</span>
            </Link>
          </p>
          <button type="submit">Log in</button>
          <p>
            Don't have an account?{" "}
            <Link to="/Register">
              <span>Sign up and get started!</span>
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
