import axios from "axios";

const baseURL = "http://localhost:5000/api/products";

const getProduct = async (category) => {
  try {
    if (category) {
      const { data } = await axios.get(`${baseURL}?category=${category}`);
      return data;
    } else {
      const { data } = await axios.get(`${baseURL}`);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getProduct;
