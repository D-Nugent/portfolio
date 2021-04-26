import React from 'react';
import AcumenDemo from '../../assets/videos/acumen-demo.mp4'
import './VideoModal.scss';

function VideoModal({toggleVideoModal}) {

    return (
        <article className="video-modal">
            <p className="video-modal__close" onClick={()=>toggleVideoModal()}>X</p>
            <video src={AcumenDemo} className="video-modal__video" controls/>            
        </article>
    )
}

export default VideoModal
