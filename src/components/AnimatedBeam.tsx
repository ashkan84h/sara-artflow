import React, { useRef, useEffect, useId } from 'react';

interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export default function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = 'gray',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = '#ffaa40',
  gradientStopColor = '#9c40ff',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const id = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current && svgRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const fromRect = fromRef.current.getBoundingClientRect();
        const toRect = toRef.current.getBoundingClientRect();

        const relativeFromRect = {
          top: fromRect.top - containerRect.top,
          left: fromRect.left - containerRect.left,
          width: fromRect.width,
          height: fromRect.height,
        };

        const relativeToRect = {
          top: toRect.top - containerRect.top,
          left: toRect.left - containerRect.left,
          width: toRect.width,
          height: toRect.height,
        };

        const startX = relativeFromRect.left + relativeFromRect.width / 2 + startXOffset;
        const startY = relativeFromRect.top + relativeFromRect.height / 2 + startYOffset;
        const endX = relativeToRect.left + relativeToRect.width / 2 + endXOffset;
        const endY = relativeToRect.top + relativeToRect.height / 2 + endYOffset;

        const controlPointX = startX + (endX - startX) / 2;
        const controlPointY = startY + (endY - startY) / 2 + curvature;

        const d = `M ${startX} ${startY} Q ${controlPointX} ${controlPointY} ${endX} ${endY}`;
        
        if (pathRef.current) {
          pathRef.current.setAttribute('d', d);
        }
      }
    };

    const resizeObserver = new ResizeObserver(updatePath);
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updatePath();

    return () => resizeObserver.disconnect();
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        fill="none"
      />
      <path
        stroke={`url(#gradient-${id})`}
        strokeWidth={pathWidth}
        strokeOpacity="1"
        fill="none"
        strokeLinecap="round"
        pathLength="100"
        style={{
          strokeDasharray: '10 90',
          strokeDashoffset: reverse ? '0' : '100',
          animation: `beam-${id} ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      />
      <style>
        {`
          @keyframes beam-${id} {
            0% {
              stroke-dashoffset: ${reverse ? '0' : '100'};
            }
            100% {
              stroke-dashoffset: ${reverse ? '-100' : '0'};
            }
          }
        `}
      </style>
    </svg>
  );
}