import './StartingPage.css'
import Questions from '../components/Questions/Questions'
import Answer from '../components/Questions/Answer'
import { useState } from 'react'
import SimpleSlider from '../components/UI/Slider'
import mark from '../components/assets/mark.png'

const StartingPage = () => {

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    const handleOpen1 = () => setOpen1(!open1)
    const handleOpen2 = () => setOpen2(!open2)
    const handleOpen3 = () => setOpen3(!open3)


    return (
        <main>
            <section className='banner'>
                banner
            </section>
            <section className='about_section'>
                <h2>About Us</h2>
                <div className='about'>
                    <div className='about_image'>
                        <img src={mark} alt='an nft' />
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
                    <img src={mark} alt='an nft' />
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
                    <div >
                        <Questions question={'will there be whitelist?'} />
                    </div>
                    <div >
                        <Questions question={'which wallets am i able to use?'} />
                    </div>

                </div>
            </section>
            <section className='banner'>
                coming soon
            </section>
        </main>
    )
}

export default StartingPage