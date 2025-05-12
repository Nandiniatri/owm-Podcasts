import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
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
  const [rajShami, setRajShami] = useState([]);
  const [bhartiTvOUTERData, setBhartiTvOUTERData] = useState([]);
  const [ranveerAllahbadiaOUTER, setRanveerAllahbadiaOUTER] = useState([]);
  const [reLivingSingleOUTER, setRelivingSingleOUTER] = useState([]);
  const [bhartiTVInnerData, setBhartiTVInnerData] = useState([]);
  const [rajShamaniInnerData, setRajShamaniInnerData] = useState([]);
  const [ranveerAllabadiaInnerData, setRanveerAllabadiaInnerData] = useState([]);
  const [newReleseCarousel, setNewReleseCarousel] = useState([]);
  const [trendingInnerData, setTrendingInnerData] = useState([]);
  const [webByAwardWinInnerData, setWebByAwardWinInnerData] = useState([]);
  const [under20minInnerData, setUnder20MinInnerData] = useState([]);
  const [podcastStartedKitInnerData, setPodcastStartedKitInnerData] = useState([]);
  const [allCategoryBtnData, setAllCategoryBtnData] = useState([]);
  const [btnCategory, setBtnCategory] = useState([]);

  const fetchAllCategoryBtnDataApi = async (category) => {
    try {
      // const url = 
      const response = await fetch(`https://podcasts-backend-j9ty.onrender.com/api/podcastallcategory?category=${category}`);
      const result = await response.json();
      if (!response.ok) {
        console.error("error:", result);
        return;
      }
      console.log(result);
      setAllCategoryBtnData(result);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  const fetchpodcastKitInnerDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/podcaststaredkitinners');
      const result = await response.json();
      setPodcastStartedKitInnerData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchUnder20MinInnerDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/under20mmininners');
      const result = await response.json();
      setUnder20MinInnerData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchWebByAwardWinDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/webbyawardwinnerinners');
      const result = await response.json();
      setWebByAwardWinInnerData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchTrendingInnerDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/discovertrendinginner');
      const result = await response.json();
      setTrendingInnerData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchNewReleaseCarouselDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/NewReleaseCarouselData');
      const result = await response.json();
      setNewReleseCarousel(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchRanveerAllabadiaInnerDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/ranveerallahbadiainners');
      const result = await response.json();
      setRanveerAllabadiaInnerData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchRajShamaniInnerDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/rajshamaninners');
      const result = await response.json();
      setRajShamaniInnerData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchBhartiTvInnerDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/bhartitvinner');
      const result = await response.json();
      setBhartiTVInnerData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchRelivingSingleOUTERDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/relivingsingleouters');
      const result = await response.json();
      setRelivingSingleOUTER(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchranveerAllahbadiaOUTERDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/ranveerallahbadiaouter');
      const result = await response.json();
      setRanveerAllahbadiaOUTER(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchBhartiTvOuterDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/bhartitvouter');
      const result = await response.json();
      setBhartiTvOUTERData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchRajShamiApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/rajShamiouter');
      const result = await response.json();
      setRajShami(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchPodcastStartedApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/podcastStarted');
      const result = await response.json();
      setPodCasteStartedData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchNetworkHighLightApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/networkhighlight');
      const result = await response.json();
      setNetWorkHigh(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchUnder20MinApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/under20Min');
      const result = await response.json();
      setUnder20MinData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchGuestCuratorApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/guestcuratorcards');
      const result = await response.json();
      setGuestCurator(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchWebByAwardWinnerApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/webbyawards');
      const result = await response.json();
      setWebByAward(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchTrendingApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/trending/');
      const result = await response.json();
      setTrending(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchDiscoverCarDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/discoverCarousel');
      const result = await response.json();
      setDiscoverCaroData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchDiscoverBtnDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/discoverBtn');
      const result = await response.json();
      setDiscoverBtn(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchSidebarApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/sidebar');
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
    fetchRajShamaniInnerDataApi();
    fetchRanveerAllabadiaInnerDataApi();
    fetchNewReleaseCarouselDataApi();
    fetchTrendingInnerDataApi();
    fetchWebByAwardWinDataApi();
    fetchUnder20MinInnerDataApi();
    fetchpodcastKitInnerDataApi();
    fetchAllCategoryBtnDataApi();
  }, []);

  return (
    <AppContext.Provider value={{
      isSidebarVisible, setIsSidebarVisible,
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
      bhartiTVInnerData,
      rajShamaniInnerData,
      ranveerAllabadiaInnerData,
      newReleseCarousel,
      trendingInnerData,
      webByAwardWinInnerData,
      under20minInnerData,
      podcastStartedKitInnerData,
      allCategoryBtnData,
      btnCategory, setBtnCategory,
      fetchAllCategoryBtnDataApi
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
