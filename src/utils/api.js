import axios from "axios";

const baseUrl = "https://reqres.in/api";

export const login = async (email, password) => {
  return await axios.post(baseUrl + "/login", {
    email,
    password,
  });
};
