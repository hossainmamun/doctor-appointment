import axios from 'axios';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination.jsx';

const AppointmentList = () => {
   const [appointmentSearch, setAppointmentSearch] = useState([]);
   const [allAppointment, setAllAppointment] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [appointmentPerPage, setAppointmentParPage] = useState(16);

   const lastAppointmentIndex = currentPage * appointmentPerPage;
   const firstAppointmentIndex = lastAppointmentIndex - appointmentPerPage;
   const currentAppointment = allAppointment.slice(
      firstAppointmentIndex,
      lastAppointmentIndex
   );

   // fetch all patient appointments
   const fetchAllAppointment = async () => {
      try {
         const response = await axios.get(
            'https://doctor-appointment-api.onrender.com/api/patient/appointment'
         );

         if (response.status === 200) {
            setAllAppointment(response.data);
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

   useEffect(() => {
      fetchAllAppointment();
   }, []);

   // search appointment by email
   const handleAppointmentSearch = async () => {
      try {
         const response = await axios.post(
            `https://doctor-appointment-api.onrender.com/api/patient/appointment/${appointmentSearch}`
         );
         if (response.status === 200) {
            setAllAppointment(response.data);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchAllAppointment();
      handleAppointmentSearch();
   }, [appointmentSearch]);

   // delete an appointment
   const handleAppointDelete = async (id) => {
      try {
         const response = await axios.delete(
            `https://doctor-appointment-api.onrender.com/api/patient/appointment/${id}`
         );
         if (response.status === 200) {
            swal({
               title: 'Well Done',
               text: 'appointment delete successfully',
               icon: 'success',
               button: 'Ok',
            });
            fetchAllAppointment();
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

   return (
      <div className='min-h-screen min-w-full space-y-6'>
         <div className='flex justify-center'>
            {allAppointment.length === 0 ? (
               <div className='flex justify-center items-center min-h-screen min-w-full'>
                  <h3 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl'>
                     Wait... appointment is loading
                  </h3>
               </div>
            ) : (
               <div className='space-y-6'>
                  <div className='mt-10 text-center'>
                     <h3 className='text-xl font-bold capitalize'>
                        patient appointment list
                     </h3>
                  </div>

                  <div className='flex-none md:flex justify-between items-center'>
                     <div className='w-full md:w-6/12 lg:w-4/12 flex justify-start space-x-1'>
                        <input
                           type='text'
                           name='patient_name'
                           onBlur={(e) => setAppointmentSearch(e.target.value)}
                           className='form-control block w-full px-3 py-2 text-base
                     font-normal text-gray-700 bg-white bg-clip-padding border
                     border-solid border-gray-300 rounded transition ease-in-out
                     m-0'
                           placeholder='Enter patient email'
                        />
                        <button
                           onClick={() => handleAppointmentSearch()}
                           className='border border-[#3a0ca3] bg-[#3a0ca3] text-white rounded-md px-4 py-1 hover:bg-transparent hover:text-[#3a0ca3] duration-150 cursor-pointer'>
                           search
                        </button>
                     </div>
                     <div>
                        <p>Total Appointment: {allAppointment.length}</p>
                     </div>
                  </div>

                  {/* appointment table */}
                  <div className='overflow-x-auto relative'>
                     <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
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
                              <th colSpan='2' className='py-3 px-4 border'>
                                 actions
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {currentAppointment.map((appointment, index) => {
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
                                    <td className='py-2 px-3 border'>
                                       {email}
                                    </td>
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

                                    <td className='py-2 px-5 bg-[#3a86ff] cursor-pointer hover:bg-[#386641] duration-150'>
                                       <Link
                                          to={`/dashboard/update-appointment/${_id}`}>
                                          <FaEdit className='text-xl text-white' />
                                       </Link>
                                    </td>
                                    <td
                                       onClick={() => handleAppointDelete(_id)}
                                       className='py-2 px-6 bg-[#e63946] cursor-pointer hover:bg-[#d62828] duration-150'>
                                       <FaTrash className='text-xl text-white' />
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

         {/* pagination component */}
         <Pagination
            totalAppointment={allAppointment.length}
            appointmentPerPage={appointmentPerPage}
            setCurrentPage={setCurrentPage}
         />
      </div>
   );
};

export default AppointmentList;
