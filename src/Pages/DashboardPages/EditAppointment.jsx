import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const EditAppointment = () => {
   const [appointment, setAppointment] = useState({});
   const { appointmentId } = useParams();
   console.log(appointment);

   const fetchAnAppointment = async () => {
      try {
         const response = await axios.get(
            `http://localhost:4000/api/patient/appointment/${appointmentId}`
         );
         if (response.status === 200) {
            setAppointment(response.data);
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

   useEffect(() => {
      fetchAnAppointment();
   }, [appointmentId]);

   return (
      <div>
         <p>{appointmentId}</p>
      </div>
   );
};

export default EditAppointment;
