import './App.css'
import AllPodcaste from './podcasts/allPodCasts/AllPodcaste'
import Header from './podcasts/Header/Header'
import Sidebar from './podcasts/sidebar/Sidebar'

function App() {

  return (
    <>
      <Header />
      <div className='sidebar-app-main-container'>
        <div className='sideBar-div'>
          <Sidebar />
        </div>
        <div className='AllPodcaste-div'>
          <AllPodcaste />
        </div>
      </div>
    </>
  )
}

export default App
