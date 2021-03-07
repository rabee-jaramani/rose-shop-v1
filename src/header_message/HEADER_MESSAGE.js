import React from 'react'
import { Link } from 'react-router-dom'

export default function HEADER_MESSAGE() {

    return (
        <>
            <div className='hdr-msg-div'>
                <h1>Roses For All Events, Onlie Rose Shop, Deliver In Dubai And All UAE
                     <p>Call us on 9714545. Whatsapp: 97161611</p></h1>
                <Link id='hdr_msg_btn' to='cards' href='cards' className='hdr-msg-btn'>Start The Journey</Link>
            </div>
        </>
    )
}
