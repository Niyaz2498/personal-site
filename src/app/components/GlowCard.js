'use client';

import { useRef, useState } from 'react';

export default function GlowCard({ children, className = '' }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* The trailing spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovered ? 0.25 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--accent-light), transparent 40%)`,
        }}
      />
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
