
import SectionTitle from '../pages/Shared/SectionTitle';
import MenuItem from '../pages/Shared/MenuItem';
import useMenu from '../hooks/useMenu';

const PopularMenu = () => {
    const [menu]=useMenu()

    const popular= menu.filter(item=> item.category === 'popular' )

    return (
        <section className='md:pb-32 pb-14 '>

            <SectionTitle
                heading={'---Check it out---'}
                subHeading={'FROM OUR MENU'}

            ></SectionTitle>
            <div className='pt-16 md:pt-12 grid md:grid-cols-2 gap-4 px-2 md:px-0 md:gap-8'>

                {
                    popular.map(item =>


                        <MenuItem
                            key={item._id}
                            item={item}
                        >

                        </MenuItem>)
                }
                <div className='md:col-span-2 flex justify-center mt-6'>
                    <div className='text-center md:text-xl text-sm font-medium  pb-1'>
                        <button className="text-sm text-black md:text-base font-semibold btn btn-outline border-0 border-b-2   pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors duration-200">VIEW FULL MENU</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default PopularMenu;