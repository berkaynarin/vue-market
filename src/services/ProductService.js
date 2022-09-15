import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  withCredentials: false,
});

export default {
  async getProducts() {
    try {
      return await apiClient.get("/products");
    } catch (error) {
      return console.log("An error occured: " + error);
    }
  },
  async getProductById(id) {
    try {
      return await apiClient.get("/products/" + id);
    } catch (error) {
      return console.log("An error occured: " + error);
    }
  },
};
