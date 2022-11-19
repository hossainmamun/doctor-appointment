import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const EditAppointment = () => {
   const [appointment, setAppointment] = useState({});
   const [loading, setLoading] = useState(null);
   const { appointmentId } = useParams();
   const navigate = useNavigate();

   // load appointment by id
   const fetchAnAppointment = async () => {
      try {
         const response = await axios.get(
            `https://doctor-appointment-api.onrender.com/api/patient/appointment/${appointmentId}`
         );
         if (response.status === 200) {
            setAppointment(response.data);
         }
      } catch (error) {
         swal({
            title: 'Sorry!',
            text: error.message,
            icon: 'warning',
            button: 'Ok',
         });
      }
   };

   useEffect(() => {
      fetchAnAppointment();
   }, [appointmentId]);

   // appointment edit
   const editAppointmentInfo = (e) => {
      const newAppointment = { ...appointment };
      newAppointment[e.target.name] = e.target.value;
      setAppointment(newAppointment);
   };

   // appointment update
   const handleUpdateAppointment = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
         const response = await axios.patch(
            `https://doctor-appointment-api.onrender.com/api/patient/appointment/${appointmentId}`,
            {
               patient_name: appointment.patient_name,
               mobile_number: appointment.mobile_number,
               email: appointment.email,
               date_of_birth: appointment.date_of_birth,
               branch: appointment.branch,
               department: appointment.department,
               professionals: appointment.professionals,
               appointment_date: appointment.appointment_date,
               appointment_time: appointment.appointment_time,
               gender: appointment.gender,
            }
         );
         if (response.status === 200) {
            swal({
               title: 'Good Job',
               text: 'Appointment update successfully',
               icon: 'success',
               button: 'Ok',
            });
            setLoading(false);
            navigate('/dashboard/appointment-list', { replace: true });
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
      <div className='flex justify-center items-center min-h-screen min-w-full pl-10 md:pl-0'>
         <div className='mx-6 sm:mx-10 w-full md:w-[70%] lg:w-[50%] xl:w-[45%] 2xl:w-[35%] space-y-10'>
            <div className='space-y-10'>
               <div className='mt-10 text-center'>
                  <h3 className='text-xl font-bold capitalize'>
                     patient id: {appointment._id}
                  </h3>
               </div>

               {/* form start */}
               <div>
                  <form onSubmit={handleUpdateAppointment}>
                     <div className='flex justify-center'>
                        <div className='mb-3 w-full'>
                           <label className='form-label inline-block mb-2 text-gray-700'>
                              Patient Full Name
                           </label>
                           <input
                              type='text'
                              name='patient_name'
                              value={appointment.patient_name || ''}
                              onChange={editAppointmentInfo}
                              className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                              placeholder='Enter Name'
                           />
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
                              value={appointment.mobile_number || ''}
                              onChange={editAppointmentInfo}
                              className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                              placeholder='Enter Mobile Number'
                           />
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
                              value={appointment.email || ''}
                              onChange={editAppointmentInfo}
                              className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                              placeholder='Enter Email'
                           />
                        </div>
                     </div>

                     <div className='flex justify-between space-x-2'>
                        <div className='mb-3 w-full'>
                           <label className='form-label inline-block mb-2 text-gray-700'>
                              Date Of Birth
                           </label>
                           <input
                              type='text'
                              name='date_of_birth'
                              value={appointment.date_of_birth || ''}
                              onChange={editAppointmentInfo}
                              className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                           />
                        </div>

                        <div className='mb-3 w-full'>
                           <label className='form-label inline-block mb-2 text-gray-700'>
                              Select Branch
                           </label>
                           <select
                              type='text'
                              name='branch'
                              value={appointment.branch || ''}
                              onChange={editAppointmentInfo}
                              className='form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'>
                              <option value='Gulsan-2'>Gulsan-2</option>
                              <option value='Banani chaiman bari'>
                                 Banani chaiman bari
                              </option>
                           </select>
                        </div>
                     </div>

                     <div className='mb-3 w-full'>
                        <label className='form-label inline-block mb-2 text-gray-700'>
                           Select Department
                        </label>
                        <select
                           type='text'
                           name='department'
                           value={appointment.department || ''}
                           onChange={editAppointmentInfo}
                           className='form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'>
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
                     </div>

                     <div className='mb-3 w-full'>
                        <label className='form-label inline-block mb-2 text-gray-700'>
                           Select Professionals
                        </label>
                        <select
                           type='text'
                           name='professionals'
                           value={appointment.professionals || ''}
                           onChange={editAppointmentInfo}
                           className='form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'>
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
                     </div>

                     <div className='flex justify-between space-x-2'>
                        <div className='mb-3 w-full'>
                           <label className='form-label inline-block mb-2 text-gray-700'>
                              Appointment Date
                           </label>
                           <input
                              type='text'
                              name='appointment_date'
                              value={appointment.appointment_date || ''}
                              onChange={editAppointmentInfo}
                              className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                              placeholder='Text input'
                           />
                        </div>

                        <div className='mb-3 w-full'>
                           <label className='form-label inline-block mb-2 text-gray-700'>
                              Appointment Time
                           </label>
                           <select
                              type='text'
                              name='appointment_time'
                              value={appointment.appointment_time || ''}
                              onChange={editAppointmentInfo}
                              className='form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'>
                              <option value='3 pm'>3 PM</option>
                              <option value='4 pm'>4 PM</option>
                              <option value='6 pm'>6 PM</option>
                              <option value='8 pm'>8 PM</option>
                              <option value='9 pm'>9 PM</option>
                           </select>
                        </div>

                        <div className='mb-3 w-full'>
                           <label className='form-label inline-block mb-2 text-gray-700'>
                              Patient Gender
                           </label>
                           <select
                              type='text'
                              name='gender'
                              value={appointment.gender || ''}
                              onChange={editAppointmentInfo}
                              className='form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'>
                              <option value='male'>Male</option>
                              <option value='female'>Female</option>
                              <option value='others'>Others</option>
                           </select>
                        </div>
                     </div>

                     <div className='mt-4'>
                        <input
                           type='submit'
                           className='font-base font-semibold border-2 border-[#3a0ca3] bg-[#3a0ca3] text-white px-10 py-3 rounded-md cursor-pointer hover:bg-transparent hover:text-[#3a0ca3] duration-150'
                           value={loading ? 'wait...' : 'UPDATE'}
                           disabled={loading}
                        />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EditAppointment;
