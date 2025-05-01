import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState([]);

  const fetchSidebarApi = async () => {
    try {
      const response = await fetch('/data/sidebar.json');
      const result = await response.json();
      setSidebar(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  useEffect(() => {
    fetchSidebarApi();
  }, []);

  return (
    <AppContext.Provider value={{ sidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
