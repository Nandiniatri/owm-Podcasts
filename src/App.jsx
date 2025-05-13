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
import { useContext, useEffect, useState } from 'react'
import RenderCategoryBtnData from './podcasts/allPodCasts/discover/RenderCategoryBtnData'
import OtherComp from './podcasts/allOtherComponent/OtherComp'
import { AppContext } from './contextApi/AppContext'
import Modal from './component/modal/Modal'


function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [accrodingToCategory, setAccrodingToCategory] = useState([]);
  const [selectedLabel, setSelectedLebel] = useState('');
  const { setIsModalOpen, isModalOpen } = useContext(AppContext);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };


  const handleLinkClick = (item) => {
    console.log(item);
    setSelectedLebel(item.label);
    if (item.category) {
      setAccrodingToCategory(item.category);
      setIsModalOpen(true);
    }

    setShowSidebar(false);
  }

  return (
    <>
      <UpperComponent toggleSidebar={toggleSidebar} />
      <div className='app-main-container'>
        <div className={`sideBar-div ${showSidebar ? 'show' : ''}`} >
          <Sidebar setShowSidebar={setShowSidebar} handleLinkClick={handleLinkClick} selectedLabel={selectedLabel} />
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
            <Route path='/discover/uander20Min' element={<Under20MinFileInner />} />
            <Route path='/discover/podcastKitInner' element={<PodcastKitInner />} />
            <Route path='/discover/:category' element={<RenderCategoryBtnData />} />
            {/* <Route path='/discover' element={<OtherComp />} /> */}
            {/* <Route path='/:category' element={<OtherComp />} /> */}
          </Routes>
        </div>


        <div className='otherComp-modal-div'>
          <Modal isOpen={isModalOpen}>
            {accrodingToCategory && <OtherComp category={accrodingToCategory} />}
          </Modal>
        </div>
      </div>
    </>
  )
}


export default App;
