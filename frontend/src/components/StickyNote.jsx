export default function StickyNote({
  title,
  children,
  className = "",
  rotate = 0,
  
}) {
  return (
    <div
      className={` shadow-lg border border-black/10 p-6 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {title ? <h3 className="font-bold mb-3">{title}</h3> : null}
      {children}
    </div>
  );
}
