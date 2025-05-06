import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllPodcaste from './podcasts/allPodCasts/AllPodcaste'
import Header from './podcasts/Header/Header'
import Sidebar from './podcasts/sidebar/Sidebar'
import NewRelease from './podcasts/new_Release/NewRelease'
import RajShamani from './podcasts/new_Release/rajShamani/RajShamaniOuter'
import RajShamaniInnerLinkFile from './podcasts/new_Release/rajShamani/rajShamaniInnerFile/RajShamaniInnerLinkFile'
import BhartiTvInner from './podcasts/new_Release/bhartiTv/BhartiTVInner'

function App() {

  return (
    <>
      <Header />
      <div className='sidebar-app-main-container'>
        <div className='sideBar-div'>
          <Sidebar />
        </div>

        <div className='AllPodcaste-div'>
          <Routes>
            <Route path='*' element={<AllPodcaste />} />
            <Route path='/discover' element={<AllPodcaste />} />
            <Route path='/new-releases' element={<NewRelease />} />
            <Route path='/new-releases/RajShamani' element={<RajShamaniInnerLinkFile />} />
            <Route path="/new-releases/bhartiTV" element={<BhartiTvInner />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
