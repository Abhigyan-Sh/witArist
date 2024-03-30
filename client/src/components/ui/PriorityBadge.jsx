
const PriorityBadge = ({ priority }) => {
  const priorityIndicator = {
    low: 'text-emerald-800 bg-emerald-300', 
    moderate: 'text-orange-600 bg-orange-300', 
    high: 'text-red-800 bg-red-300'
  }
  return (
    <div className={`${priorityIndicator[priority]} rounded-full px-2 font-bold`}>
      <p className='text-sm'>{priority}</p>
    </div>
  )
}

export default PriorityBadge