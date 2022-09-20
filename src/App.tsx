import React, {FC, useState, ChangeEvent} from 'react';
import './App.css';

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [todos, setTodos] = useState([]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    }

    return (
    <div className="App">
      <div className="header">
          <div className="inputContainer">
              <input placeholder="Task" type="text" onChange={handleInputChange} />
              <input placeholder="Comment " type="text" onChange={handleInputChange} />
          </div>
          <button> Add a new task </button>
      </div>
      <div className="todos"></div>

    </div>
  );
}

export default App;
