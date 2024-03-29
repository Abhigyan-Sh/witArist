// import Navbar from '@components/Navbar.tsx'
import Navbar from './components/Navbar.tsx'
import StatusBar from './components/StatusBar.tsx'
import InputBar from './components/Input.tsx'
import Tasks from './components/Tasks.tsx'

function App() {

  return (
    <div className='w-full h-screen bg-[#05081c]'>
      <Navbar />
      <div className='flex flex-col h-full justify-start items-center text-slate-100 mt-20'>
        <div className='w-2/6 '>
          <StatusBar />
          <InputBar />
          <Tasks />
        </div>
      </div>
    </div>
  )
}

export default App