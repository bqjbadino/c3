import React from 'react';

const World = () => {
    return (
        <video id="video-world.mp4" style={{width: '100%'}} autoPlay muted loop>
            <source src='videos/world.mp4' type="video/mp4" />
        </video>
    )
}

export default World;