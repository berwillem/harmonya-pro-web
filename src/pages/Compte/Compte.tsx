import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import "./Compte.css";

const compteSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("Email requis"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Doit contenir uniquement des chiffres")
    .required("Numéro de téléphone requis"),
  responsableName: yup.string().required("Nom du responsable requis"),
  country: yup.string().required("Pays requis"),
  companyName: yup.string().required("Nom de l’entreprise requis"),
  confirmDelete: yup
    .boolean()
    .oneOf([true], "Confirmation requise pour supprimer"),
});

interface CompteFormInputs {
  email: string;
  phone: string;
  responsableName: string;
  country: string;
  companyName: string;
  confirmDelete: boolean;
}

export default function Compte() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<CompteFormInputs>({
    resolver: yupResolver(compteSchema),
  });

  const confirmDelete = watch("confirmDelete");

  const onSubmit = async (data: CompteFormInputs) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      console.log(data);
      setSuccess("Informations modifiées avec succès.");
      reset();
    } catch (err: any) {
      setError("Une erreur s'est produite.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rootform">
      <form
        className="first-card"
        onSubmit={handleSubmit(onSubmit)}
        style={{ gap: "1rem" }}
      >
        <h1>Modifier vos informations</h1>

        <div className="form-group">
          <div className="form-field">
            <TextField
              fullWidth
              label="Email du compte"
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              fullWidth
              label="Numéro de téléphone"
              variant="outlined"
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </div>
          <div className="form-field">
            <TextField
              fullWidth
              label="Nom du responsable"
              variant="outlined"
              {...register("responsableName")}
              error={!!errors.responsableName}
              helperText={errors.responsableName?.message}
            />
            <TextField
              fullWidth
              label="Pays"
              variant="outlined"
              {...register("country")}
              error={!!errors.country}
              helperText={errors.country?.message}
            />
          </div>
          <div className="form-field1">
            <TextField
              fullWidth
              label="Nom de l’entreprise"
              variant="outlined"
              {...register("companyName")}
              error={!!errors.companyName}
              helperText={errors.companyName?.message}
            />
          </div>
        </div>

        <div className="form-actions">
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? "Saving..." : "Sauvegarder les modifications"}
          </Button>
          <Button
            type="button"
            variant="outlined"
            onClick={() => reset()}
            disabled={loading}
          >
            Annuler
          </Button>
        </div>
      </form>

      <div
        className="first-card delete-section"
        style={{ gap: "1rem", marginBottom: "90px" }}
      >
        <h1>Delete account</h1>
        <div className="first-card-alert">
          <h1>Êtes-vous sûr de vouloir supprimer votre compte ?</h1>
          <p>
            Une fois que vous avez supprimé votre compte, vous ne pouvez plus
            revenir en arrière. Soyez sûr de vous.
          </p>
        </div>
        <FormControlLabel
          control={
            <Checkbox {...register("confirmDelete")} name="confirmDelete" />
          }
          label="Je confirme la désactivation de mon compte"
        />
        {errors.confirmDelete && (
          <Typography color="error" variant="caption">
            {errors.confirmDelete.message}
          </Typography>
        )}

        <Button
          className="delete-button2"
          variant="contained"
          color="error"
          disabled={!confirmDelete}
        >
          Décrivez votre compte
        </Button>
      </div>

      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="success">{success}</Typography>}
    </div>
  );
}
