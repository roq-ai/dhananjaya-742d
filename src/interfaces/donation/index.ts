import { DonorInterface } from 'interfaces/donor';
import { NonprofitInterface } from 'interfaces/nonprofit';
import { GetQueryInterface } from 'interfaces';

export interface DonationInterface {
  id?: string;
  amount: number;
  date: any;
  donor_id: string;
  nonprofit_id: string;
  created_at?: any;
  updated_at?: any;

  donor?: DonorInterface;
  nonprofit?: NonprofitInterface;
  _count?: {};
}

export interface DonationGetQueryInterface extends GetQueryInterface {
  id?: string;
  donor_id?: string;
  nonprofit_id?: string;
}
