import axiosInstance from './axiosInstance';

export const getOrders = async () => {
  try {
    const response = await axiosInstance.get('/orders');
    return response.data;
  } catch (error) {
    throw error;
  }
};