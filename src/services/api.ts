import axios from "axios";

export const API_KEY = "87598b803b58722fab4b284a753e385f";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
