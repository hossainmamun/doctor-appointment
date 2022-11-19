import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProfessionalList = () => {
   const [professional, setProfessional] = useState([]);

   const fetchProfessionals = async () => {
      try {
         const response = await axios.get(
            'https://doctor-appointment-api.onrender.com/api/professional'
         );
         if (response.status === 200) {
            setProfessional(response.data);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchProfessionals();
   }, []);
   return (
      <div className='flex justify-center items-center min-h-screen'>
         {professional.length === 0 ? (
            <div className='flex justify-center items-center'>
               <h3 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl'>
                  Wait... professionals is loading
               </h3>
            </div>
         ) : (
            <div className='mt-[150px] min-h-screen space-y-10 mx-10 lg:mx-32 xl:mx-40 2xl:mx-60'>
               <div className='text-center'>
                  <h3 className='capitalize font-extrabold text-lg md:text-xl'>
                     our all professionals
                  </h3>
               </div>

               <div className='grid sm:grid-cols-2 gap-10 w-full'>
                  {professional.map((professional, index) => {
                     const {
                        imgUrl,
                        professional_name,
                        professional_designation,
                        professional_degree,
                     } = professional;
                     return (
                        <div
                           className='flex flex-col xl:flex-row rounded-lg bg-white shadow-lg'
                           key={index}>
                           <img
                              className='w-full md:h-auto object-fill xl:w-48 2xl:w-60 rounded-t-lg xl:rounded-l-lg xl:rounded-r-none'
                              src={imgUrl}
                              alt=''
                           />
                           <div className='p-6 flex flex-col justify-start space-y-2'>
                              <h5 className='text-gray-900 text-xl font-medium capitalize'>
                                 {professional_name}
                              </h5>
                              <p className='text-gray-700 text-base'>
                                 Role: {professional_designation}
                              </p>
                              <p className='text-gray-600 text-base'>
                                 Degree: {professional_degree}
                              </p>
                              <div>
                                 <Link to='/book-appointment'>
                                    <button className='font-base border-2 border-[#3a0ca3] bg-[#3a0ca3] text-white px-4 py-1 rounded-lg hover:bg-transparent hover:text-[#3a0ca3] duration-150'>
                                       APPOINTMENT
                                    </button>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         )}
      </div>
   );
};

export default ProfessionalList;
