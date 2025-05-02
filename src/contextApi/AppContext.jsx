import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState([]);
  const [discoverBtn, setDiscoverBtn] = useState([]);
  const [discoverCaroData, setDiscoverCaroData] = useState([]);

  // const fetchDiscoverBtnDataApi = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5173/api/podcasts');
  //     console.log(response);

  //     const result = await response.json();
  //     console.log(result);

  //     setDiscoverBtn(result);
  //   } catch (error) {
  //     console.error("Error fetching sidebar data:", error);
  //   }
  // };

  const fetchDiscoverCarDataApi = async () => {
    try {
      const response = await fetch('/data/discoverCarousalData.json');
      // console.log(response);
      const result = await response.json();
      // console.log(result);
      setDiscoverCaroData(result);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  };


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
    fetchDiscoverCarDataApi();
  }, []);

  return (
    <AppContext.Provider value={{
      sidebar,
      discoverBtn,
      discoverCaroData
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
