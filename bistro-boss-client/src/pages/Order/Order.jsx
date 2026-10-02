import { useState } from 'react';
import orderCoverImg from '../../assets/order/banner2.jpg';
import Cover from '../Shared/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../Shared/FoodCard';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desert', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();



    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className='md:pb-32 pb-14'>
                <Cover
                    title={'OUR SHOP'}
                    description={'Would you like to try a dish?'}
                    img={orderCoverImg}
                />
            </div>


            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="flex justify-center my-8">
                    <TabList className="flex flex-wrap justify-center gap-4 md:gap-8 border-none">
                        {categories.map((tabItem) => (
                            <Tab
                                key={tabItem}
                                className="cursor-pointer font-bold uppercase text-xs md:text-base tracking-wider text-gray-500 pb-2 border-b-4 border-transparent outline-none transition-all duration-200"
                                selectedClassName="!text-[#BB8506] !border-[#BB8506]"
                            >
                                {tabItem}
                            </Tab>
                        ))}
                    </TabList>
                </div>


                <TabPanel>
                    <FoodCard items={salad} />
                </TabPanel>

                <TabPanel>
                    <FoodCard items={pizza} />
                </TabPanel>

                <TabPanel>
                    <FoodCard items={soup} />
                </TabPanel>

                <TabPanel>
                    <FoodCard items={dessert} />
                </TabPanel>

                <TabPanel>
                    <FoodCard items={drinks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;