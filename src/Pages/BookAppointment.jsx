import { useContext } from 'react';
import { authContext } from '../context/authContext.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { appointmentValidation } from '../validation/validation.js';
import swal from 'sweetalert';
import axios from 'axios';

const BookAppointment = () => {
   const { user } = useContext(authContext);

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: yupResolver(appointmentValidation),
   });
   const onSubmit = async (data) => {
      const {
         patient_name,
         mobile_number,
         email,
         date_of_birth,
         branch,
         department,
         professionals,
         appointment_date,
         appointment_time,
         gender,
      } = data;

      try {
         const response = await axios.post(
            'https://doctor-appointment-api.onrender.com/api/patient/appointment',
            {
               patient_name,
               mobile_number,
               email,
               date_of_birth,
               branch,
               department,
               professionals,
               appointment_date,
               appointment_time,
               gender,
            }
         );

         if (response.status === 201) {
            swal({
               title: 'Good Job',
               text: 'appointment created successfully',
               icon: 'success',
               button: 'Ok',
            });
            reset();
         }
      } catch (error) {
         swal({
            title: 'Sorry!',
            text: error.response.data.error,
            icon: 'warning',
            button: 'Ok',
         });
      }
   };
   return (
      <div className='flex justify-center items-center min-h-screen'>
         <div className='mx-6 sm:mx-10 w-full md:w-[60%] lg:w-[50%] xl:w-[45%] 2xl:w-[35%]'>
            {/* form start */}
            <div className='py-[150px]'>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='flex justify-center'>
                     <div className='mb-3 w-full'>
                        <label className='form-label inline-block mb-2 text-gray-700'>
                           Patient Full Name
                        </label>
                        <input
                           type='text'
                           name='patient_name'
                           className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                           placeholder='Enter Name'
                           {...register('patient_name')}
                        />
                        <p className='text-[#d00000]'>
                           {errors.patient_name?.message}
                        </p>
                     </div>
                  </div>

                  <div className='flex justify-center'>
                     <div className='mb-3 w-full'>
                        <label className='form-label inline-block mb-2 text-gray-700'>
                           Mobile Number
                        </label>
                        <input
                           type='number'
                           name='mobile_number'
                           className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                           placeholder='Enter Mobile Number'
                           {...register('mobile_number')}
                        />
                        <p className='text-[#d00000]'>
                           {errors.mobile_number?.message}
                        </p>
                     </div>
                  </div>

                  <div className='flex justify-center'>
                     <div className='mb-3 w-full'>
                        <label className='form-label inline-block mb-2 text-gray-700'>
                           Email
                        </label>
                        <input
                           type='email'
                           name='email'
                           defaultValue={user?.email}
                           className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                           placeholder='Enter Email'
                           {...register('email')}
                           readOnly
                        />
                        <p className='text-[#d00000]'>
                           {errors.email?.message}
                        </p>
                     </div>
                  </div>

                  <div className='flex justify-between space-x-2'>
                     <div className='mb-3 w-full'>
                        <label className='form-label inline-block mb-2 text-gray-700'>
                           Date Of Birth
                        </label>
                        <input
                           type='date'
                           name='date_of_birth'
                           className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                           {...register('date_of_birth')}
                        />
                        <p className='text-[#d00000]'>
                           {errors.date_of_birth?.message}
                        </p>
                     </div>

                     <div className='mb-3 w-full'>
                        <label className='form-label inline-block mb-2 text-gray-700'>
                           Select Branch
                        </label>
                        <select
                           type='text'
                           name='branch'
                           className='form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                           {...register('branch')}>
                           <option hidden value=''>
                              Select Branch
                           </option>
                           <option value='Gulsan-2'>Gulsan-2</option>
                           <option value='Banani chaiman bari'>
                              Banani chaiman bari
                           </option>
                        </select>
                        <p className='text-[#d00000]'>
                           {errors.branch?.message}
                        </p>
                     </div>
                  </div>

                  <div className='mb-3 w-full'>
                     <label className='form-label inline-block mb-2 text-gray-700'>
                        Select Department
                     </label>
                     <select
                        type='text'
                        name='department'
                        className='form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                        {...register('department')}>
                        <option hidden value=''>
                           Select Department
                        </option>
                        <option value='Department of psychology'>
                           Department of psychology
                        </option>
                        <option value='Department of psychiatrist'>
                           Department of psychiatrist
                        </option>
                        <option value='Department of child development'>
                           Department of child development
                        </option>
                     </select>
                     <p className='text-[#d00000]'>
                        {errors.department?.message}
                     </p>
                  </div>

                  <div className='mb-3 w-full'>
                     <label className='form-label inline-block mb-2 text-gray-700'>
                        Select Professionals
                     </label>
                     <select
                        type='text'
                        name='professionals'
                        className='form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                        {...register('professionals')}>
                        <option hidden value=''>
                           Select Professionals
                        </option>
                        <option value='md. mamun hossain'>
                           Md. Mamun Hossain
                        </option>
                        <option value='shirin akter'>Shirin Akter</option>
                        <option value='md. abdul ali khan'>
                           Md. Abdul Ali Khan
                        </option>
                        <option value='md. abu zafor'>Md. Abu Zafor</option>
                     </select>
                     <p className='text-[#d00000]'>
                        {errors.professionals?.message}
                     </p>
                  </div>

                  <div className='flex justify-between space-x-2'>
                     <div className='mb-3 w-full'>
                        <label className='form-label inline-block mb-2 text-gray-700'>
                           Appointment Date
                        </label>
                        <input
                           type='date'
                           name='appointment_date'
                           className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                           {...register('appointment_date')}
                        />
                        <p className='text-[#d00000]'>
                           {errors.appointment_date?.message}
                        </p>
                     </div>

                     <div className='mb-3 w-full'>
                        <label className='form-label inline-block mb-2 text-gray-700'>
                           Appointment Time
                        </label>
                        <select
                           type='text'
                           name='appointment_time'
                           className='form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                           {...register('appointment_time')}>
                           <option hidden value=''>
                              Select Time
                           </option>
                           <option value='3 pm'>3 PM</option>
                           <option value='4 pm'>4 PM</option>
                           <option value='6 pm'>6 PM</option>
                           <option value='8 pm'>8 PM</option>
                           <option value='9 pm'>9 PM</option>
                        </select>
                        <p className='text-[#d00000]'>
                           {errors.appointment_time?.message}
                        </p>
                     </div>

                     <div className='mb-3 w-full'>
                        <label className='form-label inline-block mb-2 text-gray-700'>
                           Patient Gender
                        </label>
                        <select
                           type='text'
                           name='gender'
                           className='form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                           {...register('gender')}>
                           <option hidden value=''>
                              Select Time
                           </option>
                           <option value='male'>Male</option>
                           <option value='female'>Female</option>
                           <option value='others'>Others</option>
                        </select>
                        <p className='text-[#d00000]'>
                           {errors.gender?.message}
                        </p>
                     </div>
                  </div>

                  <div className='mt-4'>
                     <input
                        type='submit'
                        className='font-base font-semibold border-2 border-[#3a0ca3] bg-[#3a0ca3] text-white px-10 py-3 rounded-md cursor-pointer hover:bg-transparent hover:text-[#3a0ca3] duration-150'
                        value='REQUEST'
                     />
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default BookAppointment;
