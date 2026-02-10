"use client";

import Lottie from "react-lottie-player";
import loading from "@/public/loading.json";

export default function Loading() {
  return (
    <div className="max-w-360 h-screen mx-auto flex justify-center items-center">
      <Lottie
        animationData={loading}
        play
        loop
        style={{ width: "400px", height: "auto" }}
      />
    </div>
  );
}
