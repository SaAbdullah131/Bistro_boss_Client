import React from 'react';
import { Helmet } from "react-helmet-async";
import Cover from '../Shared/Cover/Cover';
import menuImg from "../../assets/menu/pizza-bg.jpg";


const Menu = () => {
    
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            
        </div>
    );
};

export default Menu;