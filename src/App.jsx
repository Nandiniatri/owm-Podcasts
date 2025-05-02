import './App.css'
import AllPodcaste from './podcasts/allPodCasts/AllPodcaste'
import Header from './podcasts/Header/Header'
import Sidebar from './podcasts/sidebar/Sidebar'

function App() {

  return (
    <>
      <Header />
      <div className='sidebar-app-main-container'>
        <Sidebar />
        <AllPodcaste />
      </div>
    </>
  )
}

export default App
