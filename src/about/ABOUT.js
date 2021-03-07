import React from 'react'
import dubai from '../images/dubai.jpg';
import sharjah from '../images/sharjah.jpg'
import abudhabi from '../images/abu-dhabi.jpg'

export default function ABOUT() {
    return (
        <>
        <div className='about-container'>
          <h1 className='title'>ABOUT</h1>
          <div className='dubai'>
            <h1> Dubai</h1>
            <p>There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable.
                If you are going to use a passage.<br/> Tel:13145353, Mobile:111546348</p>
             </div>
          <div className='dubai-img'>
           <img className='dubai-img' alt='' src={dubai}></img>
          </div>
          <div className='abudhabi'>
            <h1>Abu dhabi</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. <br/>
              Tel:13145353, Mobile:111546348</p>
            </div>
          <div className='abudhabi-img'>
            <img alt='' className='abudhabi-img' src={abudhabi}></img>
          </div>
          <div className='sharjah'>
          <h1>Sharjah</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
               Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.<br/>
               Tel:13145353, Mobile:111546348 </p>
          </div>
          <div className='sharjah-img'>
            <img alt='' className='sharjah-img' src={sharjah}></img>
            </div>
        </div>

        </>
    )
}
