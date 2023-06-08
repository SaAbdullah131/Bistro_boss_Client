import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11.00 Am to 10.00 PM"}
            heading = {'Order Online'}
            >
            </SectionTitle>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Pagination]}
                className='mySwiper mb-20 mt-5'
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Salad</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;