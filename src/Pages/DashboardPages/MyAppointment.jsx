import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { authContext } from '../../context/authContext.jsx';

const MyAppointment = () => {
   const [appointment, setAppointment] = useState([]);
   const { user } = useContext(authContext);

   const getAppointmentByEmail = async () => {
      try {
         const response = await axios.post(
            `http://localhost:4000/api/patient/appointment/${user.email}`
         );
         if (response.status === 200) {
            setAppointment(response.data);
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

   // load by useEffect
   useEffect(() => {
      getAppointmentByEmail();
   }, [user?.email]);

   return (
      <div className='flex justify-center min-h-screen min-w-full'>
         {appointment.length === 0 ? (
            <div className='flex justify-center items-center'>
               <h3 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl'>
                  Wait... appointment is loading
               </h3>
            </div>
         ) : (
            <div className='space-y-6'>
               <div className='mt-10 text-center'>
                  <h3 className='text-xl font-bold capitalize'>
                     appointment for email: {user?.email}
                  </h3>
               </div>

               <div className='flex-none md:flex justify-between items-center'>
                  <div className='w-full md:w-6/12 lg:w-4/12'>
                     <input
                        type='text'
                        name='patient_name'
                        className='form-control block w-full px-3 py-2 text-base
                     font-normal text-gray-700 bg-white bg-clip-padding border
                     border-solid border-gray-300 rounded transition ease-in-out
                     m-0'
                        placeholder='Enter patient email'
                     />
                  </div>
                  <div>
                     <p>Total Appointment: {appointment.length}</p>
                  </div>
               </div>

               {/* appointment table */}
               <div className='overflow-x-auto relative'>
                  <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                     <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                           <th scope='col' className='py-3 px-4 border'>
                              no
                           </th>
                           <th scope='col' className='py-3 px-4 border'>
                              patient name
                           </th>
                           <th scope='col' className='py-3 px-4 border'>
                              mobile
                           </th>
                           <th scope='col' className='py-3 px-4 border'>
                              email
                           </th>
                           <th scope='col' className='py-3 px-4 border'>
                              department
                           </th>
                           <th scope='col' className='py-3 px-4 border'>
                              professionals
                           </th>
                           <th scope='col' className='py-3 px-4 border'>
                              branch
                           </th>
                           <th scope='col' className='py-3 px-4 border'>
                              gender
                           </th>
                           <th scope='col' className='py-3 px-4 border'>
                              date of birth
                           </th>
                           <th scope='col' className='py-3 px-4 border'>
                              appt: date
                           </th>
                           <th scope='col' className='py-3 px-4 border'>
                              appt: time
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {appointment.map((appointment, index) => {
                           const {
                              _id,
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
                           } = appointment;
                           return (
                              <tr
                                 className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                                 key={_id}>
                                 <th className='py-2 px-4 border font-medium'>
                                    {(index = index + 1)}
                                 </th>
                                 <th className='py-2 px-4 font-medium capitalize'>
                                    {patient_name}
                                 </th>
                                 <td className='py-2 px-3 border'>
                                    {mobile_number}
                                 </td>
                                 <td className='py-2 px-3 border'>{email}</td>
                                 <td className='py-2 px-3 border'>
                                    {department}
                                 </td>
                                 <td className='py-2 px-3 border capitalize'>
                                    {professionals}
                                 </td>
                                 <td className='py-2 px-3 border capitalize'>
                                    {branch}
                                 </td>
                                 <td className='py-2 px-3 border capitalize'>
                                    {gender}
                                 </td>
                                 <td className='py-2 px-3 border'>
                                    {date_of_birth}
                                 </td>
                                 <td className='py-2 px-3 border'>
                                    {appointment_date}
                                 </td>
                                 <td className='py-2 px-3 border'>
                                    {appointment_time}
                                 </td>
                              </tr>
                           );
                        })}
                     </tbody>
                  </table>
               </div>
            </div>
         )}
      </div>
   );
};

export default MyAppointment;
