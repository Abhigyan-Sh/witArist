import { useEffect, useRef, useState } from 'react'
import { MdExposurePlus1 } from 'react-icons/md'
import DropdownFilter from '../elements/DropdownFilter.jsx'
import CategoryBadge from '../elements/CategoryBadge.jsx'
import { categories } from '../../utils/categories.js'
import { priorities } from '../../utils/priorities.js'
import { isValidPriority } from '../../utils/priorities.js'
import { sortPriority } from '../../utils/sortPriority.js'
import axios from '../../axios.js'

const NewOrUpdatedTask = ({ tasks, setTasks, updateTask, setUpdateTask }) => {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const [ addCategory, setAddCategory ] = useState('')
  const [ priority, setPriority ] = useState('low')

  const handleCategory = (_category) => {
    if(addCategory === _category) {
      setAddCategory('')
      return 
    }
    setAddCategory(_category)
  }

  const handlePriority = (_priority) => {
    if(isValidPriority(_priority)) {
      setPriority(_priority)
    }
  }
  const addOrUpdateTask = async () => {
    try {
      let newOrUpdatedTask = {
        title: titleRef.current.value, 
        description: descriptionRef.current.value, 
        category: addCategory, 
        priority
      }
      // whether title and priority exists ??
      if(!newOrUpdatedTask.title || !newOrUpdatedTask.priority) return

      // which operation to perform, add task or update task ??
      let response, ordered_tasks
      if(Object.keys(updateTask).length === 0) {
        // perform the add task operation
        response = await axios.post('/create', newOrUpdatedTask)
        const newTask = response.data.data
        ordered_tasks = sortPriority([newTask, ...tasks])
      } else {
        response = await axios.patch(`/update/${updateTask._id}`, newOrUpdatedTask)
        const updatedTask = response.data.data
        ordered_tasks = tasks.filter((task) => (
          task._id !== updatedTask._id
        ))
        ordered_tasks = sortPriority([updatedTask, ...ordered_tasks])
      }
      setTasks(ordered_tasks)
      
      // clean up / empty the fields
      titleRef.current.value = ''
      descriptionRef.current.value = ''
      setAddCategory('')
      setPriority('low')
      setUpdateTask({})
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    if(Object.keys(updateTask).length === 0) return
    /* populate fields with values of task to be updated */
    titleRef.current.value = updateTask.title
    descriptionRef.current.value = updateTask.description
    setAddCategory(updateTask.category)
    setPriority(updateTask.priority)
  }, [updateTask])
  return (
    <div className='flex justify-between items-center my-8 gap-4 text-slate-100 mx-2'>
      <div className='flex flex-col w-full p-4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-3xl'>
      
        {/* title & add task button */}
        <div className='flex flex-row justify-between items-center gap-4 mb-4'>
          <input 
            ref={titleRef}
            type='text' 
            className='bg-[#282a33] text-md rounded-2xl block w-full p-3 tracking-wider px-5' 
            placeholder='title..' 
            required 
          />
          <button 
            onClick={addOrUpdateTask}
            className='p-2.5 bg-[#FF5631] rounded-2xl'>
            <MdExposurePlus1 className='font-extrabold text-2xl text-gray-800' />
          </button>
        </div>
  
        {/* priority && description */}
        <div className='flex flex-row justify-between items-center gap-4 mb-4'>
          <DropdownFilter 
            filter={priority}
            options={priorities}
            onClick={handlePriority} 
          />
          <input 
            ref={descriptionRef}
            type='text' 
            className='bg-[#282a33] text-md rounded-2xl block w-full p-3 tracking-wider px-5' 
            placeholder='description..' 
            required 
          />
        </div>
        
        {/* categories */}
        <div className='flex flex-row flex-wrap'>
          {categories.map((category, index) => (
            <CategoryBadge 
              key = {index}
              index = {index} 
              choosenCategory={addCategory}
              text = {category} 
              key_prop = {category + index.toString()}
              onClick = {handleCategory}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewOrUpdatedTask