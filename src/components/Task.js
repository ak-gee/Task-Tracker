import {FaRegTrashAlt} from 'react-icons/fa'
const Task = ({task,onDelete,onToggle}) => {
   
  return (
    <div className = 'task' onDoubleClick={() => onToggle(task.id)}>
       <h3 >{task.desc} <FaRegTrashAlt style = {{color:'blue'}} onClick = {() => {onDelete(task.id)}}/></h3> 
        {task.reminder?
        
            <div>
            
        <p style ={{color: "grey",backgroundColor: 'rgb(146, 250, 98)'}}>{task.day}</p>
    </div>
:
<div>

        <p style ={{color: "black",backgroundColor:'white'}}>{task.day}</p>
        </div>

        


        }
        
        </div>
  )
}

export default Task