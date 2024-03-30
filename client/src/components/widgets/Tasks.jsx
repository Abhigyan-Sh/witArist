import { useState, useEffect } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { BiPencil } from 'react-icons/bi'
import Priority from '../ui/PriorityBadge.jsx'
import axios from '../../axios.js'
import CategoryBadge from '../elements/CategoryBadge.jsx'

const Tasks = ({ 
  tasks, 
  setTasks, 
  setUpdateTask, 
  selectedCategories 
}) => {
  const [ filteredTasks, setFilteredTasks ] = useState([])
  
  const handleDelete = async (_id) => {
    const response = await axios.delete(`/deletion/${_id}`)
    if(response.data.statusCode === 200) {
      setTasks((prevState) => (
        prevState.filter(task => (task._id !== _id))
      ))
      setFilteredTasks((prevState) => (
        prevState.filter(task => (task._id !== _id))
      ))
    }
  }
  const handleUpdate = (filteredTask) => {
    setUpdateTask({...filteredTask})
  }
  
  useEffect(() => {
    if(!tasks || !tasks.length) return 
    setFilteredTasks(tasks)
  }, [tasks])

  useEffect(() => {
    if (!selectedCategories) return

    if(!selectedCategories.length) {
      setFilteredTasks(tasks)
      return
    }
    setFilteredTasks(() => (
      tasks.filter(
        task => selectedCategories.includes(task.category)
      )
    ))
  }, [selectedCategories])
  return (
    <>
      {filteredTasks.map((filteredTask, index) => (
        <div 
          key={index}
          className='h-fit w-full mb-5 p-2.5 px-5 flex flex-row items-center justify-between bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'
        >
          <div className='w-4/6 flex flex-col items-start justify-start'>
            <p className='text-lg capitalize'>{filteredTask.title}</p>
            <p className='text-sm pl-2 text-slate-300 capitalize'>{filteredTask.description}</p>
            {filteredTask.category && (
              <CategoryBadge 
                key = {filteredTask._id} 
                index = {Math.floor(Math.random() * 12)} 
                choosenCategory={filteredTask.category} 
                text = {filteredTask.category} 
                key_prop = {filteredTask._id} 
                onClick = {() => {}}
              />
            )}
          </div>
          <div className='w-2/6 flex flex-row items-center justify-between'>
            <Priority priority={filteredTask.priority} />
            <div className='flex items-center justify-between gap-2'>
              <BiPencil 
                onClick={() => handleUpdate(filteredTask)}
                className='text-slate-100 text-2xl cursor-pointer' />
              <MdDeleteForever 
                onClick={() => handleDelete(filteredTask._id)} 
                className='text-red-600 text-2xl cursor-pointer' />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Tasks