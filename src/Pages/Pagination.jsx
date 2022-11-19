const Pagination = ({
   totalAppointment,
   appointmentPerPage,
   setCurrentPage,
}) => {
   let pages = [];
   for (let i = 1; i <= Math.ceil(totalAppointment / appointmentPerPage); i++) {
      pages.push(i);
   }
   return (
      <div className='flex justify-center items-center'>
         <div className='space-x-2'>
            {pages.map((page, index) => {
               return (
                  <button
                     key={index}
                     onClick={() => setCurrentPage(page)}
                     className='border border-[#3a0ca3] font-semibold rounded-lg px-4 py-1 text-[#3a0ca3] hover:bg-[#3a0ca3] hover:text-white duration-150'>
                     {page}
                  </button>
               );
            })}
         </div>
      </div>
   );
};

export default Pagination;
