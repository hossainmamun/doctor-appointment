import * as yup from 'yup';

// user signup validation
export const signUpValidation = yup.object({
   user_name: yup.string().max(25).required(),
   email: yup.string().email().required(),
   password: yup.string().min(6).max(15).required(),
});

// user login validation
export const loginValidation = yup.object({
   email: yup.string().email().required(),
   password: yup.string().required(),
});

// appointment form validation
export const appointmentValidation = yup.object({
   patient_name: yup.string().max(20).required(),
   mobile_number: yup.string().min(11).max(11).required(),
   email: yup.string().email().required(),
   date_of_birth: yup.string().required(),
   branch: yup.string().required(),
   department: yup.string().required(),
   professionals: yup.string().required(),
   appointment_date: yup.string().required(),
   appointment_time: yup.string().required(),
   gender: yup.string().required(),
});


// banner validation
export const bannerValidation = yup.object({
   imgUrl: yup.string().required(),
   banner_title: yup.string().max(200).required(),
   banner_detail: yup.string().max(500).required(),
});