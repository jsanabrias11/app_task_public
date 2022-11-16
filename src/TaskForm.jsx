import { useContext } from "react";
import { TaskContext} from './context/taskContext';

function TaskForm() {
    
  const { editMode, saveTask, task, setTask, createTask } = useContext(TaskContext);
    
  
  const handleChange = (e) => {
    
    const newTask = {...task, [e.target.name]:e.target.value }

    setTask(newTask)
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    createTask(task)    
  }
  return (
    <div className="container flex justify-center mb-8 lg:h-64 lg:min-h-0">      
      <form className="grid gap-y-3 grid-cols-1 rounded-md bg-slate-300 p-2  w-64" 
            onSubmit={ editMode ? saveTask : (e)=> handleSubmit(e)} 
      >
        <input
          className="p-1 bg-white rounded-sm"
          name="name"
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Nombre de la tarea"
          value={task.name}
        />
        <textarea
          className="p-1 bg-white rounded-sm"
          name="description"
          onChange={(e) => handleChange(e)}
          placeholder="Descripcion de la tarea"
          cols="30"
          rows="4"
          value={task.description}
        ></textarea>
        <button 
          className={editMode ? "text-black font-normal rounded-md w-36 py-2  bg-blue-500 hover:bg-blue-600" :
                                "text-black font-normal rounded-md w-36 py-2 bg-cyan-800 hover:bg-cyan-700"
                    }
          type="submit">{editMode ? 'Guardar tarea' : 'Crear tarea'} 
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
