import { useLocation } from 'react-router-dom';
import NavBar from '../Components/ReuseComponent/NavBar.jsx';

const Layout = ({ children }) => {
   const location = useLocation();
   return (
      <div>
         {location.pathname.includes('dashboard') || <NavBar />}
         <main>{children}</main>
      </div>
   );
};

export default Layout;
