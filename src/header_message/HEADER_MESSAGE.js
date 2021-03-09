import React from 'react'
import { Link } from 'react-router-dom'
// import {$} from 'react-jquery-plugin'

export default function HEADER_MESSAGE() {
function scroll() {
    // setTimeout(()=>{window.scrollTo({top: 650, behavior: 'smooth'})},100);
    document.querySelector('.hdr-msg-div').classList.add('move-up-anim');
    
    setTimeout(()=>{document.querySelector('.cards-container').classList.add('hide')},0);
    document.querySelector('.loading').classList.remove('hide')
    setTimeout(()=>{document.querySelector('.cards-container').classList.remove('hide')},2000)
    setTimeout(()=>{document.querySelector('.loading').classList.add('hide')},2000)
    
    setTimeout(()=>{document.querySelector('.hdr-msg-div').classList.add('hide');},1000);
    setTimeout(()=>{document.querySelector('.hdr-msg-div').classList.remove('move-up-anim');},1000)
    
    

    
}
    return (
        <>
            <div className='hdr-msg-div'>
                <h1>Always Deliver More Than Expected
                     <p><i class="fab fa-whatsapp"></i>Call us on 05123123. <i class="fab fa-whatsapp-square"></i>Whatsapp : 0567657124</p></h1>
                <Link onClick={scroll} id='hdr_msg_btn' to='cards' href='cards' className='hdr-msg-btn'>Start Shopping</Link>
            </div>
        </>
    )
}
