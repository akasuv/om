"use client";
import React from "react";
import { PlayCircle, SkipForward, SkipBack, PauseCircle } from "lucide-react";
import ReactPlayer from "react-player";

const Player = () => {
  const [playing, setPlaying] = React.useState(false);
  const playerRef = React.createRef<ReactPlayer>();
  const [progress, setProgress] = React.useState(0);
  const [seekTo, setSeekTo] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);
  const [seeking, setSeeking] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handlePlay = () => {
    setPlaying((prev) => !prev);
  };

  const handleSeekMouseDown = (e: any) => {
    setSeeking(true);
  };

  const handleSeekChange = (e: any) => {
    setProgress(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e: any) => {
    setSeeking(false);

    playerRef.current?.seekTo(parseFloat(e.target.value));
  };

  return mounted ? (
    <div className="fixed bottom-0 left-0 w-full h-[100px] flex flex-col items-center gap-y-4 bg-white shadow-xl rounde-2xl shadow-black p-4">
      <ReactPlayer
        className="hidden"
        url="/music/flower.mp4"
        ref={playerRef}
        playing={playing}
        onProgress={(progress) => setProgress(progress.played)}
      />
      <div className="flex items-center gap-x-4">
        <SkipBack className="text-black h-6 w-6" />
        {playing ? (
          <PauseCircle
            className="text-black h-8 w-8 cursor-pointer"
            onClick={handlePlay}
          />
        ) : (
          <PlayCircle
            className="text-black h-8 w-8 cursor-pointer"
            onClick={handlePlay}
          />
        )}
        <SkipForward className="text-black h-6 w-6" />
      </div>
      <div className="w-1/2 relative">
        <div
          className="absolute top-1/2 left-0 bg-black rounded-full z-10 h-[6px] -translate-y-1/2"
          style={{
            width: `${progress * 100}%`,
          }}
        />
        <input
          className="w-full accent-black relative z-20"
          type="range"
          min={0}
          max={0.999999}
          step="any"
          value={progress}
          onMouseDown={handleSeekMouseDown}
          onMouseUp={handleSeekMouseUp}
          onChange={handleSeekChange}
        />
      </div>
    </div>
  ) : null;
};

export default Player;
