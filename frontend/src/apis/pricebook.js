import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/pricebooks';

export const getAllPricebooks = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.error('Error fetching pricebooks:', error);
    return [];
  }
};

export const createPricebook = async (data) => {
  try {
    const res = await axios.post(BASE_URL, data);
    return res.data;
  } catch (error) {
    console.error('Error creating pricebook:', error.res?.data || error.message);
    return null;
  }
};

export const updatePricebook = async (id, data) => {
  const res = await axios.put(`${BASE_URL}/${id}`, data);
  return res.data;
};

export const deletePricebook = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
