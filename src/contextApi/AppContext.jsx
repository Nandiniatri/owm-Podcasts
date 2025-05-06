import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [showData, setShowData] = useState([]);
  const [sidebar, setSidebar] = useState([]);
  const [discoverBtn, setDiscoverBtn] = useState([]);
  const [discoverCaroData, setDiscoverCaroData] = useState([]);
  const [trending, setTrending] = useState([]);
  const [webByAward, setWebByAward] = useState([]);
  const [guestCurator, setGuestCurator] = useState([]);
  const [under20MinData, setUnder20MinData] = useState([]);
  const [netWorkHigh, setNetWorkHigh] = useState([]);
  const [podcasteStartedData, setPodCasteStartedData] = useState([]);
  const [rajShami , setRajShami] = useState([]);
  const [bhartiTvOUTERData , setBhartiTvOUTERData] = useState([]);
  const [ranveerAllahbadiaOUTER , setRanveerAllahbadiaOUTER] = useState([]);
  const [reLivingSingleOUTER , setRelivingSingleOUTER] = useState([]);
  const [bhartiTVInnerData , setBhartiTVInnerData] = useState([]);

  const fetchBhartiTvInnerDataApi = async () => {
    try {
      const response = await fetch('/api/bhartiTvInner');
      const result = await response.json();
      console.log(result);
      
      setBhartiTVInnerData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchRelivingSingleOUTERDataApi = async () => {
    try {
      const response = await fetch('/api/reLivingSingleOUTER');
      const result = await response.json();
      setRelivingSingleOUTER(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchranveerAllahbadiaOUTERDataApi = async () => {
    try {
      const response = await fetch('/api/ranveerAllahbadiaOUTER');
      const result = await response.json();
      setRanveerAllahbadiaOUTER(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchBhartiTvOuterDataApi = async () => {
    try {
      const response = await fetch('/api/bhartiTvOUTER');
      const result = await response.json();
      setBhartiTvOUTERData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchRajShamiApi = async () => {
    try {
      const response = await fetch('/api/rajShmmi');
      const result = await response.json();
      setRajShami(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchPodcastStartedApi = async () => {
    try {
      const response = await fetch('/api/podcastStarted');
      const result = await response.json();
      setPodCasteStartedData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

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
    fetchPodcastStartedApi();


    fetchRajShamiApi();
    fetchBhartiTvOuterDataApi();
    fetchranveerAllahbadiaOUTERDataApi();
    fetchRelivingSingleOUTERDataApi();
    fetchBhartiTvInnerDataApi();
  }, []);

  return (
    <AppContext.Provider value={{
      showData, setShowData,
      sidebar,
      discoverBtn,
      discoverCaroData,
      trending,
      webByAward,
      guestCurator,
      under20MinData,
      netWorkHigh,
      podcasteStartedData,

      rajShami,
      bhartiTvOUTERData,
      ranveerAllahbadiaOUTER,
      reLivingSingleOUTER,

      bhartiTVInnerData
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
