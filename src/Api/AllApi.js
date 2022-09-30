import axios from "axios";

export const requresLogin = (payLode) => {
  return axios.post("https://reqres.in/api/login", payLode);
};

export const baseUrl = axios.create({
  baseURL: "http://localhost:5000",
});
