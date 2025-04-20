// components/AudioPlayer.tsx
"use client";
import React, { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(1);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  return (
    <div className="flex flex-col items-center p-4">
      <img
        src="/images/technologia.png"
        alt="Technologia"
        className="w-full max-w-4xl h-auto mb-6"
      />
      <button
        onClick={handlePlay}
        className="px-12 py-8 mb-4 text-4xl bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Technologia!!!!
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="mb-6 max-w-4xl"
      />
      <audio ref={audioRef} className="hidden">
        <source src="/audio/technologia.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
