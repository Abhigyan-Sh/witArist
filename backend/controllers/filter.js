import express from 'express'
import { Tasks } from '../mongoDB/models/Tasks.js'
import { isEmptyObject } from '../utils/isEmptyObject.js'
import { isValidPriority } from '../utils/isValidPriority.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { 
      updatedAt : _updatedAt, 
      priority : _priority, 
      category: _category
    } = req.query

    let filters = {}
    
    /* populate filters object based on user selection */ 
    if (_updatedAt) {
      filters.updatedAt = { $eq: new Date(_updatedAt) }
    }
    if (_priority) {
      if(isValidPriority(_priority)) {
        filters.priority = _priority
      } else {
        return res.status(400).json({ 
          statusCode: 400, 
          error: 'Bad Request :crying_cat_face:'
        })
      }
    }
    if (_category) {
      filters.category = _category
    }

    // whether filters present ?
    if(isEmptyObject(filters)) {
      return res.status(400).json({ 
        statusCode: 400, 
        error: 'Bad Request :crying_cat_face:'
      })
    }
    const tasks = await Tasks.find(filters)
    res.status(200).json({ statusCode: 200, data: tasks })
  } catch (error) {
    res.status(500).json({ statusCode: 500, error: 'Internal Server Error !' })
  }
})

export default router