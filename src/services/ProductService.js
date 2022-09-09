import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
    withCredentials: false,
})

export default {
    getProducts() {
        return apiClient.get('')
    },
    getProductById(id) {
        return apiClient.get('/' + id)
    }
}

