export const sortPriority = (tasks) => {
  // priority order mapping for sorting in later steps
  const priorityOrder = { 'high': 3, 'moderate': 2, 'low': 1 }

  // sorting 'tasks' array based on priority
  tasks.sort((a, b) => {
    // now if both these tasks have same priority order then preserve their original order
    if (a.priority === b.priority) {
      return tasks.indexOf(a) - tasks.indexOf(b)
    }
    // otherwise, sort them
    return priorityOrder[b.priority] - priorityOrder[a.priority]
  })
  return tasks
}