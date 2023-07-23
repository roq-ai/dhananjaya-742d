import axios from 'axios';
import queryString from 'query-string';
import { DonorInterface, DonorGetQueryInterface } from 'interfaces/donor';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDonors = async (query?: DonorGetQueryInterface): Promise<PaginatedInterface<DonorInterface>> => {
  const response = await axios.get('/api/donors', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDonor = async (donor: DonorInterface) => {
  const response = await axios.post('/api/donors', donor);
  return response.data;
};

export const updateDonorById = async (id: string, donor: DonorInterface) => {
  const response = await axios.put(`/api/donors/${id}`, donor);
  return response.data;
};

export const getDonorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/donors/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDonorById = async (id: string) => {
  const response = await axios.delete(`/api/donors/${id}`);
  return response.data;
};
