import React, {FC, useState, ChangeEvent} from 'react';
import './App.css';

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [todos, setTodos] = useState([]);

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

    return (
    <div className="App">
      <div className="header">
          <div className="inputContainer">
              <input placeholder="Task" type="text" onChange={handleInputChange} name="task"/>
              <input placeholder="Comment " type="text" onChange={handleInputChange} name="comment" />
          </div>
          <button> Add a new task </button>
      </div>
      <div className="todos"></div>

    </div>
  );
}

export default App;
