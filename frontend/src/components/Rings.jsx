import { useEffect, useState } from "react";

export default function Rings({ className = "", targetRef = null, min = 3, density =50 }) {
  const [rect, setRect] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      const el = targetRef?.current;
      if (el) {
        setRect(el.getBoundingClientRect());
      } else {
        setRect({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    update();
    if (targetRef?.current) {
      const ro = new ResizeObserver(update);
      ro.observe(targetRef.current);
      window.addEventListener("resize", update);
      return () => {
        ro.disconnect();
        window.removeEventListener("resize", update);
      };
    }
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [targetRef]);

  const availableWidth = rect.width || window.innerWidth;
  const ringCount = Math.max(min, Math.round(availableWidth / density));

  const ringHeight = Math.max(28, Math.round((rect.height || 120) * 0.28));
  const ringWidth = Math.max(8, Math.round((rect.width || 120) * 0.06));
  const centerDotSize = Math.max(6, Math.round(ringWidth * 0.9));

  return (
    <div className={`flex items-center justify-center gap-8 p-2 ${className}`}>
      {[...Array(ringCount)].map((_, i) => (
        <div key={i} className="relative">
          <div
            className="w-3 h-10 border border-black rounded-full"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 50% 100%, 50% 50%, 0 50%)",
            }}
          />
          <div
            className="w-3 h-10 -translate-y-10 translate-x-1 border border-black rounded-full"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 50% 100%, 50% 50%, 0 50%)",
            }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-600 rounded-full z-10" />
        </div>
      ))}
    </div>
  );
}