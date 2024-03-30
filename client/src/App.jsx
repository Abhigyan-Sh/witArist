import { useEffect, useState } from 'react'
// import Navbar from '@components/Navbar.tsx'
import Navbar from './components/layouts/Navbar.jsx'
import StatusBar from './components/widgets/StatusBar.jsx'
import NewTask from './components/widgets/NewOrUpdatedTask.jsx'
import Tasks from './components/widgets/Tasks.jsx'
import axios from './axios.js'

function App() {
  const [ tasks, setTasks ] = useState([])
  const [ updateTask, setUpdateTask ] = useState({})

  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const response = await axios.get('/')
        setTasks(response.data.data)
      } catch(error) {
        throw new Error(error)
      }
    }
    fetchAllTasks()
  }, [])
  return (
    <div className='w-full min-h-screen bg-[#05081c]'>
      <Navbar />
      <div className='mx-auto h-full w-full md:w-8/12 flex flex-col md:flex-row md:justify-between md:items-start text-slate-100 mt-20 gap-12'>
        <div className='mx-auto w-11/12 md:w-6/12'>
          <StatusBar 
            selectedCategories={selectedCategories} 
            setSelectedCategories={setSelectedCategories}
          />
          <NewTask 
            tasks={tasks} 
            setTasks={setTasks} 
            updateTask={updateTask} 
            setUpdateTask={setUpdateTask} 
          />
        </div>
        <div className='mx-auto w-11/12 md:w-6/12'>
          <Tasks 
            tasks={tasks} 
            setTasks={setTasks} 
            setUpdateTask={setUpdateTask} 
            selectedCategories={selectedCategories}
          />
        </div>
      </div>
    </div>
  )
}

export default App