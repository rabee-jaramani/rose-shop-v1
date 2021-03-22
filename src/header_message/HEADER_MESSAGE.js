import React from 'react'
import { Link } from 'react-router-dom'
// import {$} from 'react-jquery-plugin'

export default function HEADER_MESSAGE(props) {

    return (
        <>
            <div className='hdr-msg-div'>
                <h1>Always Deliver More Than Expected
                     <p><i className="fab fa-whatsapp"></i>Call us on 05123123. <i className="fab fa-whatsapp-square"></i>Whatsapp : 0567657124</p></h1>
                <Link onClick={props.start_shopping} id='hdr_msg_btn' to='cards' href='cards' className='hdr-msg-btn'>Start Shopping</Link>
            </div>
        </>
    )
}
