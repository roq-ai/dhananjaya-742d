import axios from 'axios';
import queryString from 'query-string';
import { DonationInterface, DonationGetQueryInterface } from 'interfaces/donation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDonations = async (
  query?: DonationGetQueryInterface,
): Promise<PaginatedInterface<DonationInterface>> => {
  const response = await axios.get('/api/donations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDonation = async (donation: DonationInterface) => {
  const response = await axios.post('/api/donations', donation);
  return response.data;
};

export const updateDonationById = async (id: string, donation: DonationInterface) => {
  const response = await axios.put(`/api/donations/${id}`, donation);
  return response.data;
};

export const getDonationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/donations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDonationById = async (id: string) => {
  const response = await axios.delete(`/api/donations/${id}`);
  return response.data;
};
