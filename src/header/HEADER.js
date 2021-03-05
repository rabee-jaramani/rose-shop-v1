import React from 'react'
import logo from '../logo/logo.png'
export default function HEADER() {
    return (
        <>
            {/* Love and a red rose can’t be hid. */}
            <div className='header'>
                <div className='logo'><img src={logo}></img></div>
                <div className='words'>
                    
            <div className='w1 '>Always</div>
            <div className='w2'>Deliver</div>
            <div className='w3 '>More</div>
            <div className='w4'>Than</div>
            <div className='w5 '>Expected</div>
            {/* <div className='w6'>NOT</div>
            <div className='w7 '>BE</div>
            <div className='w8'>HID</div> */}
            </div>
            </div>
        </>
    )
}
