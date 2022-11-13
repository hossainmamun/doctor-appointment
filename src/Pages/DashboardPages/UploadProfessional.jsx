import React from 'react';

const UploadProfessional = () => {
    return (
       <div className='flex justify-center items-center min-h-screen min-w-full pl-10 md:pl-0'>
          <div className='mx-6 sm:mx-10 w-full md:w-[70%] lg:w-[50%] xl:w-[45%] 2xl:w-[35%] space-y-10'>
             <div className='text-center'>
                <h3 className='capitalize font-extrabold text-xl md:text-2xl lg:text-4xl text-[#3a0ca3]'>
                   upload professional
                </h3>
             </div>
             <form>
                <div className='flex justify-center'>
                   <div className='mb-3 w-full'>
                      <label className='form-label inline-block mb-2 text-gray-700'>
                         Professional Image
                      </label>
                      <input
                         type='file'
                         name='professional_image'
                         className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                      />
                   </div>
                </div>

                <div className='flex justify-center'>
                   <div className='mb-3 w-full'>
                      <label className='form-label inline-block mb-2 text-gray-700'>
                         Professional Name
                      </label>
                      <input
                         type='text'
                         name='professional_name'
                         className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                         placeholder='Enter Professional Name'
                      />
                   </div>
                </div>

                <div className='flex justify-center'>
                   <div className='mb-3 w-full'>
                      <label className='form-label inline-block mb-2 text-gray-700'>
                         Professional Designation
                      </label>
                      <input
                         type='text'
                         name='professional_designation'
                         className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                         placeholder='Enter Professional Designation'
                      />
                   </div>
                </div>

                <div className='flex justify-center'>
                   <div className='mb-3 w-full'>
                      <label className='form-label inline-block mb-2 text-gray-700'>
                         Professional Degree
                      </label>
                      <input
                         type='text'
                         name='professional_degree'
                         className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                         placeholder='Enter Professional Degree'
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

export default UploadProfessional;