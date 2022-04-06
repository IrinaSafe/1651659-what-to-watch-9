import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  posterImage: string,
  width: string,
  height: string,
  previewVideoLink: string,
  isActive: boolean,
}

function VideoPlayer({posterImage, width, height, previewVideoLink, isActive}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isActive) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }, [isActive]);

  return (
    <video
      className="player__video"
      ref={videoRef}
      poster={posterImage}
      width={width}
      height={height}
      muted
    >
      <source src={previewVideoLink} type="video/mp4"></source>
    </video>
  );
}

export default VideoPlayer;
