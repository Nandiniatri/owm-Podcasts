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
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt obcaecati quas dolorem quisquam officia vero saepe, sapiente laboriosam vel ab assumenda natus aliquam ut tempora dolores suscipit, quis molestias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt obcaecati quas dolorem quisquam officia vero saepe, sapiente laboriosam vel ab assumenda natus aliquam ut tempora dolores suscipit, quis molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt obcaecati quas dolorem quisquam officia vero saepe, sapiente laboriosam vel ab assumenda natus aliquam ut tempora dolores suscipit, quis molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt obcaecati quas dolorem quisquam officia vero saepe, sapiente laboriosam vel ab assumenda natus aliquam ut tempora dolores suscipit, quis molestias.
          </h1>
        </div>
      </div>
    </>
  )
}

export default App
