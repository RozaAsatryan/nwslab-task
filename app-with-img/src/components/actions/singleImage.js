import axios from "axios";

export const getSingleImage = async (id) =>
  await axios.get(`https://api.thecatapi.com/v1/images/${id} `);
