import { useState, useEffect } from "react";
import { createContext } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [editMode, setEditMode] = useState(false);

  const [saveId, setSaveId] = useState({});

  const [task, setTask] = useState({name:"", description:""});

  const [tasks, setTasks] = useState([]); 
   
  useEffect(() => {
    setTasks(data);
  }, []);
 
  const createTask = ()=>{    
    setTasks([...tasks, {id : +new Date(), ...task}]);
    setTask({name:"", description:""})    
  }

  const editTask = (theTask) =>{    
    setEditMode(true);
    setTask({...task, name: theTask.name, description: theTask.description});
    setSaveId(theTask.id);
  }

  const saveTask = (e)=>{
    e.preventDefault();
    const editTasks = tasks.map(item => item.id === saveId ? {id: saveId, name : task.name, description : task.description} : item);
    setTasks(editTasks);
    setTask({name:"", description:""})
    setEditMode(false);
    setSaveId('');
  }

  const deleteTask = (id)=>{
    setTasks(tasks.filter(item=>item.id !== id))
  }
  return (
    <TaskContext.Provider value={{
      editMode,
      task,
      setTask,
      tasks,
      setTasks,
      createTask,
      editTask,
      saveTask,
      deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
