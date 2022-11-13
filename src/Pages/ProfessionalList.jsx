import { Link } from 'react-router-dom';

const ProfessionalList = () => {
   const professionals = [1, 2, 3, 4, 5, 6];
   return (
      <div className='mt-[150px] min-h-screen space-y-10 mx-10 lg:mx-32 xl:mx-40 2xl:mx-60'>
         <div className='text-center'>
            <h3 className='capitalize font-extrabold text-lg md:text-xl'>
               our all professionals
            </h3>
         </div>

         <div className='grid sm:grid-cols-2 gap-10 w-full'>
            {professionals.map((professional, index) => {
               return (
                  <div
                     className='flex flex-col xl:flex-row rounded-lg bg-white shadow-lg'
                     key={index}>
                     <img
                        className='w-full md:h-auto object-fill xl:w-48 2xl:w-60 rounded-t-lg xl:rounded-l-lg xl:rounded-r-none'
                        src='https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/12/16a-400x292.jpg'
                        alt=''
                     />
                     <div className='p-6 flex flex-col justify-start space-y-2'>
                        <h5 className='text-gray-900 text-xl font-medium'>
                           professional_name
                        </h5>
                        <p className='text-gray-700 text-base'>
                           Role: professional_designation
                        </p>
                        <p className='text-gray-600 text-base'>
                           Degree: professional_degree
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
   );
};

export default ProfessionalList;