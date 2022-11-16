//import './App.css'

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Header from './Header'

function App() {

  return (
    <>
      {/* Header */}
      <Header />
      <div className="lg:flex">
        <TaskForm />
        
        <TaskList/>
      </div>
      
    </>
  );
}

export default App;
