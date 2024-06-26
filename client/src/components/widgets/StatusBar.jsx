import Filters from '../Filters.jsx'

const StatusBar = ({ selectedCategories, setSelectedCategories }) => {
  return (
    <div className='h-[200px] w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-3xl flex items-center'>
      <div className='w-full flex justify-between items-center py-4 px-8'>
        <div className='w-4/6'>
          <p className='text-2xl'>ToDo List</p>
          <p className='text-lg font-light tracking-widest mb-4'>keep it up</p>
          <Filters 
            selectedCategories={selectedCategories} 
            setSelectedCategories={setSelectedCategories} 
          />
        </div>
        <div className='h-28 w-28 rounded-full bg-[#FF5631] flex items-center justify-center'>
          <p className='text-gray-800 text-3xl font-extrabold'> 1/3 </p>
        </div>
      </div>
    </div>
  )
}

export default StatusBar