"use client";

import { useEffect, useRef } from "react";

export default function ViewCounter({ postId }: { postId: string }) {
  const counted = useRef(false);

  useEffect(() => {
    if (counted.current) return;
    counted.current = true;

    fetch("/api/views", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug: postId }),
    });
  }, [postId]);

  return null;
}
