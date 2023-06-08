import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
                heading="Featured Item"
                subHeading="Check it Out"
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 opacity-40 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 2028</p>
                    <p className='uppercase'>Where Can i Get Some ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut illo quibusdam perspiciatis aut repellat laboriosam expedita, esse totam labore ea fugit placeat quo consequatur quisquam nisi dolorum ducimus fuga, architecto qui omnis in molestias eveniet accusantium! Quos amet impedit quaerat harum aut, accusamus itaque facilis, tenetur, a cum recusandae!</p>

                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;