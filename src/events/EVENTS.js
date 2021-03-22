import React from 'react'
import ReactPlayer from "react-player"
export default function EVENTS() {
    setTimeout(()=>{document.querySelector('.hdr-msg-div').classList.add('hide')},0) 
    document.querySelector('.body').classList.add('change-bk');
    return (
        <div className='events1'>
        <div className='events-title'>Recent Events</div>
            <div className='videos-container'>

                <div className='video'>
                    <ReactPlayer className='react-player'
                     width='100%'
                        url="https://www.youtube.com/watch?v=0B-zDOdyGME"
                    />
                </div>
                <div className='video'>
                    <ReactPlayer className='react-player'
                     width='100%'
                        url="https://www.youtube.com/watch?v=1wbJEBuNWvY"
                    />
                </div>
                <div className='video'>
                    <ReactPlayer className='react-player'
                     width='100%'
                        url="https://www.youtube.com/watch?v=EQNCmcvoQo4"
                    />
                </div>
                <div className='video'>
                    <ReactPlayer className='react-player'
                     width='100%'
                        url="https://www.youtube.com/watch?v=73VnkzCLVU0"
                    />
                </div>
                <div className='video'>
                    <ReactPlayer className='react-player'
                     width='100%'
                        url="https://www.youtube.com/watch?v=PWqJOE8HZUw"
                    />
                </div>
                <div className='video'>
                    <ReactPlayer className='react-player'
                     width='100%'
                        url="https://www.youtube.com/watch?v=dFd4uAlfGZY"
                    />
                </div>
                <div className='video'>
                    <ReactPlayer className='react-player'
                     width='100%'
                        url="https://www.youtube.com/watch?v=9uucte5e318"
                    />
                </div>
                <div className='video'>
                    <ReactPlayer className='react-player'
                    width='100%'
                        url="https://www.youtube.com/watch?v=0B-zDOdyGME"
                    />
                </div>
            </div>
        </div>
    )
}
