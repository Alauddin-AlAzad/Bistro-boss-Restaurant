
import MenuItem from '../../Shared/MenuItem';
import { Link } from 'react-router';


const MenuCategory = ({ items,title }) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='pt-16 md:pt-12 grid md:grid-cols-2 gap-4 px-2 md:px-0 md:gap-8'>

                {
                    items.map(item =>


                        <MenuItem
                            key={item._id}
                            item={item}
                        >

                        </MenuItem>)
                }
                <div className='md:col-span-2 flex justify-center mt-6'>
                    <Link to={`/order/${title}`}>
                        <div className='text-center md:text-xl text-sm font-medium  pb-1'>
                            <button className="text-sm text-black md:text-base font-semibold btn btn-outline border-0 border-b-2   pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors duration-200">ORDER YOUR FAVOURITE FOOD</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;