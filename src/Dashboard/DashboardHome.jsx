import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

const DashboardHome = () => {
   return (
      <div className='flex justify-start min-h-screen'>
         <Sidebar />
         <Outlet />
      </div>
   );
};

export default DashboardHome;
