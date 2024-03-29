import express from 'express'
import { Tasks } from '../mongoDB/models/Tasks.js'

const router = express.Router()

router.delete('/:id', async (req, res) => {
  try {
    const { id : _id } = req.params
    await Tasks.findByIdAndDelete(_id)
    res.status(200).json({ 
      statusCode: 200, 
      data: 'Task deleted successfully'
    })
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: 'Internal Server Error !' })
  }
})

export default router