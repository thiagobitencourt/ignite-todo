import { DeleteIcon } from '../../Icons/Icons';
import styles from './Item.module.css';

export function Item({ item, onDelete, onToggleComplete }) {
    return (
        <li className={styles.item}>
            <div>
                <input type="checkbox" checked={item.completed} onChange={(e) => onToggleComplete(e.target.checked)}/>
            </div>
            <div className={item.completed ? styles.completed : ''}>
                <p>{item.todo}</p>
            </div>
            <div>
                <button className={styles.delete} onClick={() => onDelete(item)}>
                    <DeleteIcon />
                </button>
            </div>
        </li>
    )
}
