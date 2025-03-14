import { createContext, useContext, useState } from "react";

// Create context
export const SidebarContext = createContext();

// Custom hook to use context
export const useSidebar = () => useContext(SidebarContext);

const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
