import { useContext, useState } from 'react';
import {
   AiOutlineHome,
   AiOutlineUserAdd,
   AiOutlineUpload,
   AiOutlineBars,
   AiOutlineClose,
   AiOutlineLogout,
   AiOutlineUser,
} from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { authContext } from '../context/authContext.jsx';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
   const [open, setOpen] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
   const { user, dispatch } = useContext(authContext);
   const navigate = useNavigate();

   const logout = () => {
      // remove user from storage
      localStorage.removeItem('user');
      // dispatch logout action
      dispatch({ type: 'LOGOUT' });
      navigate('/', { replace: true });
   };

   return (
      <div
         className={
            open
               ? 'shadow space-y-4 min-h-screen min-w-[56px] fixed bg-[#F8F8F8] z-40'
               : 'shadow space-y-4 min-h-screen min-w-[280px] fixed bg-[#F8F8F8] z-40'
         }>
         <div className='py-4 flex justify-end'>
            {open ? (
               <button
                  onClick={() => setOpen(!open)}
                  className='px-4 block cursor-pointer'>
                  <AiOutlineBars className='text-2xl text-[#3a0ca3]' />
               </button>
            ) : (
               <button
                  onClick={() => setOpen(!open)}
                  className='px-4 cursor-pointer'>
                  <AiOutlineClose className='text-3xl text-[#3a0ca3]' />
               </button>
            )}
         </div>

         {/* menu start here */}

         <div className='space-y-4'>
            {!open && (
               <div className='flex justify-center items-center mb-10'>
                  <div className='space-y-2 text-[#3a0ca3]'>
                     <AiOutlineUser className='m-auto text-6xl' />
                     <span className='block capitalize'>{user?.user_name}</span>
                  </div>
               </div>
            )}

            <Link to='/' className='flex justify-start items-center space-x-2'>
               <span className='px-4'>
                  <AiOutlineHome className='text-2xl text-[#3a0ca3]' />
               </span>
               <li
                  className={
                     !open
                        ? 'list-none font-medium block text-[#3a0ca3]'
                        : 'list-none font-medium hidden'
                  }>
                  BACK TO HOME
               </li>
            </Link>

            <Link
               to='profile'
               className='flex justify-start items-center space-x-2'>
               <span className='px-4'>
                  <AiOutlineUserAdd className='text-2xl text-[#3a0ca3]' />
               </span>
               <li
                  className={
                     !open
                        ? 'list-none font-medium block text-[#3a0ca3]'
                        : 'list-none font-medium hidden'
                  }>
                  PROFILE
               </li>
            </Link>

            <Link
               to='appointment-list'
               className='flex justify-start items-center space-x-2'>
               <span className='px-4'>
                  <FiUsers className='text-2xl text-[#3a0ca3]' />
               </span>
               <li
                  className={
                     !open
                        ? 'list-none font-medium block text-[#3a0ca3]'
                        : 'list-none font-medium hidden'
                  }>
                  APPOINTMENT LIST
               </li>
            </Link>

            <button
               onClick={() => setMenuOpen(!menuOpen)}
               className='flex justify-start items-center space-x-2'>
               <div className='px-4'>
                  <AiOutlineUpload className='text-2xl text-[#3a0ca3]' />
               </div>
               <li
                  className={
                     !open
                        ? 'list-none font-medium block text-[#3a0ca3] relative space-y-4'
                        : 'list-none font-medium hidden'
                  }>
                  <div className='flex justify-between items-center capitalize'>
                     <span>CONTENT UPLOAD</span>
                     <span>
                        <KeyboardArrowDownIcon />
                     </span>
                  </div>

                  {menuOpen && (
                     <div className='absolute top-full min-w-full w-max bg-white rounded-lg px-4 text-black'>
                        <ul className='list-none text-start'>
                           <Link to='upload-banner' className='block py-1 my-2'>
                              BANNER
                           </Link>
                           <Link
                              to='upload-professional'
                              className='block py-1 my-2'>
                              PROFESSIONALS
                           </Link>
                        </ul>
                     </div>
                  )}
               </li>
            </button>

            <button className='flex justify-start items-center space-x-2'>
               <span className='px-4'>
                  <AiOutlineLogout className='text-2xl text-[#3a0ca3]' />
               </span>
               <li
                  onClick={() => logout()}
                  className={
                     !open
                        ? 'list-none font-medium block text-[#3a0ca3]'
                        : 'list-none font-medium hidden'
                  }>
                  LOGOUT
               </li>
            </button>
         </div>
      </div>
   );
};

export default Sidebar;
