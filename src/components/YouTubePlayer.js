import React from 'react';
import ReactPlayer from 'react-player';

const YouTubePlayer = ({ videoUrl }) => {
  return (
    
      <ReactPlayer 
        url={videoUrl} 
        controls // Shows player controls
        width="100%" 
        height="100%"
      />

  );
};

export default YouTubePlayer;
