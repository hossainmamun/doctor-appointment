const UploadBanner = () => {
   return (
      <div className='flex justify-center items-center min-h-screen min-w-full pl-10 md:pl-0'>
         <div className='mx-6 sm:mx-10 w-full md:w-[70%] lg:w-[50%] xl:w-[45%] 2xl:w-[35%] space-y-10'>
            <div className="text-center">
               <h3 className='capitalize font-extrabold text-xl md:text-2xl lg:text-4xl text-[#3a0ca3]'>
                  upload banner
               </h3>
            </div>
            <form>
               <div className='flex justify-center'>
                  <div className='mb-3 w-full'>
                     <label className='form-label inline-block mb-2 text-gray-700'>
                        Banner Image
                     </label>
                     <input
                        type='file'
                        name='banner_image'
                        className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                     />
                  </div>
               </div>

               <div className='flex justify-center'>
                  <div className='mb-3 w-full'>
                     <label className='form-label inline-block mb-2 text-gray-700'>
                        Banner Title
                     </label>
                     <input
                        type='text'
                        name='banner_title'
                        className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                        placeholder='Enter Banner Title'
                     />
                  </div>
               </div>

               <div className='flex justify-center'>
                  <div className='mb-3 w-full'>
                     <label className='form-label inline-block mb-2 text-gray-700'>
                        Banner Detail
                     </label>
                     <textarea
                        name='banner_detail'
                        rows='10'
                        className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                        placeholder='Banner Detail'
                     />
                  </div>
               </div>

               <div className='mt-4'>
                  <input
                     type='submit'
                     className='font-base font-semibold border-2 border-[#3a0ca3] bg-[#3a0ca3] text-white px-10 py-3 rounded-md cursor-pointer hover:bg-transparent hover:text-[#3a0ca3] duration-150'
                     value='PUBLISH'
                  />
               </div>
            </form>
         </div>
      </div>
   );
};

export default UploadBanner;
