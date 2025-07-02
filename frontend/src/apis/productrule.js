import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/product-rules';

export const getAllProductRules = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.error('Error fetching product rules:', error);
    return [];
  }
};

export const createProductRule = async (data) => {
  try {
    const res = await axios.post(BASE_URL, data);
    return res.data;
  } catch (error) {
    console.error('Error creating product rule:', error.response?.data || error.message);
    return null;
  }
};

export const updateProductRule = async (id, data) => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, data);
    return res.data;
  } catch (error) {
    console.error('Error updating product rule:', error.response?.data || error.message);
    return null;
  }
};

export const deleteProductRule = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error deleting product rule:', error.response?.data || error.message);
    return null;
  }
};
