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


function App() {

  return (
    <>
      <UpperComponent />
      <div className='sidebar-app-main-container'>
        <div className='sideBar-div'>
          <Sidebar />
        </div>

        <div className='AllPodcaste-div'>
          <Routes>
            <Route path='*' element={<AllPodcaste />} />
            <Route path='/discover' element={<AllPodcaste />} />
            <Route path='/new-releases' element={<NewRelease />} />
            <Route path='/new-releases/RajShamani' element={<RajShamaniInnerFile />} />
            <Route path="/new-releases/bhartiTV" element={<BhartiTvInner />} />
            <Route path="/new-releases/RanveerAllahbadia" element={<RanveerAllabadiaInnerFile />} />
            <Route path="/new-releases/ReLivingSingle" element={<ReLivingSingleInnerFile />} />
            <Route path="/discover/trending" element={<TrendingInnerFile />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
