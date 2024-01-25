import { Todo } from '../../types';
import styles from './Status.module.css';

export interface StatusProps {
    items: Todo[];
}

export function Status({ items }: StatusProps) {
    const criadas = items.length;
    const concluidas = items.filter(item => item.completed).length;

    return (
        <div className={styles.statusBar}>
            <div className={styles.todo}>
                <span>Tarefas criadas</span>
                <span className={styles.counter}>{criadas}</span>
            </div>
            <div className={styles.done}>
                <span>Concluidas</span>
                <span className={styles.counter}>{concluidas}</span>
            </div>
        </div>
    );
}
