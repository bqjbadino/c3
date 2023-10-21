import React from 'react';

import './VideoMetaverse.css';

const VideoMetaverse = () => {
    return (
        <div>
            <video id="videoMetaverse" autoPlay muted loop>
                <source src='videos/barqia-metaverse.mp4' type='video/mp4' />
            </video>
        </div>
    )
}

export default VideoMetaverse;