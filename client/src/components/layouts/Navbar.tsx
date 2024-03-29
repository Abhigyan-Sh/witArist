import { IconContext } from 'react-icons'
import { IoExit } from 'react-icons/io5'
import Avatar from '../ui/Avatar'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center pt-2 px-4 sm:pt-8 sm:px-12 md:pt-12 md:px-32 '>
      <p className='text-slate-100 text-bold text-xl tracking-wider'>
        witArist
      </p>
      <div className='flex justify-between items-center gap-2 md:gap-4'>
        <IconContext.Provider value={{ color: "white", size: "32px" }}>
          <IoExit className='text-slate-100' />
        </IconContext.Provider>
        <Avatar />
      </div>
    </div>
  )
}

export default Navbar