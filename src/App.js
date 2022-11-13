import Layout from './Layout/Layout.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import BookAppointment from './Pages/BookAppointment.jsx';
import ProfessionalList from './Pages/ProfessionalList.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import DashboardHome from './Dashboard/DashboardHome.jsx';
import WelcomePage from './Pages/DashboardPages/WelcomePage.jsx';
import Profile from './Pages/DashboardPages/Profile.jsx';
import UploadBanner from './Pages/DashboardPages/UploadBanner.jsx';
import UploadProfessional from './Pages/DashboardPages/UploadProfessional.jsx';
import { useContext } from 'react';
import { authContext } from './context/authContext.jsx';
import AppointmentList from './Pages/DashboardPages/AppointmentList.jsx';
import EditAppointment from './Pages/DashboardPages/EditAppointment.jsx';

function App() {
   const { user } = useContext(authContext);

   return (
      <div>
         <BrowserRouter>
            <Layout>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route index element={<Home />} />
                  <Route
                     path='book-appointment'
                     element={
                        user ? (
                           <BookAppointment />
                        ) : (
                           <Navigate to='/user/sign-up' />
                        )
                     }
                  />

                  <Route
                     path='professional-list'
                     element={<ProfessionalList />}
                  />
                  <Route
                     path='user/login'
                     element={
                        !user ? <Login /> : <Navigate to='/' replace={true} />
                     }
                  />
                  <Route
                     path='user/sign-up'
                     element={
                        !user ? <SignUp /> : <Navigate to='/' replace={true} />
                     }
                  />

                  {/* dashboard route */}
                  <Route path='dashboard' element={<DashboardHome />}>
                     <Route index element={<WelcomePage />} />
                     <Route path='profile' element={<Profile />} />
                     <Route
                        path='appointment-list'
                        element={<AppointmentList />}
                     />
                     <Route path='upload-banner' element={<UploadBanner />} />
                     <Route
                        path='upload-professional'
                        element={<UploadProfessional />}
                     />
                     <Route path='update-appointment/:appointmentId' element={<EditAppointment/>} />
                  </Route>

                  {/* error page must be bottom all routes */}
                  <Route path='*' element={<ErrorPage />} />
               </Routes>
            </Layout>
         </BrowserRouter>
      </div>
   );
}

export default App;
