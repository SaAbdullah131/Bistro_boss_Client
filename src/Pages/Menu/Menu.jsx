import React from 'react';
import { Helmet } from "react-helmet-async";
import Cover from '../Shared/Cover/Cover';
import menuImg from "../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* main cover */}
            <SectionTitle
            subHeading="Don't Miss"
            heading = "Today's offer"
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered} title='Offered'></MenuCategory>
            {/* Dessert menu items */}
            <MenuCategory items={desserts} title='Dessert' coverImg={dessertImg}></MenuCategory>
            {/* Pizza menu items */}
            <MenuCategory items={pizzas} title="Pizzas" coverImg={pizzaImg}></MenuCategory>
            <MenuCategory items={soups} title="Soup" coverImg={soupImg}></MenuCategory>
            <MenuCategory items={salads} title="Salad" coverImg={saladImg}></MenuCategory>
        </div>
    );
};

export default Menu;