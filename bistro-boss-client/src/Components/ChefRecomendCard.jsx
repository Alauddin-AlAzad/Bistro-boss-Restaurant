import React from 'react';
import image1 from '../assets/home/slide1.jpg';

const ChefRecomendCard = () => {
    return (
        <div className="card bg-[#F3F3F3] w-full flex flex-col justify-between rounded-none shadow-sm relative overflow-hidden">
            
            <figure className="w-full aspect-[4/3] overflow-hidden">
                <img
                    src={image1}
                    alt="Caeser Salad"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </figure>

         
            <div className="card-body p-2 md:p-6 flex flex-col justify-between grow text-center items-center">
                <div className="space-y-1 mb-2">
                    <h2 className="card-title text-xs md:text-xl font-bold justify-center text-gray-800 line-clamp-1">
                        Caeser Salad
                    </h2>
                    <p className="text-gray-600 text-[10px] md:text-sm leading-tight md:leading-normal line-clamp-2">
                        Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                    </p>
                </div>

                <div className="card-actions w-full justify-center mt-1">
                    <button className="btn btn-xs md:btn-md bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-[#BB8506] text-[#BB8506] border-0 border-b-2 md:border-b-4 border-[#BB8506] uppercase font-semibold text-[9px] md:text-sm px-2 md:px-6 rounded transition-all duration-200 w-full md:w-auto">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChefRecomendCard;