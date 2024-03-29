import express from 'express'
import { Tasks } from '../mongoDB/models/Tasks.js'
import { isValidPriority } from '../utils/isValidPriority.js'

const router = express.Router()

router.patch('/:id', async (req, res) => {
  try {
    const { id : _id } = req.params
    const toUpdate = req.body

    // check for priority
    if(!isValidPriority(toUpdate.priority)) {
      return res.status(400).json({ 
        statusCode: 400, 
        error: 'Bad Request :crying_cat_face:' 
      })
    }
    const updatedTask = await Tasks.findByIdAndUpdate(
      _id, 
      toUpdate, 
      { new: true }
    )
    res.status(200).json({ statusCode: 200, data: updatedTask })
  } catch (error) {
    res.status(500).json({ statusCode: 500, error: 'Internal Server Error !' })
  }
})

export default router