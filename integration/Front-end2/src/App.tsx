import { useState, useEffect} from 'react';
import { Todo } from './types/Todo';
import { TodoCard } from './components/todoCard';
import * as API from './api/Todoapi';
 
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoName, setNewTodoName] = useState<string>('');
  async function handleFetchTodoData() {
    try {
    const resp = await API.getTodoAPI();
    setTodos(resp.data ?? []);
    console.log(resp);
    } catch (error) {
      console.error("Error loading todos:",error);
      
    }
  }
  useEffect (() => {
    handleFetchTodoData();
  }, []);

  async function handleCreateTodo() {
    if (!newTodoName.trim()) return; // prevent empty names
  
    try {
      const resp = await API.createTodoAPI(newTodoName);
      if (resp.success) {
        setNewTodoName('');
        handleFetchTodoData(); // refresh list
      } else {
        console.error("Create failed:", resp.msg);
      }
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  }
  

  function handleAdd() {
    const newTodo: Todo = {
      id: todos.length + 1,
      name: newTodoName,
      success: false,
    };
    setTodos((previous) => {
      return [...previous, newTodo];
    });
    setNewTodoName('');
  }
  function handleEditName(id: number, newName: string) {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            name: newName,
          };
        } else return todo;
      })
    );
  }
  function handleSuccess(id: number) {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id)
          if(todo.success === false){
            return {
              ...todo,
              success: true,
            };
          }
          else{
            return {
              ...todo,
              success: false,
            };
          }
        return todo;
      })
    );
  }
  function handleDelete(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  } // Do smth
  return (
    <div className='w-screen h-screen bg-red-300 flex p-10 justify-center'>
      <div className='flex flex-col gap-10'>
        <div>
          <input
            placeholder='New Todo'
            value={newTodoName}
            onChange={(e) => setNewTodoName(e.target.value)}
          />
          <button onClick={handleAdd}>Add Todo</button>
        </div>
        {todos.map((todo, index: number) => (
          <TodoCard
            key={index}
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEditName}
            handleSuccess={handleSuccess}
          />
        ))}
      </div>
    </div>
  );
}
 

export default App;
