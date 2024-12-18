"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(false);
    }, 1500);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    loading && (
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-background z-[100] grid place-items-center transition-all duration-300  ${
          isMounted ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-50 h-50  rounded-full">
          <Logo className="w-full h-full" />
        </div>
      </div>
    )
  );
}
