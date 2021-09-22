import React from 'react'

function ContactDiv() {
    return (
        <div id='contactdiv' className='main contact'>
            <form className='form' action="">
                <h1 className='formh1'>Get in touch</h1>
                <input className='formInput' placeholder='Email' type="text" />
                <input className='formInput' placeholder='Name' type="text" />
                <input className='formInput' placeholder='Subject' type="text" />
                <textarea className='formInput' placeholder='Message'></textarea>
                <button className='formBtn'>Send</button>
            </form>
            <div className='contactRight'>
                <h1>Contact Us</h1>
                <p className='label'>
                    <span>Adress: </span>
                    Random Ulica 12
                </p>
                <p className='label'>
                    <span>Phone: </span>
                    +387 62 111 000
                </p>
                <p className='label'>
                    <span>Email: </span>
                    random@mail.com
                </p>
            </div>
        </div >
    )
}

export default ContactDiv
