import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllPodcaste from './podcasts/allPodCasts/AllPodcaste'
import Sidebar from './podcasts/sidebar/Sidebar'
import NewRelease from './podcasts/new_Release/NewRelease'
import BhartiTvInner from './podcasts/new_Release/bhartiTv/BhartiTVInner'
import RajShamaniInnerFile from './podcasts/new_Release/rajShamani/rajShamaniInnerFile/RajShamaniInnerLinkFile'
import RanveerAllabadiaInnerFile from './podcasts/new_Release/ranveerallahbadia/RanveerAllahbadiaInner'
import ReLivingSingleInnerFile from './podcasts/new_Release/reLivingSingleOuter/RelivingSingleInner'
import UpperComponent from './podcasts/topBar/Header'
import TrendingInnerFile from './podcasts/allPodCasts/trending/TrendingInnerFile'
import WebByAwardInner from './podcasts/allPodCasts/webbyAwardWinners2025/webByAwardWinnerInner'
import Under20MinFileInner from './podcasts/allPodCasts/under20Min/Under20MinInner'
import PodcastKitInner from './podcasts/allPodCasts/podcastStarted/PodcastStaredKitInner'
import { useState } from 'react'
import RenderCategoryBtnData from './podcasts/allPodCasts/discover/RenderCategoryBtnData'

 
function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <>
      <UpperComponent toggleSidebar={toggleSidebar} />
      <div className='app-main-container'>
        <div className={`sideBar-div ${showSidebar ? 'show' : ''}`} >
          <Sidebar />
        </div>

        <div className={`AllPodcaste-div ${showSidebar ? 'sidebar-open' : ''}`}>
          <Routes>
            <Route path='*' element={<AllPodcaste />} />
            <Route path='/discover' element={<AllPodcaste />} />
            <Route path='/new-releases' element={<NewRelease />} />
            <Route path='/new-releases/RajShamani' element={<RajShamaniInnerFile />} />
            <Route path="/new-releases/bhartiTV" element={<BhartiTvInner />} />
            <Route path="/new-releases/RanveerAllahbadia" element={<RanveerAllabadiaInnerFile />} />
            <Route path="/new-releases/ReLivingSingle" element={<ReLivingSingleInnerFile />} />
            <Route path="/discover/trending" element={<TrendingInnerFile />} />
            <Route path="/discover/webByAward" element={<WebByAwardInner />} />
            <Route path='/discover/under20Min' element={<Under20MinFileInner />} />
            <Route path='/discover/podcastKitInner' element={<PodcastKitInner />} />
            <Route path='/discover/:category' element={<RenderCategoryBtnData />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
