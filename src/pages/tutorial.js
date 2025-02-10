import React from 'react';

export default function TutorialPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Tutorial</h1>
      <p>Watch this short video to learn how the game works.</p>

      {/* Example of embedding a video - replace /tutorial.mp4 with your actual video */}
      <video width="600" controls style={{ marginTop: '1rem' }}>
        <source src="/tutorial.mp4" type="video/mp4" />
        Sorry, your browser doesn’t support embedded videos.
      </video>
    </div>
  );
}
