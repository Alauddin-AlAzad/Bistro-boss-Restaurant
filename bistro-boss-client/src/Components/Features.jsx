import React from 'react';
import SectionTitle from '../pages/Shared/SectionTitle';
import featuresImg from '../assets/home/featured.jpg'
import './features.css';
const Features = () => {

    return (
        <div className='featured-item md:pb-32 pb-14'>
            <section className="md:pb-32 pb-14">
                <div className="section-title-white">
                    <SectionTitle
                        heading={'---Check it out---'}
                        subHeading={'FROM OUR MENU'}>
                    </SectionTitle>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto px-4 py-8">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={featuresImg}
                            alt="Featured section"
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                            December 20, 2026
                        </h3>

                        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                            WHERE CAN I GET SOME?
                        </h2>

                        <p className="text-white text-sm md:text-base leading-relaxed">
                            Discover our exclusive handcrafted recipes made with fresh, authentic ingredients. From locally sourced produce to chef-curated flavors, we bring the best culinary experience straight to your table every single day.
                        </p>

                        <div className="pt-2">
                            <button className="text-sm text-white md:text-base font-semibold btn btn-outline border-0 border-b-2 border-b-white  pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors duration-200">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;