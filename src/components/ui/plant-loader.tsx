"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/process-loader";

interface PlantLoaderProps {
  onLoadingComplete?: () => void;
  minimumLoadingTime?: number;
}

export default function PlantLoader({
  onLoadingComplete,
  minimumLoadingTime = 2000,
}: PlantLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progressPercentage = Math.min(
        (elapsedTime / minimumLoadingTime) * 100,
        100
      );

      setProgress(progressPercentage);

      if (progressPercentage < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setIsComplete(true);
        onLoadingComplete?.();
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [minimumLoadingTime, onLoadingComplete]);

  return (
    <div className="flex min-h-[250px] min-w-[160px] flex-col items-center justify-center gap-6 p-4">
      <div className="relative h-20 min-w-[160px]">
        <Image
          src="/assets/gif/plant.gif"
          alt="Loading animation of a growing plant"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="w-full max-w-[160px] space-y-2">
        <Progress value={progress} className="h-2" />
        <p className="text-center text-sm text-muted-foreground">
          {isComplete
            ? "Sẳn sàng!"
            : `Đang gieo hạt... ${Math.round(progress)}%`}
        </p>
      </div>
    </div>
  );
}
