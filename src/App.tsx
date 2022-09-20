import React, {FC, useState} from 'react';
import './App.css';

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [todos, setTodos] = useState([]);

    return (
    <div className="App">
      <div className="header">
          <div className="inputContainer">
              <input placeholder="Task" type="text" />
              <input placeholder="Comment " type="text"  />
          </div>
          <button> Add a new task </button>
      </div>
      <div className="todos"></div>

    </div>
  );
}

export default App;
