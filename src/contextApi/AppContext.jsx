import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState([]);
  const [discoverBtn, setDiscoverBtn] = useState([]);


  const fetchDiscoverBtnDataApi = async () => {
    try {
      const response = await fetch('/data/discoverBtnData.json');
      const result = await response.json();
      setDiscoverBtn(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

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
    fetchDiscoverBtnDataApi();
  }, []);

  return (
    <AppContext.Provider value={{
      sidebar,
      discoverBtn
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
