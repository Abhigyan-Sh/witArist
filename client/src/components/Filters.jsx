import { isValidCategory, categories } from '../utils/categories.js'

const Filters = ({ selectedCategories, setSelectedCategories }) => {
  const handleCategoryChange = (category) => {
    if (isValidCategory(category)) {
      setSelectedCategories((prevSelectedCategories) => {
        if (prevSelectedCategories.includes(category)) {
          // if selected same category again, remote it
          return prevSelectedCategories.filter((p) => p !== category) 
        } else {
          // otherwise, add it to the selected category
          return [...prevSelectedCategories, category]
        }
      })
    }
  }
  return (
    <div className='w-full flex flex-wrap'>
      {categories.map((category, index) => (
        <div key={index} className='flex gap-1 mr-2'>
          <input 
            id={category}
            type='checkbox'
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  )
}

export default Filters