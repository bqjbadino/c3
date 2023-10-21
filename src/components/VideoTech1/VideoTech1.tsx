import React from 'react';

import './VideoTech1.css'

const VideoTech1 = () => {
    return (
        <div>
            <video id="videoTech1" autoPlay muted loop>
                <source src='tech-1.mp4' type='video/mp4' />
            </video>
        </div>
    )
}

export default VideoTech1;