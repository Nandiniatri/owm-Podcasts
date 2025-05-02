import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState([]);
  const [discoverBtn, setDiscoverBtn] = useState([]);
  const [discoverCaroData, setDiscoverCaroData] = useState([]);
  const [trending , setTrending] = useState([]);
  
  const fetchTrendingApi = async () => {
    try {
      const response = await fetch('/api/trending');
      const result = await response.json();
      setTrending(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchDiscoverCarDataApi = async () => {
    try {
      const response = await fetch('/api/discoverCarousel');
      const result = await response.json();
      setDiscoverCaroData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchDiscoverBtnDataApi = async () => {
    try {
      const response = await fetch('/api/discoverBtn');
      const result = await response.json();
      setDiscoverBtn(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchSidebarApi = async () => {
    try {
      const response = await fetch('/api/sidebar');
      const result = await response.json();
      setSidebar(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  useEffect(() => {
    fetchSidebarApi();
    fetchDiscoverBtnDataApi();
    fetchDiscoverCarDataApi();
    fetchTrendingApi();
  }, []);

  return (
    <AppContext.Provider value={{
      sidebar,
      discoverBtn,
      discoverCaroData,
      trending
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
