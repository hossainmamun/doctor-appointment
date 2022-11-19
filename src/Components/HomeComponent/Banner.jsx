import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { typewriterData } from '../../test/testData.js';

const Banner = () => {
   const [banner, setBanner] = useState([]);
   const { banner_title, banner_detail, imgUrl } = banner;

   const fetchBanner = async () => {
      try {
         const response = await axios.get(
            'https://doctor-appointment-api.onrender.com/api/banner'
         );
         if (response.status === 200) {
            setBanner(response.data[0]);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchBanner();
   }, []);

   return (
      <div className='flex justify-center items-center min-h-screen mt-[150px] lg:mt-0'>
         {banner.length === 0 ? (
            <div className='flex justify-center items-center min-h-screen'>
               <h3 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl'>
                  please wait...
               </h3>
            </div>
         ) : (
            <div className='lg:flex lg:justify-between items-center text-center min-h-screen mt-[150px] lg:mt-0'>
               <div className='space-y-6 px-10 lg:px-0 w-full h-[50%] lg:h-full lg:w-[45%] text-center lg:text-start lg:pl-16 xl:pl-24 2xl:pl-36'>
                  <div className='space-y-2'>
                     <h3 className='capitalize font-bold text-base  md:text-lg'>
                        {banner_title}
                     </h3>
                     <span className='font-extrabold capitalize text-xl md:text-3xl lg:text-4xl text-[#3a0ca3]'>
                        <Typewriter
                           options={{
                              strings: typewriterData,
                              autoStart: true,
                              loop: true,
                           }}
                        />
                     </span>
                  </div>
                  <p>{banner_detail}</p>
                  <div>
                     <Link to='/book-appointment'>
                        <button className='font-base font-semibold border-2 border-[#3a0ca3] bg-[#3a0ca3] text-white px-10 py-3 rounded-lg hover:bg-transparent hover:text-[#3a0ca3] duration-150'>
                           BOOK AN APPOINTMENT
                        </button>
                     </Link>
                  </div>
               </div>

               <div className='w-full lg:w-[45%] pt-10 sm:pt-10 lg:pt-0 px-10 lg:px-0'>
                  <img src={imgUrl} className='w-full' alt='' />
               </div>
            </div>
         )}
      </div>
   );
};

export default Banner;
