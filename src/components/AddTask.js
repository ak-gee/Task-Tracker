import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [desc,setDesc] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!desc){
            alert('Add a task')
            return
        }

        onAdd({desc,day,reminder})
       
        setDesc('')
        setDay('')
        setReminder(false)
    }

  return (

    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder="Add Task to do "
            value = {desc}
            onChange = {(e) => setDesc(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Day and Time</label>
            <input type='text' placeholder="Add when to do "
            value = {day}
            onChange = {(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'
            value = {reminder}
            onChange = {(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type = "submit" value= 'Save Task' className="btn btn-block"/>
    </form>
  )
}

export default AddTask