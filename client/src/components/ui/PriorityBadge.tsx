

const PriorityBadge = () => {
  const prior = 'high'
  const priorityIndicator = {
    low: 'text-emerald-800 bg-emerald-300', 
    moderate: 'text-orange-600 bg-orange-300', 
    high: 'text-red-800 bg-red-300'
  }
  return (
    <div className={`${priorityIndicator[prior]} rounded-full px-2 font-bold`}>
      <p>{prior}</p>
    </div>
  )
}

export default PriorityBadge