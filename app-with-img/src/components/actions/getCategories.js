import axios from "axios";

export const getCategories = async () =>
  await axios.get("https://api.thecatapi.com/v1/categories ");
