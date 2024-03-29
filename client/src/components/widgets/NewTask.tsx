import { MdExposurePlus1 } from 'react-icons/md'
import DropdownFilter from '../elements/DropdownFilter'
import CategoryBadge from '../elements/CategoryBadge'
import { categories } from '../../../utils/categories'

const NewTask = () => {
  const addCategory = () => {}
  return (
    <div className='flex justify-between items-center my-8 gap-4 text-slate-100 mx-2'>
      <div className='flex flex-col w-full p-4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-3xl'>
      
        {/* title & update task */}
        <div className='flex flex-row justify-between items-center gap-4 mb-4'>
          <input 
            type='text' 
            className='bg-[#282a33] text-md rounded-2xl block w-full p-3 tracking-wider px-5' 
            placeholder='title..' 
            required 
          />
          <button 
            className='p-2.5 bg-[#FF5631] rounded-2xl'>
            <MdExposurePlus1 className='font-extrabold text-2xl text-gray-800' />
          </button>
        </div>
  
        {/* priority && description */}
        <div className='flex flex-row justify-between items-center gap-4 mb-4'>
          <DropdownFilter filter='priority' />
          <input 
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
              index={index} 
              text= {category} 
              key_prop= {category + index.toString()}
              onClick={addCategory}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewTask