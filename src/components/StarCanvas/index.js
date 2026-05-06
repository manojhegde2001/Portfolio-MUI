import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const StarCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let stars = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 6000);
      stars = Array.from({ length: count }, () => createStar());
    };

    const createStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.2,
      opacity: Math.random(),
      opacityDelta: (Math.random() * 0.008 + 0.002) * (Math.random() < 0.5 ? 1 : -1),
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      color: pickColor(),
    });

    const pickColor = () => {
      const colors = [
        'rgba(133, 76, 230, alpha)',   // purple
        'rgba(255, 255, 255, alpha)',  // white
        'rgba(80, 180, 255, alpha)',   // light blue
        'rgba(200, 140, 255, alpha)',  // lavender
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Twinkle
        star.opacity += star.opacityDelta;
        if (star.opacity >= 1) { star.opacity = 1; star.opacityDelta *= -1; }
        if (star.opacity <= 0.05) { star.opacity = 0.05; star.opacityDelta *= -1; }

        // Drift
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw
        const color = star.color.replace('alpha', star.opacity.toFixed(2));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Glow on larger stars
        if (star.radius > 0.9) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = color.replace(star.opacity.toFixed(2), (star.opacity * 0.15).toFixed(2));
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default StarCanvas;
