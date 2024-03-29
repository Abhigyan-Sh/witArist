export const sortPriority = (tasks) => 
{
  tasks.sort((a, b) => {
    const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 }
    return priorityOrder[b.priority] - priorityOrder[a.priority]
  })
}