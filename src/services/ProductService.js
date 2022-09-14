import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  withCredentials: false,
});

export default {
  getProducts() {
    return apiClient
      .get("/products")
      .catch((error) => console.log("An error occured: " + error));
  },
  getProductById(id) {
    return apiClient
      .get("/products/" + id)
      .catch((error) => console.log("An error occured: " + error));
  },
};
