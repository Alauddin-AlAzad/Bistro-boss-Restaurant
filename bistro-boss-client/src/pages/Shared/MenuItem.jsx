import React from 'react';

const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item;
    return (
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0'>
            <div className='flex flex-row items-center sm:items-start'>
           
                <img 
                    style={{ borderRadius: '0 200px 200px 200px' }} 
                    className='w-[100px] h-[100px] object-cover mr-4 sm:mr-8 shrink-0' 
                    src={image} 
                    alt={name} 
                />
                <div className='text-gray-500'>
                    <h3 className='uppercase text-base sm:text-xl font-medium'>{name}------------</h3>
                    <p className='text-sm sm:text-base mt-1'>{recipe}</p>
                </div>
            </div>
            <p className='text-[#D99904] text-lg sm:text-xl font-semibold shrink-0 ml-auto sm:ml-4'>${price}</p>
        </div>
    );
};

export default MenuItem;