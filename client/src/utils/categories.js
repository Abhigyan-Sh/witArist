export const categories = [
  'office', 
  'development', 
  'market', 
  'food', 
  'kitchen', 
  'money', 
  'travel', 
  'others'
]

export const isValidCategory = (category) => 
{
  return categories.includes(category)
}