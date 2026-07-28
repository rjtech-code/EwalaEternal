import { useEffect, useRef } from "react";

// Lightweight 2D-canvas "export network": drifting gold nodes (ports/buyers)
// connected by thin trade-route lines, plus slow-rotating globe rings behind.
// Chosen over a full 3D globe model for performance, per brief's own allowance.
export default function TradeNetworkCanvas({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h, dpr;
    let nodes = [];
    let angle = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = w < 640 ? 26 : 46;
      nodes = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const drawGlobeRings = (cx, cy, R) => {
      ctx.save();
      ctx.strokeStyle = "rgba(201,162,75,0.16)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const ry = Math.abs(Math.sin(angle + i * 0.6)) * R * 0.9 + R * 0.08;
        ctx.beginPath();
        ctx.ellipse(cx, cy, R, ry, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(201,162,75,0.28)";
      ctx.stroke();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.78;
      const cy = h * 0.5;
      const R = Math.min(w, h) * 0.42;
      drawGlobeRings(cx, cy, R);

      // nodes drift
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      // connective veins between near nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 170) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            const mx = (a.x + b.x) / 2 + (b.y - a.y) * 0.06;
            const my = (a.y + b.y) / 2 - (b.x - a.x) * 0.06;
            ctx.quadraticCurveTo(mx, my, b.x, b.y);
            ctx.strokeStyle = `rgba(201,162,75,${0.14 * (1 - d / 170)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(230,197,110,0.75)";
        ctx.fill();
      });

      angle += 0.0025;
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
