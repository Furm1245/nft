import './StartingPage.css'
import Questions from '../components/Questions/Questions'
import Answer from '../components/Questions/Answer'
import { useState } from 'react'
import SimpleSlider from '../components/UI/Slider'
import sketch from '../components/assets/sketch.png'
import laser from '../components/assets/30.png'
import Navbar from '../components/Wrapper/Navbar'

const StartingPage = () => {

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [open6, setOpen6] = useState(false)

    const handleOpen1 = () => setOpen1(!open1)
    const handleOpen2 = () => setOpen2(!open2)
    const handleOpen3 = () => setOpen3(!open3)
    const handleOpen4 = () => setOpen4(!open4)
    const handleOpen5 = () => setOpen5(!open5)
    // const handleOpen6 = () => setOpen6(!open6)


    return (
        <main>
            <section className='banner'>
                <Navbar />
                <div className='header'>
                    <div className='title'>
                        <p>Welcome to <br></br> Robo Invaderz</p>
                    </div>
                    <div className='title'>
                        <p>Inspired from ...</p>
                    </div>
                    <div className='butt'>
                        <button>Click Me</button>
                    </div>
                </div>

            </section>
            <section className='about_section'>
                {/* <h2>About Us</h2> */}
                <div className='about'>
                    <div className='about_image'>
                        <img src={sketch} alt='an nft' />
                    </div>
                    <div className='about_info'>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                        demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        Lorem ipsum may be used as a placeholder before final copy is available.  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                        demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        Lorem ipsum may be used as a placeholder before final copy is available.
                    </div>
                </div>
            </section>
            <section className='slideshow_section'>
                <h2>More Examples</h2>
                <SimpleSlider />
            </section>
            {/* <h2>FAQ</h2> */}
            <section className='faq'>
                <div className='nft_image'>
                    <h2>FAQ</h2>
                    <img src={laser} alt='an nft' />
                </div>
                <div className='questions'>
                    <div onClick={handleOpen1}>
                        <Questions question={'Whens mint?'} />
                    </div>
                    {open1 === true && (
                        <div className='question'>
                            <Answer answer={'TBA'} />
                        </div>
                    )}
                    <div onClick={handleOpen2}>
                        <Questions question={'What blockchain?'} />
                    </div>
                    {open2 === true && (
                        <div className='question'>
                            <Answer answer={'Solana'} />
                        </div>
                    )}
                    <div onClick={handleOpen3}>
                        <Questions question={'how many in collection?'} />
                    </div>
                    {open3 === true && (
                        <div className='question'>
                            <Answer answer={'2000'} />
                        </div>
                    )}
                    <div onClick={handleOpen4} >
                        <Questions question={'will there be whitelist?'} />
                    </div>
                    {open4 === true && (
                        <div className='question'>
                            <Answer answer={'No'} />
                        </div>
                    )}
                    <div onClick={handleOpen5} >
                        <Questions question={'which wallets am i able to use?'} />
                    </div>
                    {open5 === true && (
                        <div className='question'>
                            <Answer answer={'Phantom'} />
                        </div>
                    )}

                </div>
            </section>
            <section className='banner'>
                coming soon
            </section>
        </main>
    )
}

export default StartingPage