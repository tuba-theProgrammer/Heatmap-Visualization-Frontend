import axios from 'axios';
import { Location } from '../types/Location';

export const fetchTemperatures = async (): Promise<Location[]> => {
  try {
    const response = await axios.get<Location[]>('http://localhost:3000/api/temperatures');
    return response.data;
  } catch (error) {
    console.error('Error fetching temperature data', error);
    throw error;
  }
};
