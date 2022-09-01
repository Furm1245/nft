import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import classes from './slider.module.css'
import React from "react";
// import { Link } from 'react-router-dom'
import './slider.css'
import Carousel from "react-elastic-carousel";
import dirt from '../assets/225.png'
import green from '../assets/400.png'
import toxic from '../assets/166.png'
import last from '../assets/833.png'




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
                        src={dirt}
                        alt='the product'
                    />
                </div>
                <div>
                    <img
                        src={green}
                        alt='the product'
                    />
                </div>
                <div>
                    <img
                        src={toxic}
                        alt='the product'
                    />
                </div>
                <div>
                    <img
                        src={last}
                        alt='the product'
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default SimpleSlider