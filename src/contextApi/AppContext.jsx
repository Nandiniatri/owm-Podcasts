import { createContext, useEffect, useState } from "react";
import LocalDiscoverBtnData from "../fixtures/discoverBtnData";
import LocalSidebar from "../fixtures/sidebar";
import LocalDiscoverCarousel from "../fixtures/discoverCarousalData";
import LocalDiscoverTrendingApi from "../fixtures/trending";
import LocalWebAwardWinnerApi from "../fixtures/webByAwardWinners";
import LocalGuestCuratorCardApi from "../fixtures/guestCuratorCard";
import LocalUnder20ApiData from "../fixtures/under20Minutes";
import LocalNetworkHighLight from "../fixtures/networkHighlight";
import LocalPodcastStaredKit from "../fixtures/podcastStarterKit";


export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [showData, setShowData] = useState([]);

  const [sidebar, setSidebar] = useState(() => {
    const cached = sessionStorage.getItem("sidebar");
    return cached ? JSON.parse(cached) : LocalSidebar;
  });

  const [discoverBtn, setDiscoverBtn] = useState(() => {
    const cached = sessionStorage.getItem("discoverBtn");
    return cached ? JSON.parse(cached) : LocalDiscoverBtnData;
  });

  const [discoverCaroData, setDiscoverCaroData] = useState(() => {
    const cached = sessionStorage.getItem("discoverCaroData");
    return cached ? JSON.parse(cached) : LocalDiscoverCarousel;
  });

  const [trending, setTrending] = useState(() => {
    const cached = sessionStorage.getItem("trending");
    return cached ? JSON.parse(cached) : LocalDiscoverTrendingApi;
  });

  const [webByAward, setWebByAward] = useState(() => {
    const cached = sessionStorage.getItem("webByAward");
    return cached ? JSON.parse(cached) : LocalWebAwardWinnerApi;
  });

  const [guestCurator, setGuestCurator] = useState(() => {
    const cached = sessionStorage.getItem("guestCurator");
    return cached ? JSON.parse(cached) : LocalGuestCuratorCardApi;
  });

  const [under20MinData, setUnder20MinData] = useState(() => {
    const cached = sessionStorage.getItem("under20MinData");
    return cached ? JSON.parse(cached) : LocalUnder20ApiData;  
  });

  const [netWorkHigh, setNetWorkHigh] = useState(() => {
    const cached = sessionStorage.getItem("netWorkHigh");   
    return cached ? JSON.parse(cached) : LocalNetworkHighLight;
  });

  const [podcasteStartedData, setPodCasteStartedData] = useState(() => {
    const cached = sessionStorage.getItem("netWorkHigh");
    return cached ? JSON.parse(cached) : LocalPodcastStaredKit;
  });

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchingData, setSearchingData] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

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
      if (Array.isArray(result) && result.length > 0) {
        setPodCasteStartedData(result);
        sessionStorage.setItem("sidebar", JSON.stringify(result));
      }
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchNetworkHighLightApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/networkhighlight');
      const result = await response.json();
      if (Array.isArray(result) && result.length > 0) {
        setNetWorkHigh(result);
        sessionStorage.setItem("sidebar", JSON.stringify(result));
      }
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchUnder20MinApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/under20Min');
      const result = await response.json();
      if (Array.isArray(result) && result.length > 0) {
        setUnder20MinData(result);
        sessionStorage.setItem("sidebar", JSON.stringify(result));
      }
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


  const fetchGuestCuratorApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/guestcuratorcards');
      const result = await response.json();
      if (Array.isArray(result) && result.length > 0) {
        setGuestCurator(result);
        sessionStorage.setItem("sidebar", JSON.stringify(result));
      }
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchWebByAwardWinnerApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/webbyawards');
      const result = await response.json();
      if (Array.isArray(result) && result.length > 0) {
        setWebByAward(result);
        sessionStorage.setItem("sidebar", JSON.stringify(result));
      }
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  const fetchTrendingApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/trending/');
      const result = await response.json();
      setDiscoverCaroData(result);
      if (Array.isArray(result) && result.length > 0) {
        setTrending(result);
        sessionStorage.setItem("sidebar", JSON.stringify(result));
      }
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };



  const fetchDiscoverCarDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/discoverCarousel');
      const result = await response.json();
      setDiscoverCaroData(result);
      if (Array.isArray(result) && result.length > 0) {
        setDiscoverCaroData(result);
        sessionStorage.setItem("sidebar", JSON.stringify(result));
      }
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };



  const fetchDiscoverBtnDataApi = async () => {
    try {
      const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/discoverBtn');
      const result = await response.json();
      if (Array.isArray(result) && result.length > 0) {
        setDiscoverBtn(result);
        sessionStorage.setItem("sidebar", JSON.stringify(result));
      }
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };

  useEffect(() => {
    const fetchSidebarApi = async () => {
      try {
        const response = await fetch("https://podcasts-backend-j9ty.onrender.com/api/sidebar");
        const result = await response.json();
        console.log("Fetched backend sidebar data:", result);

        if (Array.isArray(result) && result.length > 0) {
          setSidebar(result);
          sessionStorage.setItem("sidebar", JSON.stringify(result));
        }
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
      }
    };

    fetchSidebarApi();
  }, []);


  useEffect(() => {
    // fetchSidebarApi();
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
      fetchAllCategoryBtnDataApi,
      isModalOpen, setIsModalOpen,
      searchingData, setSearchingData,
      isSearchActive, setIsSearchActive
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
