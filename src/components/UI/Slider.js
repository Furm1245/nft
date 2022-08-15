import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import classes from './slider.module.css'
import React from "react";
// import { Link } from 'react-router-dom'
// import { useContext } from 'react';
// import { ShopContext } from '../../store/ShopProvider';
import './slider.css'
import Carousel from "react-elastic-carousel";
import mark from '../assets/mark.png'




const SimpleSlider = (props) => {

    // const { products } = useContext(ShopContext)

    // const productInfo = products.map(({ variants, handle, title, id }) => {
    //     return (
    //         <Link to={`/${handle}`} key={id}>
    //         <div>
    //             <img
    //                 src={variants[0].image.src}
    //                 alt='the product'
    //             />
    //             <div className={classes.title}>
    //                 <p>{title}</p>
    //             </div>
    //         </div>
    //         </Link>
    //     )
    // })

    const breakpoints = [
        { width: 1, itemsToShow: 1 },
        { width: 700, itemsToShow: 2 },
        { width: 900, itemsToShow: 3 },
        { width: 1550, itemsToShow: 3 },
        { width: 1600, itemsToShow: 3 },
    ];


    return (
        <div>
            <Carousel className='slider' responsive breakPoints={breakpoints} >
                <div>
                    <img
                        src={mark}
                        alt='the product'
                    />
                    {/* <div >
                        <p>ssssssssss</p>
                    </div> */}
                </div>
                <div>
                    <img
                        src={mark}
                        alt='the product'
                    />
                    {/* <div >
                        <p>ssssssssss</p>
                    </div> */}
                </div>
                <div>
                    <img
                        src={mark}
                        alt='the product'
                    />
                    {/* <div >
                        <p>ssssssssss</p>
                    </div> */}
                </div>
                <div>
                    <img
                        src={mark}
                        alt='the product'
                    />
                    {/* <div >
                        <p>ssssssssss</p>
                    </div> */}
                </div>
            </Carousel>
        </div>
    );
}

export default SimpleSlider