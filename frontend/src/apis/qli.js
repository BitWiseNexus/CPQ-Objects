import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/qlis';

export const getAllQLIs = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.error('Error fetching QLIs:', error);
    return [];
  }
};

export const createQLI = async (data) => {
  try {
    const res = await axios.post(BASE_URL, data);
    return res.data;
  } catch (error) {
    console.error('Error creating QLI:', error.response?.data || error.message);
    return null;
  }
};

export const updateQLI = async (id, data) => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, data);
    return res.data;
  } catch (error) {
    console.error('Error updating QLI:', error.response?.data || error.message);
    return null;
  }
};

export const deleteQLI = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error deleting QLI:', error.response?.data || error.message);
    return null;
  }
};
