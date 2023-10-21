import React from 'react';

import './VideoTech1.css'

const VideoTech1 = () => {
    return (
        <video id="video-tech-1" autoPlay muted loop style={{width:'100%', position:'absolute', top:'0', left:'0'}}>
            <source src='videos/tech-1.mp4' type='video/mp4' />
        </video>
    )
}

export default VideoTech1;