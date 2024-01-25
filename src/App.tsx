import { useState } from 'react';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import { Form } from './components/Form/Form';
import { Status } from './components/Status/Status';
import { Todo } from './types';

import styles from './App.module.css';

function App() {
  const [todoList, setTodoList] = useState([] as Todo[]);

  function handleNewTodo(todoText: string) {
    const newTodo: Todo = { id: todoList.length, text: todoText, completed: false };
    setTodoList(currentList => [newTodo, ...currentList]);
  }
  
  function handleDeleteTodo(deleteTodoItem: Todo) {
    setTodoList((currentList: Todo[]) => currentList.filter(todo => todo.id !== deleteTodoItem.id));
  }

  function handleToggleCompleteTodo(todoItem: Todo, completeStatus: boolean) {
    const updatedTodoList = todoList.map(todo => {
      if (todo.id === todoItem.id) {
        todo.completed = completeStatus;
      }
      return todo;
    });

    // Sort, false values first
    updatedTodoList.sort((x, y) => (x.completed === y.completed) ? 0 : x.completed ? 1 : -1);
    setTodoList(updatedTodoList);
  }

  return (
    <>
        <Header />
        <main className={styles.container}>
          <Form onNewTodo={handleNewTodo} />
          <Status items={todoList} />
          <List items={todoList} onDeleteItem={handleDeleteTodo} onToggleComplete={handleToggleCompleteTodo} />
        </main>
    </>
  )
}

export default App;
