
import TaskCard from './TaskCard';
import {TaskContext} from './context/taskContext'
import { useContext} from 'react'

function TaskList() {
  const {tasks} = useContext(TaskContext)
  
  if (tasks.length === 0) {
    return <h1 className='text-white text-lg text-center w-1/2'>NO HAY TAREAS GUARDADAS</h1>;
  }

  return (
    <div className='container mb-11'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />  
      ))}
    </div>
  );
}

export default TaskList;
