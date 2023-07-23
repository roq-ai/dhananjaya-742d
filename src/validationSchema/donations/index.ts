import * as yup from 'yup';

export const donationValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  date: yup.date().required(),
  donor_id: yup.string().nullable().required(),
  nonprofit_id: yup.string().nullable().required(),
});
