import React from 'react';

import './VideoGlobe.css'

const VideoGlobe = () => {
    return (
        <div>
            <video id="video-globe" autoPlay muted loop>
                <source src="globe.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
export default VideoGlobe;