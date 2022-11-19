import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const UploadBanner = () => {
   const [imgUrl, setImgUrl] = useState(null);
   const [title, setTitle] = useState('');
   const [detail, setDetail] = useState('');
   const [isLoading, setIsLoading] = useState(null);
   const [uploadSuccess, setUploadSuccess] = useState(null);
   const [error, setError] = useState(null);

   const imgInput = document.getElementById('#img-input');

   // form reset
   const resetForm = () => {
      setTitle('');
      setDetail('');
      setImgUrl(null);
      imgInput.value = '';
      setUploadSuccess(null);
   };

   // upload banner image to img_bb site
   const handleImgUpload = async (e) => {
      const imgData = new FormData();
      imgData.set('key', process.env.REACT_APP_IMGBB_API);
      imgData.append('image', e.target.files[0]);

      setIsLoading(true);
      setError(null);
      setUploadSuccess(null);

      try {
         const response = await axios.post(
            process.env.REACT_APP_IMGBB_UPLOAD_URL,
            imgData
         );

         if (response.status === 200) {
            setImgUrl(response.data.data.display_url);
         }
         setIsLoading(false);
         setError(null);
         setUploadSuccess(true);
      } catch (error) {
         setError(true);
         setIsLoading(false);
         setUploadSuccess(null);
      }
   };

   // create banner
   const handleBannerSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await axios.post(
            'https://doctor-appointment-api.onrender.com/api/banner',
            {
               imgUrl: imgUrl,
               banner_title: title,
               banner_detail: detail,
            }
         );
         if (response.status === 201) {
            swal({
               title: 'Good Job',
               text: 'Banner upload successfully',
               icon: 'success',
               button: 'Ok',
            });
            resetForm();
         }
      } catch (error) {
         swal({
            title: 'Sorry!',
            text: error.response.data.error,
            icon: 'warning',
            button: 'Ok',
         });
      }
   };

   return (
      <div className='flex justify-center items-center min-h-screen min-w-full pl-10 md:pl-0'>
         <div className='mx-6 sm:mx-10 w-full md:w-[70%] lg:w-[50%] xl:w-[45%] 2xl:w-[35%] space-y-10'>
            <div className='text-center'>
               <h3 className='capitalize font-extrabold text-xl md:text-2xl lg:text-4xl text-[#3a0ca3]'>
                  upload banner
               </h3>
            </div>

            {/* form start */}
            <form onSubmit={handleBannerSubmit}>
               <div className='flex justify-center'>
                  <div className='mb-3 w-full'>
                     <label className='form-label inline-block mb-2 text-gray-700'>
                        Banner Image
                     </label>
                     <input
                        type='file'
                        name='imgUrl'
                        id='banner-img'
                        onChange={handleImgUpload}
                        className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                        required
                     />
                     {isLoading && (
                        <p className='capitalize font-semibold'>
                           wait... upload is in progress
                        </p>
                     )}

                     {uploadSuccess && (
                        <p className='capitalize text-semibold text-[#38b000]'>
                           image upload successfully
                        </p>
                     )}

                     {error && (
                        <p className='capitalize text-semibold text-[#d00000]'>
                           image upload failed
                        </p>
                     )}
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
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                        placeholder='Enter Banner Title'
                        disabled={isLoading}
                        required
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
                        onChange={(e) => setDetail(e.target.value)}
                        value={detail}
                        className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0'
                        placeholder='Banner Detail'
                        disabled={isLoading}
                        required
                     />
                  </div>
               </div>

               <div className='mt-4'>
                  <input
                     type='submit'
                     className='font-base font-semibold border-2 border-[#3a0ca3] bg-[#3a0ca3] text-white px-10 py-3 rounded-md cursor-pointer hover:bg-transparent hover:text-[#3a0ca3] duration-150'
                     value={isLoading ? 'wait...' : 'PUBLISH'}
                     disabled={isLoading}
                  />
               </div>
            </form>
         </div>
      </div>
   );
};

export default UploadBanner;
