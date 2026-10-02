import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/home/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/home/slide4.jpg';
import slide5 from '../assets/home/slide5.jpg';
import SectionTitle from '../pages/Shared/SectionTitle';

const Slider = () => {
    return (
        <section className='md:mb-22.5 mb-10'>
            {/* heading */}
            <SectionTitle
                heading={"---From 11:00am to 10:00pm---"}
                subHeading={"ORDER ONLINE"}
            >

            </SectionTitle>

            <div className="w-full max-w-350 mx-auto  pt-16 md:pt-12">
                <Swiper
                    spaceBetween={16}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    slidesPerView={'auto'}
                    breakpoints={{
                        1024: {
                            spaceBetween: 24,
                        },
                    }}
                    className="md:pb-10! pb-8! [&_.swiper-pagination]:bottom-0!"
                >
                    <SwiperSlide className="!w-[200px] sm:!w-[260px] lg:!w-[312px]">
                        <div className="relative w-full h-[260px] sm:h-[350px] lg:h-[450px]">
                            <img src={slide1} alt="" className="w-full h-full object-cover " />
                            <h3 className="absolute bottom-4 left-0 right-0 text-center text-white text-xl lg:text-3xl [text-shadow:2px_2px_8px_rgba(0,0,0,0.9)] uppercase">
                                Salads
                            </h3>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="!w-[200px] sm:!w-[260px] lg:!w-[312px]">
                        <div className="relative w-full h-[260px] sm:h-[350px] lg:h-[450px]">
                            <img src={slide2} alt="" className="w-full h-full object-cover" />
                            <h3 className="absolute bottom-4 left-0 right-0 text-center text-white text-xl lg:text-3xl [text-shadow:2px_2px_8px_rgba(0,0,0,0.9)] uppercase">
                                Soups
                            </h3>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="!w-[200px] sm:!w-[260px] lg:!w-[312px]">
                        <div className="relative w-full h-[260px] sm:h-[350px] lg:h-[450px]">
                            <img src={slide3} alt="" className="w-full h-full object-cover" />
                            <h3 className="absolute bottom-4 left-0 right-0 text-center text-white text-xl lg:text-3xl [text-shadow:2px_2px_8px_rgba(0,0,0,0.9)] uppercase">
                                Pizzas
                            </h3>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="!w-[200px] sm:!w-[260px] lg:!w-[312px]">
                        <div className="relative w-full h-[260px] sm:h-[350px] lg:h-[450px]">
                            <img src={slide4} alt="" className="w-full h-full object-cover" />
                            <h3 className="absolute bottom-4 left-0 right-0 text-center text-white text-xl lg:text-3xl [text-shadow:2px_2px_8px_rgba(0,0,0,0.9)] uppercase">
                                Desserts
                            </h3>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="!w-[200px] sm:!w-[260px] lg:!w-[312px]">
                        <div className="relative w-full h-[260px] sm:h-[350px] lg:h-[450px]">
                            <img src={slide5} alt="" className="w-full h-full object-cover" />
                            <h3 className="absolute bottom-4 left-0 right-0 text-center text-white text-xl lg:text-3xl [text-shadow:2px_2px_8px_rgba(0,0,0,0.9)] uppercase">
                                Drinks
                            </h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;