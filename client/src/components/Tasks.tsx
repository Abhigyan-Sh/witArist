import { MdDeleteForever } from 'react-icons/md'
import { BiPencil } from 'react-icons/bi'
import Priority from './Priority'

const Tasks = () => {
  return (
    <div className='h-fit w-full p-2.5 px-5 flex flex-row items-center justify-between bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
      <div className='w-4/6 flex flex-col items-start justify-start'>
        <p className='text-lg'>take bath</p>
        <p className='text-sm pl-2 text-slate-300'>with soap pls</p>
      </div>
      <div className='w-2/6 flex flex-row items-center justify-between'>
        <Priority />
        <div className='flex items-center justify-between gap-2'>
            <BiPencil className='text-slate-100 text-2xl cursor-pointer' />
            <MdDeleteForever className='text-red-600 text-2xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Tasks