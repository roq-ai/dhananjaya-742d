import * as yup from 'yup';

export const donorValidationSchema = yup.object().shape({
  kyc: yup.string().required(),
  pan_no: yup.string().required(),
  aadhar_number: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
