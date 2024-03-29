import { MdExposurePlus1 } from 'react-icons/md'

const Input = () => {
  return (
    <div className='flex justify-between items-center gap-4 my-8 text-slate-100 mx-2'>
      <input 
        type='text' 
        className='bg-[#282a33] text-md rounded-2xl block w-full p-3 tracking-wider px-5' 
        placeholder='add another task..' 
        required 
      />
      <button 
        className='p-2.5 bg-[#FF5631] rounded-2xl'>
          <MdExposurePlus1 className='font-extrabold text-2xl text-gray-800' />
      </button>
    </div>
  )
}

export default Input