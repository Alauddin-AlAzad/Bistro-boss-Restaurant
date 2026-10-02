
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../Shared/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <section >
            <Helmet>
                <title>Bistro Boss | Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            {/* main cover */}
            <div className='md:pb-32 pb-14 '>
                <Cover
                    img={menuImg}
                    title={'OUR MENU'}
                    description={'Handpicked specials at a friendly price — available today only.Rich, sweet, and freshly baked. The perfect way to end your meal.'}
                ></Cover>
                <SectionTitle heading="---Don't miss---" subHeading="TODAY'S OFFER"></SectionTitle>
                <MenuCategory items={offered} title={"offered"}></MenuCategory>
            </div>
            {/* dessert cover */}
            <div className='md:pb-32 pb-14 '>
                <Cover
                    img={desertImg}
                    title={'DESSERTS'}
                    description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Cover>
                <MenuCategory items={dessert} title={"dessert"} ></MenuCategory>
            </div>
            {/* pizza cover */}
            <div className='md:pb-32 pb-14 '>
                <Cover
                    img={pizzaImg}
                    title={'PIZZA'}
                    description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Cover>
                <MenuCategory items={pizza} title={"pizza"}></MenuCategory>
            </div>
            {/* salad cover */}
            <div className='md:pb-32 pb-14 '>
                <Cover
                    img={saladImg}
                    title={'SALADS'}
                    description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Cover>
                <MenuCategory items={salad} title={"salad"}></MenuCategory>
            </div>
            {/* soup */}

            <div className='md:pb-32 pb-14 '>
                <Cover
                    img={soupImg}
                    title={'SOUPS'}
                    description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Cover>
                <MenuCategory items={soup} title={"soup"} ></MenuCategory>
            </div>
        </section>
    );
};

export default Menu;