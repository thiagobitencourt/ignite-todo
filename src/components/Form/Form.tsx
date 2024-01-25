import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { PlusIcon } from '../Icons/Icons';
import styles from './Form.module.css';

export interface FormProps {
    onNewTodo: (todoText: string) => void;
}

export function Form(props: FormProps) {
    const [newTodo, setNewTodo] = useState('');

    function handleSubmitNewTodo(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        if (newTodo) {
            props.onNewTodo(newTodo);
            setNewTodo('');
        }
    }

    function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
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
