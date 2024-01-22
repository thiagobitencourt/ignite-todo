import { useState } from 'react';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import { Form } from './components/Form/Form';

import styles from './App.module.css';

function App() {
  const [items, setItems] = useState([  ]);

  function handleNewTodo(newItem) {
    setItems(itemsList => [newItem, ...itemsList]);
  }

  return (
    <>
        <Header />
        <main className={styles.container}>
          <Form onNewTodo={handleNewTodo} />
          <List items={items}/>
        </main>
    </>
  )
}

export default App;
