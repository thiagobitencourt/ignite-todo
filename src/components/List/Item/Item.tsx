import { Todo } from '../../../types';
import { DeleteIcon } from '../../Icons/Icons';
import { Checkbox } from '../Checbox/Checkbox';
import styles from './Item.module.css';

export interface ItemProps {
    todo: Todo;
    onDelete: (todo: Todo) => void;
    onToggleComplete: (status: boolean) => void;
}

export function Item({ todo, onDelete, onToggleComplete }: ItemProps) {
    return (
        <li className={styles.item}>
            <div>
                <Checkbox checked={todo.completed} onChange={(e) => onToggleComplete(e.target.checked)} />
            </div>
            <div className={todo.completed ? styles.completed : ''}>
                <p>{todo.text}</p>
            </div>
            <div>
                <button className={styles.delete} onClick={() => onDelete(todo)}>
                    <DeleteIcon />
                </button>
            </div>
        </li>
    )
}
