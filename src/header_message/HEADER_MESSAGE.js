import React from 'react'
import { Link } from 'react-router-dom'
// import {$} from 'react-jquery-plugin'

export default function HEADER_MESSAGE() {
function scroll() {
    // setTimeout(()=>{window.scrollTo({top: 650, behavior: 'smooth'})},100);
    document.querySelector('.hdr-msg-div').classList.add('move-up-anim');
    setTimeout(()=>{document.querySelector('.hdr-msg-div').classList.add('hide');},1000);
    setTimeout(()=>{document.querySelector('.hdr-msg-div').classList.remove('move-up-anim');},1000)
    
    

    
}
    return (
        <>
            <div className='hdr-msg-div'>
                <h1>Always Deliver More Than Expected, Dubai
                     <p><i class="fab fa-whatsapp"></i>Call us on 9714545. <i class="fab fa-whatsapp-square"></i>Whatsapp : 97161611</p></h1>
                <Link onClick={scroll} id='hdr_msg_btn' to='cards' href='cards' className='hdr-msg-btn'>Start The Journey</Link>
            </div>
        </>
    )
}
