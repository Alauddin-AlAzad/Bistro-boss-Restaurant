import React, { useEffect, useState } from 'react';
import SectionTitle from '../pages/Shared/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <section className='md:pb-32 pb-14 max-w-6xl mx-auto px-4'>
            <SectionTitle 
                heading={'---What Our Clients Say---'} 
                subHeading={'TESTIMONIALS'} 
            />

            <div className='mt-8 md:mt-12'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => (
                            <SwiperSlide key={review._id}>
                                <div className='px-12 sm:px-20 md:px-28 py-6 flex flex-col items-center text-center'>
                                   
                                    <Rating
                                        style={{ maxWidth: 140 }}
                                        value={review.rating}
                                        readOnly
                                    />

                                
                                    <div className='my-6 text-neutral-900'>
                                        <FaQuoteLeft className="text-5xl md:text-7xl" />
                                    </div>

                                    {/* Review Text */}
                                    <p className='text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl'>
                                        {review.details}
                                    </p>

                                
                                    <h3 className='text-xl md:text-2xl font-medium text-amber-600 uppercase tracking-wider mt-4'>
                                        {review.name}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;