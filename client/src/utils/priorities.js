export const priorities = [
  'high', 
  'moderate', 
  'low'
]

export const isValidPriority = (priority) => 
{
  return priorities.includes(priority)
}