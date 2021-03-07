import React from 'react'
import { Link } from 'react-router-dom'

export default function HEADER_MESSAGE() {
    function scroll() {
    document.querySelector('.hdr-msg-div').classList.add('hide');
    }
 
    return (
        <>
            <div className='hdr-msg-div'>
                <h1>Roses For All Events, Onlie Rose Shop, Deliver In Dubai And All UAE
                     <p>Call us on +971454545. Whatsapp: +9716161611</p></h1>
                <Link id='hdr_msg_btn' onClick={scroll} to='cards' href='cards' className='hdr-msg-btn'>Start The Journey</Link>
            </div>
        </>
    )
}
