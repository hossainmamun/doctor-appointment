import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { authContext } from '../../context/authContext.jsx';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AiOutlineUser } from 'react-icons/ai';

const NavBar = () => {
   const [open, setOpen] = useState(false);
   const { user, dispatch } = useContext(authContext);
   const logout = () => {
      localStorage.removeItem('user');
      dispatch({ type: 'LOGOUT' });
   };

   return (
      <div className='w-full fixed top-0 left-0 bg-[#F8F8F8] z-50'>
         <div className='md:flex items-center justify-between py-6 mx-4 sm:mx-6 md:mx-8 lg:mx-32 xl:mx-40 2xl:mx-60'>
            <Link to=''>
               <h3 className='font-extrabold text-2xl text-[#3a0ca3] duration-150'>
                  PSYCHOLOGY
               </h3>
            </Link>

            <div
               onClick={() => setOpen(!open)}
               className='flex justify-center items-center p-2 rounded-lg absolute right-8 top-4 cursor-pointer md:hidden text-black border-2 border-black'>
               {open ? <CloseIcon /> : <MenuIcon />}
            </div>

            <ul
               className={`lg:space-x-6 md:space-x-4 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open ? 'top-20 bg-white' : 'top-[-490px]'
               }`}>
               <li className='lg:ml-6 text-base lg:my-0 my-4'>
                  <NavLink
                     to='/'
                     className={({ isActive }) =>
                        isActive ? 'text-black duration-150' : 'text-[#3a0ca3]'
                     }>
                     HOME
                  </NavLink>
               </li>
               <li className='lg:ml-6 text-base lg:my-0 my-4'>
                  <NavLink
                     to='/professional-list'
                     className={({ isActive }) =>
                        isActive ? 'text-black duration-150' : 'text-[#3a0ca3]'
                     }>
                     PROFESSIONALS
                  </NavLink>
               </li>

               {user ? (
                  <>
                     <button
                        onClick={() => setOpen(!open)}
                        className='relative space-y-3'>
                        <div className='flex justify-between items-center capitalize space-x-1'>
                           <AiOutlineUser className='text-xl text-[#d00000]' />
                           <span className='text-[#d00000]'>
                              {user?.user_name}
                           </span>
                           <span className='text-[#d00000]'>
                              <KeyboardArrowDownIcon />
                           </span>
                        </div>

                        {open && (
                           <div className='absolute top-full min-w-full w-max bg-[#3a0ca3] rounded-md text-white'>
                              <ul className='list-none space-y-1 text-start '>
                                 <li>
                                    <Link
                                       to='/dashboard'
                                       className='hover:bg-black px-2 py-1 block rounded-t-md duration-100'>
                                       Dashboard
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       to='/dashboard/profile'
                                       className='hover:bg-black px-2 py-1 block duration-100'>
                                       Profile
                                    </Link>
                                 </li>
                                 <li
                                    onClick={() => logout()}
                                    className='hover:bg-black px-2 py-1 block rounded-b-md duration-100'>
                                    Logout
                                 </li>
                              </ul>
                           </div>
                        )}
                     </button>
                  </>
               ) : (
                  <>
                     <li className='lg:ml-6 text-base lg:my-0 my-4'>
                        <Link to='/user/login'>
                           <button className='border-2 border-[#3a0ca3] font-semibold rounded-lg px-4 py-2 text-[#3a0ca3] hover:bg-[#3a0ca3] hover:text-white duration-150'>
                              LOGIN
                           </button>
                        </Link>
                     </li>
                     <li className='lg:ml-6 text-base lg:my-0 my-4'>
                        <Link to='user/sign-up'>
                           <button className='border-2 border-[#3a0ca3] bg-[#3a0ca3] text-white font-semibold rounded-lg px-4 py-2 hover:bg-transparent hover:text-[#3a0ca3] duration-150'>
                              SIGN UP
                           </button>
                        </Link>
                     </li>
                  </>
               )}
            </ul>
         </div>
      </div>
   );
};

export default NavBar;
