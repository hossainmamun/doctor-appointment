import axios from 'axios';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { authContext } from '../context/authContext.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpValidation } from '../validation/validation.js';

const SignUp = () => {
   const [loading, setLoading] = useState(null);
   const { dispatch } = useContext(authContext);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(signUpValidation),
   });
   const onSubmit = async (data) => {
      const { user_name, email, password } = data;
      setLoading(true);
      try {
         const response = await axios.post(
            'https://doctor-appointment-api.onrender.com/api/user/signup',
            {
               user_name,
               email,
               password,
               isAdmin: false,
            }
         );

         if (response.status === 201) {
            swal({
               title: `welcome ${response.data?.user_name}`,
               text: 'SignUp successful',
               icon: 'success',
               button: 'Ok',
            });
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({ type: 'SIGNUP', payload: response.data });
            reset();
            setLoading(false);
         }
      } catch (error) {
         swal({
            title: 'Sorry!',
            text: error.response.data.error,
            icon: 'warning',
            button: 'Ok',
         });
         setLoading(false);
      }
   };

   return (
      <div className='flex items-center justify-center min-h-screen mx-6 sm:mx-10 md:mx-16 lg:mx-32 xl:mx-40 2xl:mx-60'>
         <div className='space-y-10'>
            <div className='space-y-1 text-center mt-[150px] lg:mt-0'>
               <img
                  src='https://www.coffed.coop/images/login.png'
                  className='w-56 m-auto'
                  alt=''
               />
               <h3 className='uppercase font-extrabold text-xl lg:text-2xl'>
                  sign up
               </h3>
            </div>

            <div className='lg:flex lg:justify-between items-center lg:space-x-44'>
               <div className='w-full h-auto'>
                  <img
                     src='https://i.ibb.co/FHV3Hv7/Login-1-removebg-preview.png'
                     className='lg:w-[800px] lg:h-auto md:m-auto'
                     alt=''
                  />
               </div>

               {/* form start */}
               <div className='space-y-4 w-full'>
                  <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                     <div className='flex justify-center'>
                        <div className='mb-3 w-full'>
                           <label className='form-label inline-block mb-2 text-gray-700'>
                              User Name
                           </label>
                           <input
                              type='text'
                              name='user_name'
                              className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                              placeholder='Enter User Name'
                              {...register('user_name')}
                           />
                           <p className='text-[#d00000]'>
                              {errors.user_name?.message}
                           </p>
                        </div>
                     </div>

                     <div className='flex justify-center'>
                        <div className='mb-3 w-full'>
                           <label className='form-label inline-block mb-2 text-gray-700'>
                              User Email
                           </label>
                           <input
                              type='email'
                              name='email'
                              className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                              placeholder='Enter Email'
                              {...register('email')}
                           />
                           <p className='text-[#d00000]'>
                              {errors.email?.message}
                           </p>
                        </div>
                     </div>

                     <div className='flex justify-center'>
                        <div className='mb-3 w-full'>
                           <label className='form-label inline-block mb-2 text-gray-700'>
                              User Password
                           </label>
                           <input
                              type='password'
                              name='password'
                              className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                              placeholder='Enter Password'
                              {...register('password')}
                           />
                           <p className='text-[#d00000]'>
                              {errors.password?.message}
                           </p>
                        </div>
                     </div>

                     <div className='mt-4'>
                        <input
                           type='submit'
                           className='border-2 border-[#3a0ca3] bg-[#3a0ca3] text-white font-semibold rounded-lg px-4 py-2 hover:bg-transparent hover:text-[#3a0ca3] duration-150 cursor-pointer'
                           value={loading ? 'wait...' : 'SIGN UP'}
                           disabled={loading}
                        />
                     </div>
                  </form>

                  <div className='flex justify-start sm:justify-center items-center space-x-3'>
                     <p className='capitalize'>all ready have an account ?</p>
                     <Link to='/user/login'>
                        <span className='px-2 cursor-pointer capitalize font-semibold text-[#3a0ca3]'>
                           login
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
