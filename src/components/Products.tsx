import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Import main Swiper styles
import './products.css'; // Custom styles
import P1 from '../assets/products/1.png'
import P2 from '../assets/products/2.png'
import P3 from '../assets/products/3.png'
import P4 from '../assets/products/4.png'
import P5 from '../assets/products/5.png'

// Import Swiper modules for pagination, navigation, and autoplay
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Products: React.FC = () => {
  return (
    <div id='products' className="w-full container mx-auto my-40">
      <div className='mb-10'>
        <h2 className="text-3xl text-center font-bold text-gray-800">Our Featured Products</h2>
        <p className='text-sm text-center text-gray-400'>Our last products in the store</p>
      </div>
      <Swiper
        className='w-full flex justify-around'
        modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
        slidesPerView={4} // Show 3 cards at once
        spaceBetween={0} // Space between cards
        slidesPerGroup={1} // Scroll one card at a time
        loop={true} // Enable looping
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay every 3 seconds
        pagination={{ clickable: true }} // Optional: Enable pagination dots
        navigation={true} // Optional: Enable navigation arrows
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }} // Responsive breakpoints
      >
        <SwiperSlide key={1}>
          <div className="bg-gray-50 shadow rounded-lg w-[300px] mr-0 h-[400px]">
            <div className='h-[70%] flex justify-center'>
              <img className='object-contain h-full' src={P1} alt="prodcut1" />
            </div>
            <div className='border-t-[1px] text-gray-500 border-gray-400 flex flex-col  pt-8 items-center'>
                <h3>120$ - 200$</h3>
                <p >GLOWING</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={2}>
        <div className="bg-gray-50 shadow rounded-lg w-[300px] mr-0 h-[400px]">
            <div className='h-[70%] flex justify-center'>
              <img className='object-contain h-full' src={P2} alt="prodcut1" />
            </div>
            <div className='border-t-[1px] text-gray-500 border-gray-400 flex flex-col  pt-8 items-center'>
                <h3>120$ - 200$</h3>
                <p>Fuel oil</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={3}>
        <div className="bg-gray-50 shadow rounded-lg w-[300px] mr-0 h-[400px]">
            <div className='h-[70%] flex justify-center'>
              <img className='object-contain h-full' src={P3} alt="prodcut1" />
            </div>
            <div className='border-t-[1px] text-gray-500 border-gray-400 flex flex-col  pt-8 items-center'>
                <h3>120$ - 200$</h3>
                <p>Paraffin wax</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={4}>
        <div className="bg-gray-50 shadow rounded-lg w-[300px] mr-0 h-[400px]">
            <div className='h-[70%] flex justify-center'>
              <img className='object-contain h-full' src={P4} alt="prodcut1" />
            </div>
            <div className='border-t-[1px] text-gray-500 border-gray-400 flex flex-col  pt-8 items-center'>
                <h3>120$ - 200$</h3>
                <p>Kerosene</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={5}>
        <div className="bg-gray-50 shadow rounded-lg w-[300px] mr-0 h-[400px]">
            <div className='h-[70%] flex justify-center'>
              <img className='object-contain h-full' src={P5} alt="prodcut1" />
            </div>
            <div className='border-t-[1px] text-gray-500 border-gray-400 flex flex-col  pt-8 items-center'>
                <h3>120$ - 200$</h3>
                <p>GLOWING</p>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
    </div>
  );
};

export default Products;
