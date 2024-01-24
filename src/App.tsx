import { useState } from 'react';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import { Form } from './components/Form/Form';
import { Status } from './components/Status/Status';

import styles from './App.module.css';

function App() {
  const [items, setItems] = useState([  ]);

  function handleNewTodo(newItem) {
    const itemObj = { id: items.length, todo: newItem, completed: false };
    setItems(itemsList => [itemObj, ...itemsList]);
  }
  
  function handleDeleteItem(deleteItem) {
    setItems(itemsList => itemsList.filter(item => item.id !== deleteItem.id));
  }

  function handleToggleComplete(item, completeStatus) {
    const sortedItemsList = items.map(todo => {
      if (todo.id === item.id) {
        todo.completed = completeStatus;
      }
      return todo;
    });
    // Sort, false values first
    sortedItemsList.sort((x, y) => (x.completed === y.completed) ? 0 : x.completed ? 1 : -1);
    setItems(sortedItemsList);
  }

  return (
    <>
        <Header />
        <main className={styles.container}>
          <Form onNewTodo={handleNewTodo} />
          <Status items={items} />
          <List items={items} onDeleteItem={handleDeleteItem} onToggleComplete={handleToggleComplete} />
        </main>
    </>
  )
}

export default App;
