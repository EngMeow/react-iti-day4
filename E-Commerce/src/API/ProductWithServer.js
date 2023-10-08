import axios from "axios";

const baseUrl = "http://localhost:3000/products";

const getAllPeoducts = () =>  axios.get(baseUrl);
const getProductById = (productId) => axios.get(`${baseUrl}/${productId}`)
const addNewProduct = (product) => axios.post(baseUrl, product)
const editProduct = (productId, product) => axios.put(`${baseUrl}/${productId}`, product)
const deleteProduct = (productId) => axios.delete(`${baseUrl}/${productId}`);

export {getAllPeoducts,getProductById,addNewProduct,editProduct,deleteProduct}



