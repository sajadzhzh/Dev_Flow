"use client";

import { useEffect, useRef, useState } from "react";

interface ProgressRingProps {
  progress: number;
  title?: string;
  subtitle?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export default function ProgressRing({
  progress,
  title = "پیشرفت پروژه",
  subtitle,
  size = 150,
  strokeWidth = 5,
  color = "#3B82F6",
}: ProgressRingProps) {
  const [value, setValue] = useState(0);

  const previous = useRef(0);

  useEffect(() => {
    const from = previous.current;
    const to = progress;

    previous.current = progress;

    let frame: number;
    let start: number | null = null;

    const duration = 1200;

    const animate = (time: number) => {
      if (!start) start = time;

      const elapsed = time - start;
      const t = Math.min(elapsed / duration, 1);

      // Ease Out Cubic
      const eased = 1 - Math.pow(1 - t, 3);

      const current = from + (to - from) * eased;

      setValue(current);

      if (t < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [progress]);

  const radius = (size - strokeWidth) / 2;

  const circumference = 2 * Math.PI * radius;

  const dashOffset =
    circumference - (value / 100) * circumference;

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        width: size,
      }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          width: size,
          height: size,
        }}
      >
        <svg
          width={size}
          height={size}
          className="-rotate-90 overflow-visible"
        >
          <defs>
            <linearGradient
              id="progressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor={color}
              />

              <stop
                offset="100%"
                stopColor="#60A5FA"
              />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur
                stdDeviation="4"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#27272A"
            strokeWidth={strokeWidth}
          />

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            filter="url(#glow)"
          />
        </svg>

        <div className="absolute flex flex-col items-center">
          <span className="text-4xl font-bold">
            {Math.round(value)}%
          </span>

          <span className="text-xs text-gray-500 mt-1">
            {title}
          </span>

          {subtitle && (
            <span className="text-[11px] text-gray-600 mt-1">
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}