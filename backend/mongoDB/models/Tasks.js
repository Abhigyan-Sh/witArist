import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String, 
      required: true, 
      unique: true, 
      trim: true
    },
    description: String,
    priority: { 
      type: String, 
      default: 'low', 
      enum: ['low', 'moderate', 'high'], 
      trim: true
    },
    category: String, // criteria for filtering feature
  }, 
  { 
    timestamps: true 
  }
)

const Tasks = mongoose.model('tasks', taskSchema)
export { Tasks }