import { useState } from 'react';
import styles from './Form.module.css';
import { PlusIcon } from '../Icons/Icons';

export function Form(props) {
    const [newTodo, setNewTodo] = useState('');

    function handleSubmitNewTodo(event) {
        event.preventDefault();
        if (newTodo) {
            props.onNewTodo(newTodo);
            setNewTodo('');
        }
    }

    function handleNewTodoChange(event) {
        setNewTodo(event.target.value);
    }

    return (
        <form className={styles['new-todo']} onSubmit={handleSubmitNewTodo}>
            <input name="todo" placeholder="Adicione uma nova tarefa" onChange={handleNewTodoChange} value={newTodo} />
            <button disabled={!newTodo}>
                <span>Criar</span>
                <PlusIcon />
            </button>
        </form>
    )
}
