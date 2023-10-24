import React from 'react';

import './VideoGlobe.css'

const VideoGlobe = () => {
    return (
        <video id="video-globe" autoPlay muted loop style={{position: 'absolute', top: '0', left: '0', zIndex: '-1'}} >
            <source src="globe.mp4" type="video/mp4" />
        </video>
    )
}
export default VideoGlobe;