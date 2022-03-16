
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

function App() {
  

    const [tasks,setTasks] = useState ([
        // {
        //     id: 1,
        //     desc: '25 Cartwheels',
        //     day :' In 2 seconds on 15 March 2022',
        //     reminder : false,
    
    
        // },
        // {
        //     id: 2,
        //     desc: 'Watch channel 25000 times',
        //     day :' at 3 pm on Wednesday 16 March 2022',
        //     reminder : false,
    
    
        // },
        // {
        //     id: 3,
        //     desc: 'Sing song',
        //     day :' at 5 pm on Tuesday 15 March 2022',
        //     reminder : false,
    
    
        // }
    
    ])

    const [showAdd,setShowadd] = useState(false)
   
    

    const deleteTask = (id)=> {
      console.log(id)
      setTasks(tasks.filter((task) => (task.id!==id))
)
    
    }
    const addTask = (task) => {
      const id = Math.floor(Math.random() *10000) +1
      const newTask = {id,...task}
      setTasks([...tasks,newTask])
     console.log(task)

    }

    const toggleReminder = (id) =>{
      setTasks(tasks.map((task) =>
        (task.id === id)?{...task,reminder: !task.reminder}: task
      )
      )

    }
  return (
    <div className="container">
      <Header onAdd = {() => setShowadd(!showAdd)
      } showAdd= {showAdd}/>
      {showAdd && <AddTask onAdd = {addTask}/>}
      {tasks.length>0?<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />:'No Tasks to do'}

    
     
     
    </div>
  );
}

export default App;
