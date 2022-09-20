import React, {FC, useState, ChangeEvent} from 'react';
import './App.css';
import {TaskType} from "./types/TaskType";
import TaskCard from "./components/TaskCard";

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [todos, setTodos] = useState<TaskType[]>([]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        switch (event.target.name){
            case "task":
                setTask(event.target.value);
                break;
            case "comment":
                setComment(event.target.value);
                break;
        }
    }

    const addNewTask = (): void => {
        const newTask = {taskName: task, comment: comment};
        setTodos([...todos, newTask]);
        setTask(""); //to delete the text after adding it
        setComment("");
        console.log(todos)
    }

    const deleteTask = (taskToDelete: string): void => {
        setTodos(todos.filter( (task) => {
            return task.taskName !== taskToDelete;
        }))
    }

    return (
    <div className="App">
      <div className="header">
          <div className="inputContainer">
              <input placeholder="Task" type="text" onChange={handleInputChange} name="task" value={task}/>
              <input placeholder="Comment " type="text" onChange={handleInputChange} name="comment" value={comment} />
          </div>
          <button onClick={addNewTask}> Add a new task </button>
      </div>
      <div className="todos">
          {todos.map( (task:TaskType)=>{
              return <TaskCard task={task} key={task.taskName}/>;
          } )}
      </div>

    </div>
  );
}

export default App;
