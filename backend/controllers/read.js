import express from 'express'
import { Tasks } from '../mongoDB/models/Tasks.js'
// import sortPriority from '../utils/sortPriority'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    // @dev:::RE-ORDER on basis of most-prior
    const highPriorityTasks = await Tasks
    .find({ priority: 'high' })
    .sort({ createdAt: -1 })

    const moderatePriorityTasks = await Tasks
    .find({ priority: 'moderate' })
    .sort({ createdAt: -1 })

    const lowPriorityTasks = await Tasks
    .find({ priority: 'low' })
    .sort({ createdAt: -1 })
    
    // @dev:::[] will be truthy but null/undefined will be falsy
    if(!highPriorityTasks || !moderatePriorityTasks || !lowPriorityTasks) {
      res.status(500).json({ statusCode: 500, error: 'Internal Server Error !' })
    }
    
    // @dev:::RE-ORDER on basis of PRIORITY
    res.status(200).json({ 
      statusCode: 200, 
      data: [...highPriorityTasks, ...moderatePriorityTasks, ...lowPriorityTasks] 
    })
  } catch (error) {
    res.status(500).json({ statusCode: 500, error: 'Internal Server Error !' })
  }
})

export default router