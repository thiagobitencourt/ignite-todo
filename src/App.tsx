import { useState } from 'react';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';

import styles from './App.module.css';

function App() {
  const [items, setItems] = useState([  ]);

  function handleNewItem(newItem) {
    setItems(itemsList => [newItem, ...itemsList]);
  }

  return (
    <main className={styles.todo}>
      <Header />
      <List items={items}/>
    </main>
  )
}

export default App;
