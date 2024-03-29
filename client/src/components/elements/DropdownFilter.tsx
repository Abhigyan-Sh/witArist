import { useState, useEffect, useRef } from 'react'

const DropdownFilter = ({ filter }) => {
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative inline-block text-left z-20' ref={dropdownRef}>
      <button 
        onClick={toggleDropdown} 
        type='button' 
        className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
        aria-haspopup='true'
        aria-expanded='true'
      >
        {filter}
        <svg className='-mr-1 ml-2 h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
          <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
          <div className='py-1' role='none'>
            {/* Option 1 */}
            <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' role='menuitem' onClick={() => console.log('Option 1 clicked')}>Option 1</button>
            {/* Option 2 */}
            <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' role='menuitem' onClick={() => console.log('Option 2 clicked')}>Option 2</button>
            {/* Option 3 */}
            <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' role='menuitem' onClick={() => console.log('Option 3 clicked')}>Option 3</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownFilter