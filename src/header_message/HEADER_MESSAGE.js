import React from 'react'
import { Link } from 'react-router-dom'
// import {$} from 'react-jquery-plugin'

export default function HEADER_MESSAGE() {
function scroll() {
    setTimeout(()=>{window.scrollTo({top: 650, behavior: 'smooth'})},100)
}
    return (
        <>
            <div className='hdr-msg-div'>
                <h1>Roses For All Events, Onlie Rose Shop, Deliver In Dubai And All UAE
                     <p>Call us on 9714545. Whatsapp: 97161611</p></h1>
                <Link onClick={scroll} id='hdr_msg_btn' to='cards' href='cards' className='hdr-msg-btn'>Start The Journey</Link>
            </div>
        </>
    )
}
