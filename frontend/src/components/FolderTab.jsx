import { NavLink } from "react-router-dom";

export default function FolderTab({ to, label, borderColor = "#46260C", borderWidth = 1 }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        const base = "px-15 font-bold rounded-t-xl shadow-none relative";
        // active should sit flush with the panel edge; inactive sits slightly lower
        const active = "py-3.5 text-2xl -top-1 bg-[#F5E5D1] translate-y-0 z-30";
        const inactive = "py-3  text-base bg-[#FFF5E8] transition duration-300 hover:bg-[#edd6b6] top-1 z-20";
        return `${base} ${isActive ? active : inactive}`;
      }}
      style={({ isActive }) => ({
        border: `${borderWidth}px solid ${borderColor}`,
        borderBottomColor: isActive ? "transparent" : undefined,
      })}
    >
      {label}
    </NavLink>
  );
}
