import { BASE_API_URL } from "../config/api";
import axios from "axios";
axios.defaults.withCredentials = true;
type FormInputs = {
  email: string;
  password: string;
 
};
type FormInputs2 = {
  email: string;
  password: string;
  confirmPassword: string;
};
export const LoginPro = (data:FormInputs) => {
  return axios.post(`${BASE_API_URL}/auth`,data);
};
export const RegisterPro = (data:FormInputs2) => {
  return axios.post(`${BASE_API_URL}/user`,data);
};
