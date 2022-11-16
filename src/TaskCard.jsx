import {useContext} from "react";
import { TaskContext} from './context/taskContext';
/*
const deleteTask=(id)=>{
    console.log("deleteTask: ",id)
}*/

function TaskCard({ task }) {
    const { editTask, deleteTask}=useContext(TaskContext);
    return (
    <div className="container mx-2 mb-4 rounded-sm bg-white w-11/12 px-1.5">
      <h2 className=""><span className="text-lg text-black font-semibold mr-3">Nombre tarea:</span>{task.name}</h2>
      <h3><span className="text-lg text-black font-semibold mr-3">Descripción:</span>  {task.description}</h3>
      <div className="mt-4 p-4">
        <button className="text-black font-normal rounded-md w-24 py-1 bg-blue-500 hover:bg-blue-600 mr-3"
        onClick={()=>editTask(task)}> Editar</button>
        <button className="text-black font-normal rounded-md w-24 py-1 bg-red-400 hover:bg-red-500"
        onClick={()=>deleteTask(task.id)}> Eliminar</button>
      </div>      
    </div>
  );
}

export default TaskCard;
