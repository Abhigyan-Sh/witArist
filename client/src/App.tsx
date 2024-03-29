// import Navbar from '@components/Navbar.tsx'
import Navbar from './components/layouts/Navbar.tsx'
import StatusBar from './components/widgets/StatusBar.tsx'
import NewTask from './components/widgets/NewTask.tsx'
import Tasks from './components/widgets/Tasks.tsx'

function App() {
  return (
    <div className='w-full h-screen bg-[#05081c]'>
      <Navbar />
      <div className='mx-auto h-full w-8/12 flex flex-row justify-between items-start text-slate-100 mt-20 gap-12'>
        <div className='w-6/12'>
          <StatusBar />
          <NewTask />
        </div>
        <div className='w-6/12'>
          <Tasks />
        </div>
      </div>
    </div>
  )
}

export default App