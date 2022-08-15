import './Questions.css'
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';
import { useState } from 'react';

const Questions = (props) => {
    const [open, setOpen] = useState(false)

    const Clicked = () => {
        setOpen(!open)
    }

    return (
        <div onClick={Clicked} className="container">
            {open === false && (
                <div className='question'>
                    <p>{props.question}</p>
                    <span><Plus size={30} /></span>
                </div>
            )}
            {open === true && (
                <div className='question'>
                    <p>{props.question}</p>
                    <span><Dash size={30} /></span>
                </div>
            )}
        </div>
    )
}

export default Questions