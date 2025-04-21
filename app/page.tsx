// app/page.tsx
"use client";
import dynamic from "next/dynamic";
import React from "react";

const AudioPlayer = dynamic(() => import("./components/AudioPlayer"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="flex items-center justify-center w-screen h-screen p-6">
      <AudioPlayer />
    </main>
  );
}
