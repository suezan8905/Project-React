import { useEffect, useRef, useState } from "react";

export default function useVideoControl() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  useEffect(() => { //this is to enable the video play and work accurately
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  return { videoRef, isPlaying, handlePlayPause };
}

