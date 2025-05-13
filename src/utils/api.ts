import axios from "axios";
import instance from "@/utils/axios.customize";

export const registerAPI = (email: string, password: string, name: string) => {
  const url = `${instance}/api/v1/auth/register`;
  return axios.post(url, {
    email,
    password,
    name,
  });
};
