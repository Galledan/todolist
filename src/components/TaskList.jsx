import React from 'react'

function TaskList({ tasks, setTasks }) {
  
  
    const deleteTask = id => {
      const removeTask = tasks.filter(task => {
        return task.id !== id
      })
      setTasks(removeTask)
    }
  
    


  return (
    <div className='list'>
      <ul>
        {tasks.map((task, i) => (
          <div className='task'>
          <li id={task.id} key={i}>{task.task}
            </li>
            <button className='deleteButton' onClick={() => deleteTask(task.id)}>X</button>

          </div>
        ))}
      </ul>
    </div>
  )
}


export default TaskList