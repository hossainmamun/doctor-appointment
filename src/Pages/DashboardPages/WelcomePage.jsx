import { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { authContext } from '../../context/authContext.jsx';
const WelcomePage = () => {
   const {user} = useContext(authContext)

   return (
      <div className='flex justify-center items-center min-h-screen min-w-full pl-10 md:pl-0'>
         <div className='mx-6 sm:mx-10 w-full md:w-[70%] lg:w-[50%] xl:w-[45%] 2xl:w-[35%] space-y-6'>
            <div className='flex justify-center items-center mb-10'>
               <div className='text-[#3a0ca3]'>
                  <AiOutlineUser className='m-auto text-6xl' />
                  <span className='block capitalize font-semibold text-xl'>
                     {user?.user_name}
                  </span>
               </div>
            </div>
            <div className='text-center space-y-3'>
               <h3 className='capitalize font-extrabold text-xl md:text-2xl lg:text-4xl text-[#3a0ca3]'>
                  welcome to dashboard
               </h3>
               <span className='block capitalize font-semibold text-xl'>
                  {new Date().toLocaleDateString()}
               </span>
            </div>
         </div>
      </div>
   );
};

export default WelcomePage;
