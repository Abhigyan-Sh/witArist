import express from 'express'
import { Tasks } from '../mongoDB/models/Tasks.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { body } = req

    // create task
    const task = new Tasks({
      title: body.title,
      description: body.description,
      priority: body.priority,
      category: body.category,
    })

    // whether title present ??
    if(!task.title) {
      return res.status(400).json({ 
        statusCode: 400, 
        error: 'Bad Request :crying_cat_face:' 
      })
    }

    // save task
    const newTask = await task.save()
    // whether newTask present ??
    if(!newTask) return res.status(500).json({ 
      statusCode: 500, 
      error: 'Internal Server Error !' 
    })
    res.status(201).json({ statusCode: 201, data: newTask })
  } catch (error) {
    res.status(500).json({ statusCode: 500, error: 'Internal Server Error !' })
  }
})

export default router