import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllPodcaste from './podcasts/allPodCasts/AllPodcaste'
import Header from './podcasts/Header/Header'
import Sidebar from './podcasts/sidebar/Sidebar'
import NewRelease from './podcasts/new_Release/NewRelease'
import BhartiTvInner from './podcasts/new_Release/bhartiTv/BhartiTVInner'
import RajShamaniInnerFile from './podcasts/new_Release/rajShamani/rajShamaniInnerFile/RajShamaniInnerLinkFile'

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
            <Route path='/new-releases/RajShamani' element={<RajShamaniInnerFile />} />
            <Route path="/new-releases/bhartiTV" element={<BhartiTvInner />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
