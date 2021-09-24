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
                <span>{toggle ? "02" : "01"}</span>
                <h1>Modern <br />{toggle ? "Exterior" : "Interior"}</h1>
                <span onClick={toggler}>{toggle ? '<<<' : '>>>'}</span>
            </div>
            <div className="mainRight">
                <div className="img-wrapper">
                    <img 
                        className='img' 
                        src={toggle ? "https://cdn.decoist.com/wp-content/uploads/2021/06/Modular-black-house-with-balcony-49706.jpg" : "http://cdn.home-designing.com/wp-content/uploads/2018/04/Taupe-sofa.jpg" }
                        alt="mainpic" 
                      />
                </div>
                <div className="img-wrapper">
                    <img 
                    className='img'
                    src={ toggle ? "https://siwanaturalhome.com/wp-content/uploads/2019/10/Modern-Home-Design.jpg" : "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/static/optimized/online-decorating/wp-content/uploads/2018/10/669241e492f73dbdc24793e060b5b455.modern-interior-designer-nyc.jpg"}
                    alt="mainpic" 
                    />
                </div>
                <div className="img-wrapper">
                    <img
                     className='img'
                     src={ toggle ? "https://cdn.home-comfort.net//371007/image.jpg.webp" : "https://cgifurniture.com/wp-content/uploads/2020/12/modern-interior-design-6-styles-View02.jpg"}
                     alt="mainpic" />
                </div>                
            </div>                                  
        </div>      
    )
}

export default Main
