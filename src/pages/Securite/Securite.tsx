import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Securite.css";
import { TextField, Button, Typography } from "@mui/material";

const passwordSchema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("New password is required"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your new password"),
});

interface PasswordFormInputs {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export default function ChangePasswordForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PasswordFormInputs>({
    resolver: yupResolver(passwordSchema),
  });

  const onSubmit = async (data: PasswordFormInputs) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await console.log(data.currentPassword, data.newPassword);
      setSuccess("Password changed successfully.");
      reset();
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="change-password-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Modifier le mot de passe</h1>

      <div className="form-field1">
        <TextField
          label="Current Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("currentPassword")}
          error={!!errors.currentPassword}
          helperText={errors.currentPassword?.message}
        />
      </div>

      <div className="form-field">
        <TextField
          label="New Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("newPassword")}
          error={!!errors.newPassword}
          helperText={errors.newPassword?.message}
        />

        <TextField
          label="Confirm New Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("confirmNewPassword")}
          error={!!errors.confirmNewPassword}
          helperText={errors.confirmNewPassword?.message}
        />
      </div>

      <Typography variant="body2" color="textPrimary">
        Mot de passe requis:
        <ul style={{ paddingTop: "20px" }}>
          <li>Minimum 8 caractères - plus il y en a, mieux c'est</li>
          <li>Au moins un caractère minuscule</li>
          <li>Au moins un chiffre, un symbole ou un caractère d'espacement</li>
        </ul>
      </Typography>

      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="success">{success}</Typography>}

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
  );
}
