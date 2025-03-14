import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import { useSidebar } from "../../contexts/SidebarContext";
import Sidebar from "../Sidebar";
import { projectsData } from "../../data/data";
import { useEffect, useRef } from "react";

const WorksNavbar = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const sidebarRef = useRef(null);
  const location = useLocation();
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const basePath = location.pathname.split("/").slice(0, 3).join("/"); 
  const currentProjects = projectsData[basePath] || []; // Ensure fallback to empty array

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, setSidebarOpen]);

  // Handle link click in sidebar
  const handleLinkClick = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <div>
      {/* Semi nav bar For work */}
      <div className="pt-16 z-10 fixed w-full border-b border-slate-900">
        <nav>
          <ul className="flex gap-2 items-center bg-main justify-start text-sec_text whitespace-nowrap overflow-x-auto sm:overflow-visible scrollbar-hide">
            {currentProjects.length > 0 && (
            <div className="md:hidden z-50 block">
              <button
                ref={menuRef}
                className="rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  setSidebarOpen(!sidebarOpen);
                }}
              >
                <MenuIcon />
              </button>
            </div>
            )}

            <li className="text-xl">
              <NavLink to="/works/frontend" className={({isActive})=>`${isActive && "font-bold bg-hbg shadow"} px-2`}>Front-End</NavLink>
            </li>
            <li className="text-xl">
              <NavLink to="/works/backend" className={({isActive})=>`${isActive && "font-bold bg-hbg shadow"} px-2`}>Back-End(Servers)</NavLink>
            </li>
            <li className="text-xl">
              <NavLink to="/works/database" className={({isActive})=>`${isActive && "font-bold bg-hbg shadow"} px-2`}>Database Administration</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="pt-20 flex w-full">
        {currentProjects.length < 1 ? (
          <div className="pt-8 h-full flex-1 shadow">
           <Outlet />
          </div>
        ) : (
          <>
          {
            sidebarOpen && (
              <div
            ref={sidebarRef}
            className={`border-r border-r-amber-800
        shadow-inner md:hidden bg-sec pt-2 text-xl transition-all duration-300 overflow-hidden
              w-[80%] sm:w-[35%]`}
          >
            <Sidebar links={currentProjects} onLinkClick={handleLinkClick}/>
          </div>
            )
          }

        <div className="hidden bg-sec md:block sm:pt-2 sm:w-[20%] border-r border-r-amber-800
        shadow-inner">
          <Sidebar links={currentProjects} onLinkClick={handleLinkClick}/>
        </div>

        <div className="pt-8 h-full flex-1 shadow">
          <Outlet />
        </div>
          </>
        ) }
       
      </div>
    </div>
  );
};

export default WorksNavbar;