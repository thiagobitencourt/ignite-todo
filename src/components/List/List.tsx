import styles from './List.module.css';
import { Item } from './Item/Item';
import { EmptyIcon } from '../Icons/Icons';

export function List({ items, onDeleteItem, onToggleComplete }) {

    const hasItems = !!items?.length;

    function renderItemList() {
        return (
            <ul className={styles['item-list']}>
                {items.map(item => <Item key={item.id} item={item} onDelete={() => onDeleteItem(item)} onToggleComplete={(status) => onToggleComplete(item, status)}/>)}
            </ul>
        );
    }

    function renderEmptyMessage() {
        return (
            <div className={styles['empty-message']}>
                <EmptyIcon />
                <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                <p><span>Crie tarefas e organize seus itens a fazer</span></p>
            </div>
        );
    }

    return (
        <section className={styles.list}>
            {
                hasItems
                ? renderItemList()
                : renderEmptyMessage()
            }
        </section>
    )
}
