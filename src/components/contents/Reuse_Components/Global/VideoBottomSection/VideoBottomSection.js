import React from 'react'
import './VideoBottomSection.css';

const VideoBottomSection = ({title, subtitle, media}) => {
  return (
    <div className='video-bottom_section'>
      {media && (
        <div className='video-bottom_wrapper'>
          
          <div className='video-bottom_head'>
            <h2 className='video-bottom_title'>{title}</h2>
            <p className='video-bottom_subtitle'>{subtitle}</p>
          </div>
          <img className='video-bottom_media' src={media}  />
        </div>
      )}
    </div>
  )
}

export default VideoBottomSection;