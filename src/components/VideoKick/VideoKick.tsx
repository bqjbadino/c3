import React from 'react';

import './VideoKick.css';

const VideoKick = () => {
    return (
        <video id="video-kick" autoPlay muted loop style={{position: 'absolute', top: '0', left: '0', zIndex: '0'}}>
            <source src="videos/kick.mp4" type="video/mp4" />
        </video>
    )
}

export default VideoKick;