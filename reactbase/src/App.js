import React, { lazy, Suspense, useEffect, useState } from 'react';
import TodoList from './ToDo/Todolist';
import Context from './context';
import Loader from './Loader';
import Modal from './Modal/modal';

const AddTodo = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(import('./ToDo/AddTodo'))
  }, 1000)
}))

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos);
        setLoading(false);
      })
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  };

  function removeTodo(id) {
    setTodos(todos.filter((todo) => {
      todo.id !== id
    }))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}} >
   <div className="wrapper">
     <h1>React tutorial</h1>
    <Modal /> 
    <Suspense fallback={<Loader />}>
      <AddTodo onCreate={addTodo}/>
    </Suspense>
    {loading && <Loader />}
    {todos.length
    ? <TodoList todos={todos} onToggleHandler={toggleTodo} />
    : (
    loading ? null : <p>No todos!</p>)} 
   </div>
   </Context.Provider>
  );
}

export default App;
