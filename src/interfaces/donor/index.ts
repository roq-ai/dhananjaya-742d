import { DonationInterface } from 'interfaces/donation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DonorInterface {
  id?: string;
  kyc: string;
  pan_no: string;
  aadhar_number: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  donation?: DonationInterface[];
  user?: UserInterface;
  _count?: {
    donation?: number;
  };
}

export interface DonorGetQueryInterface extends GetQueryInterface {
  id?: string;
  kyc?: string;
  pan_no?: string;
  aadhar_number?: string;
  user_id?: string;
}
