import { useLocation } from "react-router-dom";
import StickyNote from "./StickyNote"
import FolderTab from "./FolderTab";


export default function PageShell({ children, borderColor = "#46260C", borderWidth = 1 }) {
  const { pathname } = useLocation();
  const homeActive = pathname === "/";
  const projectsActive = pathname.startsWith("/projects");
  const contactActive = pathname.startsWith("/contact")

  return (
    // background
    <div className="min-h-screen bg-[#faf6f0] flex justify-center py-16 px-6">
       {/* manila Folder */}
      <div
        className="relative w-full max-w-6xl rounded-3xl rounded-tl-none bg-[#F5E5D1] shadow-2xl p-10"
        style={{ border: `${borderWidth}px solid ${borderColor}` }}
      >
        {/* position of the tabs */}
        <div className="absolute -top-9.5 -left-0 -translate-x-[0.07rem] flex z-20 ">
          
          <div className={`relative ${homeActive ? "z-30" : "z-20"}`}>
            <FolderTab to="/" label="Home"/>
          </div>

          {/* overlap the second tab by sliding it left with negative margin */}
          <div className={`relative -ml-4 ${projectsActive ? "z-30" : "z-10"}`}>
            <FolderTab to="/projects" label="Projects" />
          </div>

          <div className={`relative -ml-4 ${contactActive ? "z-30" : "z-9"}`}>
            <FolderTab to="/contact" label="Contact Me" />
          </div>
          
        </div>

        {/* Stack two identical sticky notes: a tilted one behind, the real one in front, pretend paper*/}
        <div className="relative">
          {/* background copy: absolute, slightly offset + rotated, behind the front note */}
          <StickyNote className="absolute inset-0 rounded-none bg-[#FFFBF5] z-0 -translate-x-1 translate-y-1 pointer-events-none" rotate={3}/>

          {/* foreground note: normal flow, same size as background because background uses inset-0 */}
          <StickyNote className="rounded-none bg-[#FFFBF5] z-20">
    
            {children}
          </StickyNote>
        </div>

        
      </div>
    </div>
  );
}
