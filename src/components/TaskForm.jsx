import React, { useEffect, useState } from 'react'

const values = {id: '', task: ''}

function TaskForm({tasks, setTasks}) {
   
    const [form, setForm] = useState(values);

    useEffect(() => {
        setForm(values)
    }, [tasks])

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        form.id = tasks.length + 1
        if (form.task === "") {
            return false;
          }
        setTasks([...tasks, form])

    }

  return (
    <div>
        <form>
        <input
        name='task'
        placeholder='What needs to be done?'
        value={form.task}
        onChange={onChangeInput}
        maxLength={100}
        />
        <button className='addButton' onClick={onSubmit}>Add Task</button>
        </form>
    </div>
    
  )
}

export default TaskForm