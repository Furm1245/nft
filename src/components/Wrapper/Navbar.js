import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = (props) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => setOpen(!open)


    return (
        <nav className='nav'>
            <div className='nav__brand'>
                <p>Robo<br></br>Invaderz</p>
            </div>
            <div className={open ? 'nav__links_expanded' : 'nav__links'}>
                <ul>
                    <Link className='nav__link' onClick={() => setOpen(false)} to="/"><p>Home</p></Link>
                    <p className='nav__link' to="/">About Us</p>
                    <p className='nav__link' to="/">Examples</p>
                    <p className='nav__link' to="/">Coming Soon</p>
                    {/* <Link className='nav__link' onClick={() => setOpen(false)} to="/collections/beanies"> */}
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="17" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </p>
                    {/* </Link> */}
                </ul>
            </div>
            {/* <div className={classes.nav__icons}>
                <Cart onClick={handleCart} size={26.5} />
            </div> */}
            <div onClick={handleClick} className='nav__toggler'>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav >
    )
}





export default Navbar