"use client";

import React, { useRef, useState, useEffect } from "react";
// Ensure AudioContext types are available
import Image from "next/image";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(1);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    if (audioRef.current && !audioCtxRef.current) {
      const ctx = new AudioContext();
      const source = ctx.createMediaElementSource(audioRef.current);
      const gainNode = ctx.createGain();
      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      audioCtxRef.current = ctx;
      gainNodeRef.current = gainNode;
    }
  }, []);

  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = volume;
    }
  }, [volume]);

  const handlePlay = async () => {
    if (!audioRef.current) return;
    // Resume AudioContext if suspended (required for mobile/production)
    if (audioCtxRef.current?.state === "suspended") {
      await audioCtxRef.current.resume();
    }
    audioRef.current.currentTime = 0;
    await audioRef.current.play();
  };

  return (
    <div className="w-full max-w-md mx-auto my-4 p-4 sm:p-6 bg-[#f2f2f2] rounded-lg shadow-[6px_6px_16px_rgba(0,0,0,0.4),-6px_-6px_16px_rgba(255,255,255,0.7)] flex flex-col justify-evenly items-center min-h-[480px]">
      <div className="w-full py-4 h-48 flex items-center justify-center">
        <Image
          src="/images/technologia.png"
          alt="Technologia Logo"
          width={800}
          height={400}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <button
        onClick={handlePlay}
        aria-label="Play Technologia audio"
        className="w-full bg-[#f2f2f2] text-gray-800 text-xl font-medium py-5 rounded-lg shadow-[6px_6px_16px_rgba(0,0,0,0.4),-6px_-6px_16px_rgba(255,255,255,0.7)] hover:shadow-[3px_3px_6px_rgba(0,0,0,0.3),-3px_-3px_6px_rgba(255,255,255,0.7)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-shadow duration-200"
      >
        Technologia!!!!
      </button>

      <div className="w-full flex items-center space-x-2">
        <span className="text-gray-600">🔊</span>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="flex-1 h-4 bg-[#f2f2f2] rounded-full accent-gray-500"
        />
      </div>

      <audio ref={audioRef} className="hidden">
        <source src="/audio/technologia.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
