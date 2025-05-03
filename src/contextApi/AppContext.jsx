import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState([]);
  const [discoverBtn, setDiscoverBtn] = useState([]);
  const [discoverCaroData, setDiscoverCaroData] = useState([]);
  const [trending, setTrending] = useState([]);
  const [webByAward, setWebByAward] = useState([]);
  const [guestCurator, setGuestCurator] = useState([]);
  const [under20MinData, setUnder20MinData] = useState([]);
  const [netWorkHigh , setNetWorkHigh] = useState([]);

  const fetchNetworkHighLightApi = async () => {
    try {
      const response = await fetch('/api/networkHighlight');
      const result = await response.json();
      setNetWorkHigh(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchUnder20MinApi = async () => {
    try {
      const response = await fetch('/api/under20Min');
      const result = await response.json();
      setUnder20MinData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchGuestCuratorApi = async () => {
    try {
      const response = await fetch('/api/guestCuratorCard');
      const result = await response.json();
      setGuestCurator(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchWebByAwardWinnerApi = async () => {
    try {
      const response = await fetch('/api/webbyAwardWinner2025');
      const result = await response.json();
      setWebByAward(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

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
    fetchWebByAwardWinnerApi();
    fetchGuestCuratorApi();
    fetchUnder20MinApi();
    fetchNetworkHighLightApi();
  }, []);

  return (
    <AppContext.Provider value={{
      sidebar,
      discoverBtn,
      discoverCaroData,
      trending,
      webByAward,
      guestCurator,
      under20MinData,
      netWorkHigh
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
