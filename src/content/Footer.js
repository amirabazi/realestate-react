import React from 'react'
import { useState } from 'react/cjs/react.development';
import Second from './Second'


function Footer() {

    const [toggle, setToggle] = useState(false);
    
    const toggler = () => {
        setToggle(true);
        console.log(toggle);
    }

    return (
        <footer className='footer'>
            <div className="pageCount">
                <span>Previous</span>
            </div>
            <div className="nextPage">
                <span onClick={toggler}>Next</span>
                {toggle ? 
                <Second /> : null
                }
            </div>
        </footer>
    )
}

export default Footer
