import React, { useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => videoRef.current.play();
  const pauseVideo = () => videoRef.current.pause();
  const restartVideo = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div>
      <video ref={videoRef} width="300" controls>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>
      <br />
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
      <button onClick={restartVideo}>Restart</button>
    </div>
  );
}

export default VideoPlayer;