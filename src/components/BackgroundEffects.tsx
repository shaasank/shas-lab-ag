import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      requestAnimationFrame(() => {
        if (blobRef1.current) {
          blobRef1.current.style.transform = `translate(${mouseX - 400}px, ${mouseY - 400}px)`;
        }
        if (blobRef2.current) {
          blobRef2.current.style.transform = `translate(${mouseX - 300}px, ${mouseY - 300}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-black/40">
      {/* Primary blue/purple glow trailing the cursor */}
      <div
        ref={blobRef1}
        className="absolute w-[800px] h-[800px] rounded-full mix-blend-screen opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(139,92,246,0.15) 40%, transparent 70%)",
          filter: "blur(50px)",
          top: 0,
          left: 0,
          transition: "transform 1s cubic-bezier(0.1, 0.9, 0.2, 1)",
          willChange: "transform",
        }}
      />
      {/* Secondary emerald glow that trails a bit slower/differently */}
      <div
        ref={blobRef2}
        className="absolute w-[600px] h-[600px] rounded-full mix-blend-screen opacity-90"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 60%)",
          filter: "blur(40px)",
          top: 0,
          left: 0,
          transition: "transform 1.5s cubic-bezier(0.1, 0.9, 0.2, 1)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
