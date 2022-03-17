import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState(
    [
      { title: 'Apply for a job', isDone: false },
      { title: 'Do laundry', isDone: false },
      { title: 'Wash Dishes', isDone: true }
    ]
  )

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTodos = [...todos, { title: title, isDone: false }];
    newTodos.sort((a, b) => a.isDone - b.isDone);
    setTodos(newTodos);

    setTitle("");
  }

  const updateItem = (e,index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = e.target.checked;
    newTodos.sort((a, b) => a.isDone - b.isDone);
    setTodos(newTodos);
  }

  const deleteItem = (e,index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = e.target.checked;
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (

    <div className="App">
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" className="New-todo" placeholder='Do something' value={title} onChange={(e) => setTitle(e.target.value)} required />
      </form>
      <ul className="App-todos">
        {todos.map((x, i) =>
          <li key={i} className={(x.isDone ? "done" : "undone")}>
            <input type="checkbox" checked={x.isDone} onChange={(e) => updateItem(e,i)}/>
            <span>{x.title}</span>
            <a onClick={(e) => deleteItem(e,i)} className="App-delete" href="#">&times;</a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
