import React from 'react'
import { useState } from 'react/cjs/react.development';

function Main() {
    const [toggle, setToggle] = useState(false);
    
    const toggler = () => {
        setToggle(value => !value);
        console.log(toggle);
    }

    return (        
        <div id='topdiv' className='main'>
            <div className="mainLeft">
                <span>01</span>
                <h1>Modern <br /> Interior</h1>
                <span onClick={toggler}>{'-->'}</span>                
            </div>
            <div className="mainRight">
                <div className="img-wrapper">
                    <img className='img' src="http://cdn.home-designing.com/wp-content/uploads/2018/04/Taupe-sofa.jpg" alt="mainpic" />
                </div>
                <div className="img-wrapper">
                    <img className='img' src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/static/optimized/online-decorating/wp-content/uploads/2018/10/669241e492f73dbdc24793e060b5b455.modern-interior-designer-nyc.jpg" alt="mainpic" />
                </div>
                <div className="img-wrapper">
                    <img className='img' src="https://cgifurniture.com/wp-content/uploads/2020/12/modern-interior-design-6-styles-View02.jpg" alt="mainpic" />
                </div>                
            </div>                                  
        </div>      
    )
}

export default Main
