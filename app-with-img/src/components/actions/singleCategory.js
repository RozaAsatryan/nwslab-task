import axios from "axios";

export const getSingleCategory = async (page, id) =>
  await axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id} `
  );
